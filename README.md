# Performance Matters @cmda-minor-web · 2018-2019

[Live demo](#)
![application](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/app.png?raw=true)
This is my music web application
With this course i made my web application based on the last.fm api server side. Therefore is used node and express.

I made some changes for performance.

Run a audit via chrome browser on a slow 3g connection.
![audit result](https://raw.githubusercontent.com/NathanKeyzer/performance-matters-1819/master/public/images/audit.png)

perceived performance: Refers to how quickly a software feature appears to perform its task

First view: First View is a web performance metric that represents what a first-time visitor to a webpage will experience.

Repeat view: Is a repeated visit to the application where some files are stored in the cache.

Image loading: Space that is reserved for the image to load.

Runtime performance: Often runtime performance can be improved through minor changes to your source programs. The amount of improvement each change provides depends on
How your program is organized
The functions and language constructs your program uses

Time to first byte: Time To First Byte identifies the time at which your server sends a response

### Week 1 - Server Side rendering

During this week i build my webapp from client side to serverside. I did this with node and express.
Doing this took me a few days to get along with node and express.

### Week 2 - Critical Rendering Path

During this week i made a few changes to optimalise my app. working with cache controls to cache my files
This all is to perform the user experience.
to check al of these thing i run an audit via the inspector in chrome.

whit this test i noticed that the elements where i render data are small whitout image of the artist, to omtimalise this i reserved space for the image. So de container that holds the images will expand.

Doel: Critical Rendering path optimaliseren

Made some changes in the HTML to serve the images while loading the web application.

### Week 3 - Going Offline

Doel: Webpagina's offline beschikbaar stellen

Thuis week i started with making a todo list to sort out what i have to do this week.

I build my last.fm webapp with node
with this app you can see an overview of the toptracks i listened to. When you click on the artist you will see a detail page.

to make this app really quick i did a few performance optimalisations.

First of al was to make my app from client side to server side. Build it with node. It took me a few days to build this completely so everything works f

### Time to first byte

Time To First Byte identifies the time at which your server sends a response [source](https://developers.google.com/web/tools/lighthouse/audits/ttfb)
![first-run](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/run1.png?raw=true)

#### Second run

![second-run](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/run2.png?raw=true)

![service-worker](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/lastaudit.png?raw=true)
Last run with the service worker.

### Audits

#### First audit

Webapp build with node and express.
results after first audit![first-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/audit1.png?raw=true)

#### Second audit

Audit 2 after making some extra changes in my path to a detail page of the artist.
audit number 2![second-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/audit2.png?raw=true)

#### Last audit

Last audit made with on most things a high score mosttly to optimize the progressive web app
there are stil some optimalisations to do as you can see
![last-audit](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/result1.png?raw=true)

[MIT](LICENCE) © [Nathan Keyzer](https://nathankeyzer.nl)
