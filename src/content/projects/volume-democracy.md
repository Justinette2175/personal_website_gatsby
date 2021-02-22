---
title: Volume Democracy
date: 2021-02-21T03:36:49.998Z
customSlug: /volume-democracy
tags:
  - web-development
---

**Out of personal frustration and an inkling that a majority of people dislike overly loud music in public places - I us call the silent majority :p - I created a piece of software that allows users to visit a URL to vote what the volume in a given location should be set at. The software aggregates votes and automatically adjusts the volume of the room administrator’s device to match the democratic vote.**

The room administrator runs a local program on their machine (Mac only). The program controls the volume of the machine using Apple Scripts and exposes an express API which is made available to the internet using an ngrok tunnel.

They then create a room on the remote application and share the room’s unique URL with the people in the restaurant, cafe, or party. People can then visit the URL and cast their vote.

This application is still under development. While the main parts are built and functional, I have yet to test it in a public event setting. I would like to try different voting systems and user interactions. How often should people be allowed to vote? Should they select a specific volume level or only vote on whether to turn the sound up or down?
