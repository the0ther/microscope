# Notes

Just some notes while working through the demo.


## Meteor terms & concepts

Methods - These are callable server-side functions. Defined by using the `Meteor.methods(object)` function call. Can run these using `Meteor.call(string, object)`.

Template - A bit of html/javascript which is specified using a `<template>` tag. The easiest means of using Templates is by following the established naming-conventions.

Helpers - These are functions/code associated with a Template.

Simulation - This is the means by which MeteorJS reduces apparent latency.



## Meteor naming-conventions


## Access Control and the Database

This can be achieved in one of two ways

1) Allow/deny callbacks
2) Allow/deny configuration

The flow of these permissions is fairly straightforward. The best explanation I have seen is shown in [this diagram](https://dl.dropboxusercontent.com/u/21643387/img/MeteorJS%20Allow%3ADeny%20Chart.png).






This is the best way to make front-end talk to backend. nice and simple. but if this template were to talk to a 3rd party $
                                    
The code below is a demonstration of Meteor's "reactivity". 


