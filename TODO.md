# TODOs

check why preview.png is not available (via GitHub Pages)????




```
$ sass bespoke.cube.scss
```

add wrapper for cube theme in function - why? why not??


check how to convert from stylus to scss

e.g. single property folded??

```
.bespoke-slide {
  pointer-events: auto;
  transition: {
    transform $slide_transition_length $slide_transition_easing,
    opacity $slide_transition_length $slide_transition_easing,
    background $slide_transition_length $slide_transition_easing;
  }
```

check what the syntax for li&

```
li& {
  transform: translateX($bullet_transition_translate_x);
  @media print {
    transform: none;
  }
```
