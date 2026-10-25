---
title: "Coding Begins: Week 01"
date: 2026-05-25
series: GSoC 2026
phase: Extended 22-week coding period
goal: Begin implementation after the May 1–24 Community Bonding period.
summary: The official GSoC coding period begins, with the project scheduled on the extended timeline through November 2.
prs: []
---

## Starting Point

The extended coding period started on May 25. The system work is organized around a clear responsibility split: low-latency media transport, application coordination, and asynchronous speech processing.

## Engineering Focus

The foundation is a browser WebRTC workflow: WHIP for interpreter ingest, WHEP for listener playback, MediaMTX for media transport, and FastAPI for application state and worker coordination.