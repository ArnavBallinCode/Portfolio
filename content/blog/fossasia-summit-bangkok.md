---
title: "FOSSASIA Summit 2026: Bangkok, Street Food, and the Spark for VoxBento"
date: 2026-03-03
series: "GSoC 2026"
phase: "Community & Pre-GSoC"
goal: "Connect with the global FOSSASIA community in person and identify real-world pain points in event infrastructure."
summary: "Landing in Bangkok, hacking late into the night with Vedansh and Srivatsav, meeting Mitch Altman, and witnessing firsthand the acute language barrier that sparked the idea for VoxBento."
prs: []
---

## Stepping Off the Plane into the Bangkok Heat

Stepping out of Suvarnabhumi Airport in early March 2026, the first thing that hit me was the humidity and the sensory overload of Bangkok. It was my first time traveling abroad for a major international open-source conference, and I was carrying a mix of nervous excitement, jet lag, and an oversized backpack stuffed with hardware, cables, and notebooks.

FOSSASIA Summit wasn't just another tech conference on a calendar. For months, I had been interacting with community members, maintainers, and contributors on GitHub pull requests and chat channels. Seeing those GitHub handles turn into real people with voices, laughs, and distinct personalities over bowls of street noodles was an experience no virtual call could ever replicate.

## Hacking, Ferry Rides, and Traditional Clothes

The days in Bangkok were an exhilarating blur. Between sessions, we took the longtail ferry across the bustling Chao Phraya river, watching traditional wooden boats glide past skyscrapers. Walking through the night markets with Vedansh, Quan, Tony, and Velia, our conversations ping-ponged effortlessly between street food recommendations and the quirks of WebRTC media pipelines.

One of the standout moments was at the opening ceremony, where Hong Phuc Dang invited us to wear traditional Vietnamese Ao Dai. Standing there among contributors from Vietnam, Germany, Singapore, India, and the United States, I felt a deep sense of belonging. Open source is truly borderless—not in a cheesy marketing way, but in the tangible sense that people who grew up thousands of miles apart can rally around a shared set of tools and values.

During the hackathon, Srivatsav, Vedansh, and I practically camped out at our laptops. Fuelled by iced coffee and local snacks, we iterated on Eventyay bugs, discussed frontend performance bottlenecks, and brainstormed new ideas until the venue staff gently reminded us it was past midnight.

## Meeting Mitch Altman

At the community booth, I had the honor of spending time talking with **Mitch Altman**—legendary hardware hacker, inventor of the TV-B-Gone, and co-founder of Noisebridge. Mitch has an aura of pure, gentle curiosity. Talking with him wasn't about high-level corporate buzzwords; it was about the joy of learning, the ethics of hacker culture, and why building open tools for human empowerment is worth dedicating your life to. He reminded me that the best open-source projects don't start from complex business models; they start from someone noticing an unsolved problem and refusing to look away.

## The Problem in the Room

Later in the week, I stood on the FOSSASIA stage to present our development work on the Eventyay platform. The adrenaline was rushing, the audience was engaged, and the Q&A was energetic. But sitting in the audience during other tracks, a glaring issue kept presenting itself.

FOSSASIA brings together speakers from Thailand, Japan, China, Vietnam, Germany, India, and beyond. In session after session, language barriers were palpable:
- Attendees whose primary language wasn't English struggled to follow fast-paced technical deep dives.
- Local community members who were brilliant practitioners hesitated to ask questions during Q&A because they didn't feel confident speaking English.
- Professional booth interpretation equipment was absent because it was prohibitively expensive, required specialized RF headsets, dedicated physical soundproof booths, and proprietary hardware rentals that community conferences simply cannot afford.

I watched a participant pull out their phone, try to use a generic consumer translation app, and give up because the 4-second delay and audio feedback made it impossible to stay synchronized with the slides.

## The Spark for VoxBento

Right there in Bangkok, the question became unavoidable:

> *Why can't an event organizer run an open-source interpretation service where any interpreter can speak into their laptop browser, and any attendee can scan a QR code on their seat, open a clean web page on their phone, pick their language, and listen with sub-second latency?*

No hardware headsets. No proprietary vendor lock-in. Zero barrier to entry.

That observation was the exact seed for my Google Summer of Code 2026 proposal. When I boarded my flight back from Bangkok, my notebook was filled with rough architectural sketches of WebSockets, RTP packet flows, and media servers. What started as an exciting trip to Thailand had turned into a concrete engineering mission: building **VoxBento**.
