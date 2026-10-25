---
title: Community Bonding
date: 2026-05-01
series: GSoC 2026
phase: Community Bonding
goal: Establish context, working agreements, and an evidence-led engineering plan.
summary: "Mapping VoxBento end to end and deciding the one rule the architecture follows: keep Python out of the live audio path."
prs: []
---

## Problem

Real-time interpretation needs a browser workflow that can carry low-latency audio while still providing event configuration, access control, listener language selection, captions, and multilingual processing.

## Investigation

I traced the separate concerns through VoxBento: browser WebRTC clients, MediaMTX media endpoints, FastAPI routes and WebSockets, the database model, and the worker modules for transcription, translation, and TTS.

## Decision

The direct audio path stays with MediaMTX. The application layer coordinates people, booths, and processing work through FastAPI, async persistence, and WebSockets rather than placing Python in the audio stream.

## Implementation and Result

The resulting system provides WHIP ingest for interpreters, WHEP playback for listeners, RTSP input for workers, and HLS fallback. Jitsi remains available for floor monitoring, distinct from the interpretation broadcast path.

## Learning

Low latency is an architectural property, not a frontend feature. Keeping transport, coordination, and AI processing responsibilities distinct makes each part easier to reason about and operate.