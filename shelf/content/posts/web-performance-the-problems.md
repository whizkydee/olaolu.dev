---
title: 'Web Performance: The Problems'
date: 2019-08-28
published: true
tags: ['web performance', 'user experience']
canonical_url: false
description:
  'In this article, we identify the factors that influence web performance
  negatively, look into them and discuss objectively.'
---

We’ve learnt already in the first part of this web performance series why
performance is important and should be budgeted for at every stage of product
development, what benefits it holds for businesses and products, and the
negatives of poor performance. Now, let’s talk about the problems of web
performance; what makes sites slow.

## What makes sites slow?

No doubt, there’s a ton of reasons why websites are slow, some of which are
distinct to each site. I like to look at these factors from two perspectives:

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
plugin-ins, framework/library resources, we use them.

However, so many times, the authors of these third-party resources just tell us
to plug in their resources to our sites: resources that might depend on other
resources all the way down or might be poorly developed, and then they serve us.
The fact, however, remains that most of these assets are the leading cause of
performance problems on the web because of course, we didn’t build them, we
don’t know how they were built, we do not own them, all we want is their
services and we can’t determine the quality of these services, we can only
assess them and act based on the information.

It’s sad news that third-party resources today have control on a lot of sites
today, and then as developers, most of the time we’re just lazy to take it back.
I’ve personally seen several situations where sites include a whole mighty
resource, and then end up using a very minimal portion of it, say 5% or
something.

It’s usually not a great idea to do that, there’s a lot of stuff we can do on
our own without relying on these resources. We don’t have to include a 60kb UI
library when we’re using just one of its component that’s only 3kb.

### 2. Heavy assets and resources

We all have that one big file on our sites &ndash; the one big JavaScript asset
or the pretty 1MB image from Unsplash. Really, it’s difficult to manage these
file sizes when everyone is in a rush, bent on results, and then we all just
forget performance, something that our users are very well aware of. Users know
when your site is slow, they also know most times what sites consume a lot of
their mobile data. Generally, JavaScript occupies the top position on the list
of front end resources that impact performance negatively, followed by images.

As developers, we write code that looks good to us, we do things that make us
feel satisfied, but we just forget that priority in this context should be given
to the user — what the user needs, what a great experience is like to them. The
user doesn’t know how fancy your code is, they don’t really care how fancy your
images are. They just want to be able to use your site and have great
experiences. If your site is not accessible quickly, you don’t even get the
chance to show your “fancy image”. We’ll talk on how to resolve these problems
in the next article on optimizing performance.

### 3. Excessive HTTP Requests

Get! Post! Front end developers, we love to do that a lot: consuming APIs and
all — it’s fun actually, being able to communicate with a web server, that’s
power to an extent, right? Yeah, it’s amazing!

But at the same time, it’s not — _winks_. Sending requests back and forth can be
too much to handle. Imagine a superior at your office; you’re going to get a
snack one day and then, he calls “hey, on your way, get me some venti iced
skinny hazelnut macchiato, sugar-free syrup, extra shot, light ice, no whip
coffee from Starbucks”. Extremely weird and confusing, right?

Similar can happen with your server when making requests. If you observe from
that order, the most important thing to you is actually getting the snack for
your satisfaction, just the way your users want to _use_ your product — they
want to satisfy themselves. Too bad your superior took that power away from you
LOL. You know how tough it can be to say no to that &ndash; same way the server
can’t say no to your multiple requests. It just must handle it no matter how
complicated it is.

Your user might not need all the junks and stuff you’re fetching for them on the
initial load, they need what matters, and you’re in place to answer those
questions. Decide the things you’d want to have on your screen quickly if you
were the user.

### 4. Poor Code Quality

Yes, bad code. Everyone likes to jump on a computer and start writing code
endlessly, however, this excitement should leave us with the questions: “Am I
doing it the right way?”, “Can this be done better?”, “What are the implications
of doing it this way?”.

A lot from the code quality can affect the performance of your site or product
as an entity. Whether you’re building a functionality that should take 10 lines
of code in 50 lines, or you there’s so much dead code, or you’re just writing
the code or using a tool in a way that it’s much slower to function; they all
impact performance. For example, having excessive unused code bumps up file
sizes which could delay HTTP requests and in turn, affect performance.

In fact, all the points listed previously in one way or the other fall under the
quality of code you’re delivering and how experienced or competent a developer
is. Your JavaScript, CSS, HTML and other applications on the back end contribute
to performance directly or indirectly.

There are some industry standards and practices that should be followed while
building your sites. Don’t write code that “just works™”. You should consider if
you’re actually solving that problem in the most efficient way.

## 5. Shitty servers

## Conclusion

Now that you have a clearer view on why performance matters and the several
factors that influence performance, including a few instances of not-so-good
practices. In the next article, we’ll finally talk about the strategies and
patterns to tackle these problems.

In summary, how we build what we build matters because that’s always a huge part
of the product no matter what it is. That’s what we serve users, and we should
care more about what matters to the user, and not how quickly we can achieve
something that might not be the best experience for users.

## Further Reading and Resources…

- [CSS and Network Performance](https://csswizardry.com/2018/11/css-and-network-performance/)
  by Harry Roberts
- [The Cost of JavaScript in 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
  by Addy Osmani
- [How To think About Speed Tools](https://developers.google.com/web/fundamentals/performance/speed-tools/)
  on the Google Developers Blog
- [Progressive Performance](https://www.youtube.com/watch?v=4bZvq3nodf4) by Alex
  Russell
