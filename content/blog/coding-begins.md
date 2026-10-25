---
title: "Coding Begins: Week 01 in the Weeds with WebRTC, WHIP, and MediaMTX"
date: 2026-05-25
series: "GSoC 2026"
phase: "Extended 22-week coding period"
goal: "Implement resilient browser-side WHIP/WHEP negotiation, dynamic MediaMTX path provisioning, and clean audio constraints."
summary: "Week 01 of active implementation: moving from architectural diagrams to raw SDP handshakes, ICE gathering, and debugging cross-browser WebRTC quirks."
prs: []
---

## From Architecture to the Terminal

On May 25, 2026, the planning phase ended and the implementation sprint began. There is always a strange mix of dread and exhilaration when you switch from writing clean architecture documentation to opening a blank IDE window and writing the first lines of code that will actually push bits across a network.

My goal for Week 01 was concrete: get an interpreter to open a browser tab, click "Go On Air", negotiate a WebRTC connection via WHIP to an instance of MediaMTX running in Docker, and have a second listener tab open and play that audio feed back via WHEP with zero noticeable lag.

## The Reality of Browser WHIP Clients

WHIP (RFC 9436) was standardized to eliminate the messy, non-standard signaling protocols that plagued early WebRTC applications. In theory, it is as simple as:
1. Browser generates an SDP Offer (`RTCPeerConnection.createOffer()`).
2. Browser sends an `HTTP POST` request with `Content-Type: application/sdp` to the media server endpoint.
3. Media server responds with `HTTP 201 Created` and its SDP Answer in the body.
4. Browser calls `RTCPeerConnection.setRemoteDescription()` with the answer. Done!

In practice, browsers don't make it quite that effortless.

### 1. ICE Candidate Trickle vs. Full Gathering
MediaMTX expects the initial SDP offer to contain all valid ICE candidates, or at least the host candidates, because a bare HTTP POST does not maintain an interactive trickle-ICE signaling channel unless you implement additional PATCH endpoints.

If you send the offer immediately after `createOffer()`, the candidate list is often empty, leading to silent connection timeouts behind NAT routers. I had to implement an explicit ICE gathering listener:

```typescript
async function gatherCompleteOffer(pc: RTCPeerConnection): Promise<RTCSessionDescriptionInit> {
    const offer = await pc.createOffer({
        offerToReceiveAudio: false,
        offerToReceiveVideo: false,
    });
    await pc.setLocalDescription(offer);

    if (pc.iceGatheringState === 'complete') {
        return pc.localDescription!;
    }

    return new Promise((resolve) => {
        const checkState = () => {
            if (pc.iceGatheringState === 'complete') {
                pc.removeEventListener('icegatheringstatechange', checkState);
                resolve(pc.localDescription!);
            }
        };
        pc.addEventListener('icegatheringstatechange', checkState);
        // Safety timeout so we never deadlock if a candidate trickles endlessly
        setTimeout(() => resolve(pc.localDescription!), 2000);
    });
}
```

### 2. Audio Constraints and Opus Tuning
For speech interpretation, default consumer microphone settings can destroy nuance. Voice interpreters speak quickly, often whisper or modulate tone, and work with specialized headsets. Default browser processing like aggressive auto-gain-control (AGC) or non-linear noise suppression can cause interpreters' voices to "pump" unnaturally or swallow soft phonemes.

I configured custom audio constraints specifically tuned for voice fidelity:
- `echoCancellation: true` (essential if interpreters don't use closed-back headphones)
- `noiseSuppression: true`
- `autoGainControl: false` (leaving dynamic range intact)
- `channelCount: 1` (mono voice saves upstream bandwidth while preserving clarity)

In the SDP munging layer, I verified that the Opus payload profile specifies `minptime=10; useinbandfec=1` so that minor packet drops on conference Wi-Fi networks can be interpolated gracefully by the browser's built-in forward error correction.

## Dynamic Path Provisioning via FastAPI

In a physical venue, an event might have 4 concurrent stages, each with 3 language booths (e.g., English, Spanish, Japanese). MediaMTX needs distinct path endpoints for each:
`/live/{event_slug}/{stage_id}/{language_code}`.

Hardcoding configuration files in YAML was out of the question. I wired FastAPI to MediaMTX's internal control API. When an interpreter signs into the VoxBento console and selects their booth:
1. FastAPI validates their session token and booth assignment.
2. An authorized ephemeral publishing ticket is issued.
3. MediaMTX dynamically registers the path configuration with write permissions restricted to that ticket's bearer token.
4. When the interpreter goes off-air, the path cleanly resets without restarting the media server daemon.

## The Moment of Truth

By late Friday night of Week 01, I had two laptops set up on opposite sides of my desk:
- Laptop A (Interpreter): plugged in a USB microphone, spoke into the microphone counter: *"Testing audio stream, one two three, testing latency."*
- Laptop B (Listener): connected over a throttled Wi-Fi network, wearing headphones.

The voice came through instantly. Crisp, clear, with that distinct immediacy that only WebRTC delivers. When I clapped my hands into the mic, the clap arrived at the listener's ear in under 180 milliseconds—virtually indistinguishable from an analog radio broadcast.

Week 01 laid the concrete foundation. The transport worked. Next up: building the real-time booth control state machine, floor audio monitoring, and the async transcription bridge.
