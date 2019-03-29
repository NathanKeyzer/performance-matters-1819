# Performance Matters @cmda-minor-web · 2018-2019

[Live demo](https://performancemusic.herokuapp.com/)
![application](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/app.png?raw=true)
This is my music web application. For this course i made my web application based on the last.fm api server side.

## Table of contents

- [The application](theapplication)
- [First optimization](firstoptimization)
- [First time](firsttime)
- [Second Time](secondtime)
- [Last run](lastrun)
- [Service worker](serviceworker)
- [Manifest](manifest)
- [PWA](pwa)
- [Terms](terms)

## The application

Building my webapp from clientside to serverside with node and express.
Rendering a overview and a detail page.

## First optimization

During this week i made a few changes to optimize my app. Working with cache controls to cache my files. This all is to perform the user experience. To check al of these thing i run an audit via the inspector.

Whit this test i noticed that the elements where i render data where small. without image of the artist, to optimize this i reserved space for the image, so de container that holds the images holds it size while loding the page.

### First time

![first-run](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/run1.png?raw=true)

Results after first audit![first-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/audit1.png?raw=true)

### Second Time

![second-run](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/run2.png?raw=true)

Audit 2 after making some extra changes in my path to a detail page of the artist.
![second-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/audit2.png?raw=true)

### Last run

Last audit made with a high score mostly to optimize the progressive web app. There are still some optimalisations to do as you can see
![last-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/result1.png?raw=true)

![service-worker](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/lastaudit.png?raw=true)
Last run with the service worker.

### Service worker

Results with the service worker. With the precaching files. The root, main.css and main.js. With this the application can also run offline.
![serviceworker](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/sworker1.png?raw=true)

### Content load

Time To First Byte identifies the time at which your server sends a response [source](https://developers.google.com/web/tools/lighthouse/audits/ttfb)

### Manifest

With the manifest i am able to make an chrome application.
![icon-device](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/performance_icon.png?raw=true)

### PWA

These are the final result of my PWA.
![pwa](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/pwa1.png?raw=true)

### Terms

- Perceived performance: Refers to how quickly a software feature appears to perform its task

- Repeat view: Is a repeated visit to the application where some files are stored in the cache.

- Image loading: Space that is reserved for the image to load.

- Runtime performance: Often runtime performance can be improved through minor changes to your source programs. The amount of improvement each change provides depends on how your program is organized. The functions and language constructs your program uses

- Time to first byte: Time To First Byte identifies the time at which your server sends a response

[MIT](LICENCE) © [Nathan Keyzer](https://nathankeyzer.nl)
