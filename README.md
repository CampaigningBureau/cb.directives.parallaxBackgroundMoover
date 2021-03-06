#Parallax Background moover
[![npm](https://img.shields.io/npm/dt/cb-directives-parallaxbackgroundmoover.svg)](https://www.npmjs.com/package/cb-directives-parallaxbackgroundmoover)
[![Build Status](https://travis-ci.org/CampaigningBureau/cb.directives.parallaxBackgroundMoover.svg?branch=master)](https://travis-ci.org/CampaigningBureau/cb.directives.parallaxBackgroundMoover)

This directive makes it easy to open a social-media-share link inside a popup window. (But it will also work with any other link)

## Usage with NPM
##### Install
`npm install -S cb-directives-parallaxbackgroundmoover`

##### Require in your angular app
```javascript
const angular      = require('angular'),
      myAngularApp = angular.module('myApp', [
          require('cb-directives-parallaxbackgroundmoover')
      ]);
```

##### Use inside your website
```html
<!-- works with static links -->
<a share-window href="https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.parallaxBackgroundMoover">Share this!</a>

<!-- also works with dynamic links -->
<a share-window ng-href="{{ 'https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.parallaxBackgroundMoover' }}">Share this!</a>
```


## Usage by CDN
##### Load the Script
```html
<script src="https://cdn.rawgit.com/CampaigningBureau/cb.directives.parallaxBackgroundMoover/master/dist/cb.directives.parallaxbackgroundmoover.min.js"></script>
```
> I'm planning to add this repo to [cdnjs](https://cdnjs.com/)

##### Add the dependency
```javascript
var myAngularApp = angular.module('myApp', ['cb.directives.parallaxBackgroundMoover']);
```

##### Use inside your website
```html
<!-- works with static links -->
<a share-window href="https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.parallaxBackgroundMoover">Share this!</a>

<!-- also works with dynamic links -->
<a share-window ng-href="{{ 'https://www.facebook.com/sharer/sharer.php?u=https%3A//github.com/CampaigningBureau/cb.directives.parallaxBackgroundMoover' }}">Share this!</a>
```
