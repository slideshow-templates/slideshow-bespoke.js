# bespoke.js - Slide Show (S9) Template Pack

## Live Preview

![](preview.png)

See [`slides.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/slides.html).

For testing see
[`test.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.html),
[`test.minimal.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.minimal.html),
[`test.nebula.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.nebula.html),
[`test.voltaire.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.voltaire.html),
[`test.minima1.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.minima1.html),
[`test.minima2.html`](http://slideshow-templates.github.io/slideshow-bespoke.js/test.minima2.html).



## What's Slide Show (S9)?

A Ruby gem that lets you create slide shows and author slides in plain text
using a wiki-style markup language that's easy-to-write and easy-to-read.
More [Slide Show (S9) Project Site »](http://slideshow-s9.github.io)

## Intro

The [bespoke.js](https://github.com/bespokejs/bespoke) package
by Mark Dalgleish et al bundled up into
a Slide Show (S9) template pack.

Note, the bespoke.js template pack is configured to use
the following headers in `slides.html`:

    author: Your Name Here
    title: Your Slide Show Title Here


## Try It Yourself - How To Use the bespoke.js Template Pack

If you want to try it yourself, install (fetch) the new template pack. Issue the command:

    $ slideshow install bespoke.js

Or as an alternative clone the template pack using `git`. Issue the commands:

    $ cd ~/.slideshow/templates
    $ git clone https://github.com/slideshow-templates/slideshow-bespoke.js.git

To check if the new template got installed, use the `list` command:

    $ slideshow list

Listing something like:

    Installed templates include:
       bespoke.js (~/.slideshow/templates/bespoke.js/bespoke.js.txt)


Now you're ready to use it using the `-t/--template` switch. Example:

    $ slideshow build sample.md -t bespoke.js

That's it.


## Questions? Comments?

Questions? Comments?
Send them along to the [wwwmake forum/mailing list](http://groups.google.com/group/wwwmake).
Thanks!
