---
title: "Platform Integrations: Upstream Engineering, Lanczos Resampling, and the Gritty Realities of Open Source"
date: 2026-09-05
series: "GSoC 2026"
phase: "Extended coding / upstream integration"
goal: "Strengthen the broader FOSSASIA event ecosystem through concrete upstream contributions across Eventyay, Eventyay Business, and Star-Me."
summary: "The unglamorous, critical work of upstream engineering: fixing Lanczos image resampling in Eventyay core, EXIF rotation handling, Eventyay Business subscription quotas, and repairing Star-Me automation."
prs:
  - https://github.com/fossasia/eventyay/pull/5175
  - https://github.com/fossasia/star-me/pull/46
---

## The Myth of Greenfield Engineering

Junior developers often imagine that software engineering is about sitting in a clean room, spinning up an empty Git repository, and writing flawless code from scratch with zero baggage.

The reality of open source is completely different. Real impact happens when you learn to operate inside large, living ecosystems—diving into mature codebases with hundreds of contributors, years of legacy architectural decisions, and thousands of active users who depend on the service every day.

During August and September 2026, alongside VoxBento's core development, I dedicated significant effort to upstream engineering across the FOSSASIA event stack: **Eventyay** (our open-source event management platform), **Eventyay Business** (the commercial billing and tiers engine), and **Star-Me** (community repository discovery automation).

## Fixing Image Resampling in Eventyay Core (PR #5175)

One seemingly minor issue in Eventyay was causing massive headaches for organizers: speaker profile pictures and event banners were frequently getting corrupted, distorted, or rotated sideways when uploaded from modern smartphones.

When you look into why, the problem is fascinatingly complex:
1. Modern mobile cameras (iPhones and Androids) do not physically rotate image sensor pixels when you hold the phone in portrait mode; instead, they save the image in native landscape orientation and write an EXIF metadata orientation tag (values 1 through 8).
2. Naive image resizing libraries ignore this metadata, resulting in speaker portraits appearing sideways or upside down on public event schedules.
3. Furthermore, standard nearest-neighbor or bilinear resizing algorithms produced noticeable blurriness, Moire patterns, and jagged artifacts on high-DPI Retina screens.

In [Eventyay PR #5175](https://github.com/fossasia/eventyay/pull/5175), I overhauled the entire image processing pipeline:
- **EXIF Transposition**: Added automatic EXIF orientation normalization (`ImageOps.exif_transpose`) before any transformation occurs, guaranteeing that uploaded photos maintain their true visual orientation.
- **LANCZOS Resampling**: Upgraded the thumbnail and avatar downscaling algorithm to high-order **LANCZOS filtering**, ensuring razor-sharp edges and smooth gradients across speaker cards.
- **Privacy Stripping**: Deliberately stripped extraneous EXIF tags (such as GPS coordinates, camera serial numbers, and exposure timestamps) from public image outputs to protect speaker and attendee privacy.
- **Aspect Ratio Clamping**: Implemented smart dimension clamping that prevents awkward stretching or unexpected aspect ratio distortion.

## Structuring Eventyay Business Tiers

In `eventyay-business`, the challenge was architectural. The platform needed a clean model to support tiered organizer plans (Free, Community, Enterprise) with granular usage entitlements for add-on services like live streaming, custom domains, and VoxBento interpretation minutes.

The critical requirement was **auditability**: you cannot build billing logic around mutable in-memory counters. If an organizer questions their bill or exceeds their audio minute allocation during a 3-day conference, the system must provide an immutable historical audit log.

I contributed to establishing:
- Versioned plan and entitlement models with strict database constraints.
- Explicit usage recording that tracks consumable quotas (e.g. streaming hours, concurrent listener seats).
- Clear organizer dashboard visibility, ensuring community organizers can see their current usage in real time before encountering hard cut-offs.

## Rescuing Star-Me Browser Automation (PR #46)

The **Star-Me** tool helps onboard new FOSSASIA community members by guiding them through discovering and starring relevant ecosystem repositories on GitHub. However, the automated Puppeteer workflow had completely broken: scripts were hanging indefinitely, failing to detect successful actions, and crashing with timeout exceptions.

GitHub's frontend team had rolled out significant DOM changes, altering button attributes, modal structures, and CSP headers. In [Star-Me PR #46](https://github.com/fossasia/star-me/pull/46), I reworked the automation flow:
- Replaced fragile CSS class selectors with robust, accessible ARIA role selectors and stable DOM attributes.
- Implemented exponential backoff and intelligent retry logic to handle rate-limiting and temporary network hiccups without aborting the entire user session.
- Added explicit popup and cross-origin iframe guards to prevent headless browser deadlocks.

## What Upstream Work Teaches You

Contributing upstream is humbling. It forces you to write code that adheres strictly to existing conventions, respect backward compatibility, write thorough automated tests, and communicate clearly in PR descriptions.

More importantly, it taught me that **VoxBento does not live on an island**. A live interpretation tool is only as good as the event platform that organizes the schedule, the speaker profiles that introduce the talks, and the community tooling that welcomes new contributors. Building end-to-end software means caring about the whole chain, not just the fun parts.
