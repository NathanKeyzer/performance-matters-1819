# Performance Matters @cmda-minor-web · 2018-2019

This is my music web application
With this course i made my web application based on the last.fm api server side. Therefore is used node and express.

I made some changes for performance.

Run a audit via chrome browser on a slow 3g connection.
![audit result](https://raw.githubusercontent.com/NathanKeyzer/performance-matters-1819/master/public/images/audit.png)

## Leerdoelen

- _Je weet het verschil tussen client side en server side rendering en kan server side rendering toepassen_
- _Je begrijpt hoe de critical render path werkt, en hoe je deze kan optimaliseren voor een betere runtime en/of perceived performance._
- _Je begrijpt hoe een Service Worker werkt en kan deze in jou applicatie implementeren._

### Week 1 - Server Side rendering

during this week i build my webapp from client side to serverside. I did this with node and express.
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

![first-run](https://github.com/NathanKeyzer/performance-matters-1819/blob/master/public/images/run1.png?raw=true)

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
