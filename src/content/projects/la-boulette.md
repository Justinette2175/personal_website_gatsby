---
title: La Boulette Game
date: 2021-02-20T23:40:13.529Z
customSlug: /la-boulette
---

Seeing the appetite increase for online games that can be played over video call with the COVID pandemic, I implemented an online version of the famous Quebec game "La Boulette".

Players join the a game using a referral link and are assigned to one of two teams. Each player writes down words which go into a metaphorical bowl. The players then take turns pulling words out of the bowl and having other players on their team guess them. Each round consists in using a different technique to have teammates guess the words. First speaking, then miming, then using only one word, only using sounds, and finally only using facial expressions.

Unlike other online versions of board games, my application directly integrates video calling within the application because I wanted to manage whose video is displayed based on who is miming at a given moment. This design decision added complexity to the development: aince providers of quality video services charge by number of users and minutes spent on a call, I had to integrate a payment service into the application to safeguard against skyrocketing fees.

After months in the making, the game is in its final stages of testing and bug-fixing before deployment.

_Technologies used: React, Redux, Typescript, Firebase, Firebase Cloud Functions, Twillio._
