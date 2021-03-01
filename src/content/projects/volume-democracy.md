---
title: Volume Democracy
date: 2021-02-21T03:36:49.998Z
customSlug: /volume-democracy
cover: /img/volume_1.jpg
tags:
  - web-development
---

_Built with React, Websockets, Express, Redis, Apple Scripts, Netlify_

_Code available [here on Github](https://github.com/Justinette2175/volume-poll)_

### Background

Out of personal frustration and an inkling that a majority of people dislike overly loud music in public places - _I us call the silent majority :p_ - I created an application that allows people to use their phones to vote on whether to increase or decrease the volume of the music in a public place.

![Storyboard of the volume democracy interaction](volume.jpg)

### Project

_Volume Democracy_ allows users to visit a URL to vote on what the volume in a given location should be set at. The software aggregates votes and automatically adjusts the volume of the room administrator’s device to match the democratic vote.

The room administrator runs a local program on their machine. The program controls the volume of the machine using Apple Scripts and exposes an Express API which is made available to the internet using an ngrok tunnel.

They then create a room on the remote application and share the room’s unique URL with the people in the restaurant, cafe, or party. People can then visit the URL and cast their vote.

The program continuously aggregates votes and updates the volume in real time.

This application is still under development. While the main parts are built and functional, I have yet to test it in a public event setting. I would like to try different voting systems and user interactions. How often should people be allowed to vote? Should they select a specific volume level or only vote on whether to turn the sound up or down?
