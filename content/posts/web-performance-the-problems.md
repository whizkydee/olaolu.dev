---
title: 'Web Performance: The Problems'
date: 2019-01-04
published: true
tags: ['web performance', 'user experience']
canonical_url: false
description:
  'No doubt, there’s a ton of reasons why websites are slow, some of which are
  case-specific. I like to look at these factors from two perspectives...'
---

We’ve learnt already in the first part of this web performance series why
performance is important and should be budgeted for at every stage of product
development, what benefits it holds for businesses and products, and the
negatives of poor performance. Now, let’s talk about the problems of web
performance; what makes sites slow.

## What makes sites slow?

No doubt, there’s a ton of reasons why websites are slow, some of which are
case-specific. I like to look at these factors from two perspectives:

- the user perspective
- the developer perspective

Really, the _user_ and the _developer_ are the two main parties involved in this
discussion; all other factors that impact web performance like the network from
which the site is accessed, the hardware specs of the device, and the software
fall under the _user_ factor. Same way, developers are responsible for whatever
impacts performance on the tech part of it. So, basically, these two guys are
the players in this game.

That being said, in this article, we’ll look at things less from _user_
perspective, and focus on the development side because most of the problems come
from there, and to move forward, developers have to build with the users in mind
and the various real-life situations they could be caught up in because we
definitely can’t control them; we can’t move all our users to a luxury place
with super-fast internet connection and great devices — that’s unrealistic. So,
let’s jump right into what makes sites on the internet slow today.

Apart from network, hardware, and software limitations which are user factors,
let’s actually talk about the technical causes of poor performance on the front
end.

### 1. Third-party resources and scripts

It’s an absolutely normal and almost inevitable practice to have third-party
resources and scripts on our sites because we most of the time consume
third-party content and services whether it’s analytics, ads, social media
plugins, framework/library resources, we use them.

However, so many times, the authors of these third-party resources just tell us
to plug in their resources to our sites: resources that might depend on other
resources all the way down or might be poorly developed, and then they serve us.
The fact, however, remains that most of these assets are the leading cause of
performance problems on the web because of course, we didn’t build them, we
don’t know how they were built, we do not own them, all we want is their
services and we can’t determine the quality of these services, we can only
assess them and act based on the information.

It’s sad news that third-party resources today have taken over control of tons
of sites that they start to have unintended (sometimes malicious) side effects,
and as developers, most of the time we’re just lazy to take it back. It's very
common to see sites include a huge third-party resource, and then end up using a
very minimal portion of it, say 5% e.g including a 20kb library only to end up
using a component that’s barely worth a kilobyte. That's usually not a great
idea as most of these things can easily be implemented in-house with just a
little bit extra work.

### 2. Heavy assets and resources

We all have that one big file on our sites &ndash; the one big JavaScript asset
or the pretty 1MB image from Unsplash. JavaScript is on top of the list of
frontend resources that impact performance negatively, followed by images and
really, it’s difficult to keep track of these things when everyone is in a rush
and hell-bent on results so we under-prioritize or forget about optmizing for
performance, something that affects our users directly. Users know when your
site is slow, they also know most times what sites consume a lot of their mobile
data.

Engineers write code and craft experiences they find pleasing which more often
than not is at the expense of the user — forgetting what the user needs and what
they perceive to be a great experience. The user has no idea how fancy your code
is or what shiny new tech you're using, they just want to be able to use your
product and have a great experience doing that. And so, if your site is not
accessible quickly, you do not even get the chance to show anything to the user.

### 3. Excessive HTTP Requests

Get! Post! Frontend developers, we love to do that a lot: consuming APIs and all
— it’s fun actually, being able to communicate with a web server, that’s pretty
incredible, right?

Well, yes, it is but sure comes at a cost. Sending requests back and forth can
quickly become overwhelming for a web server to handle. Imagine for a moment
that you’re going to get a snack one day at the office and then, a superior
calls and says “hey, on your way, please get me some venti iced skinny hazelnut
macchiato, sugar-free syrup, extra shot, light ice, no whip coffee”. Extremely
confusing, yeah?

Similar can happen with your server when making requests. If you observe from
that order, the entire purpose and what matters to you the most is getting your
snack, just the way your users want to _use_ your product — they want to satisfy
themselves. Too bad their superior (engineers in this case) took that privilege
away from them. You know how tough it can be to say no to that &ndash; same way
the server can’t say no to your multiple requests. It just must (or at least
attempt to) process the requests regardless of how complicated it is.

Your user might not need all the junks and stuff you’re fetching for them on the
initial load, they need what matters, and you’re in place to answer those
questions. Identify the things you’d want to have on your screen quickly if you
were the user.

### 4. Poor Code Quality

Everyone likes to hop on their computer to start writing code which often gets
us distracted to the point we forget to ask ourselves essential questions like
“Am I doing it the right way?”, “Can this be done better?”, “What are the
implications of doing it this way?”.

A lot from the code quality can affect the performance of your site or product
as an entity. Whether you’re implementing a functionality that should take 10
lines of code in 50 lines, there’s so much dead code, or you’re just writing the
code or using a tool in a way that it’s much slower to function; they all impact
performance. For example, having excessive unused code bumps up file sizes which
could delay HTTP requests and in turn, affect performance.

In fact, all the points listed previously in one way or the other fall under the
quality of code you’re delivering and how knowledgeable a developer might be
with regards to performance. Your JavaScript, CSS, HTML and other applications
on the backend contribute to performance directly or indirectly.

There are some industry standards and practices that should be followed while
building sites. Don’t write code that “just works™”. You should consider if
you’re actually solving that problem in the most efficient way.

## 5. Inadequate server resources

One critical factor often overlooked is the capabilities of the web server
behind a frontend. Nearly all articles and discussions about performance are
usually focused on the frontend. Now, while that isn't wrong as most of the work
is usually on the frontend, the server that powers a frontend can also greatly
affect overall performance.

I mean, sure, you could have a pretty fast frontend but if your server fails to
respond on time, the frontend never even makes it. So, what do I mean? Some
servers have very high [TTFB](https://web.dev/time-to-first-byte) (Time to First
Byte) which is the time it takes for the client get the first byte of response
data from a server after an HTTP request, and so if that server's hardware (CPU,
RAM etc) is inferior or insufficient and it takes long (more than 600ms on an
average network) to get a response for just the main document request, that's a
prolonged page load and so your user just stares at a blank screen for seconds
with no sign of progress which can be really frustrating. Now, even when we get
a response for that main document request, subsequent resources like scripts,
css and images (all of which point to the server) still have to get their first
byte of response data and fully download which can really slow things down.

## Conclusion

Now that you have a clearer view on why performance matters and the several
factors that influence performance, including a few instances of not-so-good
practices, in the final part of this series, we’ll talk about known and tested
strategies to tackle these problems.

In summary, how we build what we build matters because that’s a huge part of the
product no matter what it's later transformed to. That’s what we serve users,
and so priority should be given to what matters to the user, and not how quickly
we can achieve something that might not be the best experience for users.

## Further Reading and Resources…

- [CSS and Network Performance](https://csswizardry.com/2018/11/css-and-network-performance/)
  by Harry Roberts
- [The Cost of JavaScript in 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
  by Addy Osmani
- [How To think About Speed Tools](https://developers.google.com/web/fundamentals/performance/speed-tools/)
  on the Google Developers Blog
- [Progressive Performance](https://www.youtube.com/watch?v=4bZvq3nodf4) by Alex
  Russell
