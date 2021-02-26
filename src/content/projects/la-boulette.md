---
title: La Boulette Game
date: 2021-02-20T23:40:13.529Z
customSlug: /la-boulette
cover: /img/boulette.png
tags:
  - web-development
---

_Technologies used: React, Redux, Typescript, Firebase, Firebase Cloud Functions, Twillio._

_Code available [here on Github](https://github.com/Justinette2175/boulette-game)_

### Background

Seeing the appetite increase for online games that can be played over video call with the COVID pandemic, I implemented an online version of the famous Quebec game "La Boulette".

<div class="w-full relative h-0" style="padding-bottom: 56.25%">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tEJzQMsbErA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe></div>

### Project

Players join the a game using a referral link and are assigned to one of two teams. Each player writes down words which go into a metaphorical bowl. The players then take turns pulling words out of the bowl and having other players on their team guess them. Each round consists in using a different technique to have teammates guess the words. First speaking, then miming, then using only one word, only using sounds, and finally only using facial expressions.

Unlike other online versions of board games, my application directly integrates video calling within the application because I wanted to manage whose video is displayed based on who is miming at a given moment. This design decision added complexity to the development because I had to explore different provders and integration to select a reliable yet affordable one. In addtion, since providers of quality video services charge by number of users and minutes spent on a call, I decided to integrate a payment service into the application to safeguard against skyrocketing fees.

After months in the making, the game is in its final stages of testing and bug-fixing before deployment.

### Design evolution

![Prelminary design](boulette-design-4.png)

![Alternative design](boulette-design-3.png)

![Mobile screens](boulette-design-2.png)

![More mobile screens](boulette-design-1.png)
