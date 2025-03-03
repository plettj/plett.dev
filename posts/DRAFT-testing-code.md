---
title: "Why Testing Code is Bad"
subtitle: "..."
preview: "OPG preview"
date: "..."
tags: ["quick", "writing"]
lat: "..."
long: "..."
---

Explanation of why I generally hate testing, especially on the frontend.

- It should only be on extremely large teams, and even then, the necessity for testing stems in majority from non-detail-oriented teammates losing stuff in the weeds.
- Example of bad testing, a team with 1.5 devs who are building fast added tests to utilities for switching between monthly sections. It contained twelve tests of literally 3 utility functions "get next period" "get previous period" and "get display text" and yet the code not only didn't handle wrapping around the year (202312 -> 202301 instead of 202401) above or below, and _there were tests for that_ but the tests were copy-pasted and hadn't been testing the correct numbers. So they failed as soon as I fixed the functions. (Jan 2025)
- Testing usually requires over-fitting to the existing form of the project, and new projects change fast enough that that becomes a problem. For example, with playwright or a similar static testing library, in order for the test to know which buttons to click, you either 1. need to add maintenance-time sucking bloat to the existing codebase in the form of ids, or 2. write css selectors in the test that overfit to the point of absolute uselessness (we're talking 20 selectors relying stuff like a specific UI wrapper component's size styling).
