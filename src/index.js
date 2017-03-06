import bespoke  from 'bespoke';

// included/bundles themes
//  note: no longer include/bundle themes - get include "unbundled"
//  note:  now MUST include bespoke-classes "by hand" - was automatic included w/ theme

// import cube     from 'bespoke-theme-cube';


// included/bundled plugins
import classes  from 'bespoke-classes';
import keys     from 'bespoke-keys';
import touch    from 'bespoke-touch';
import bullets  from 'bespoke-bullets';
import scale    from 'bespoke-scale';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';


/////
// hack: add the div wrapper from the cube theme (no longer included/bundled)
//  thus, include here/inline
//   see https://github.com/bespokejs/bespoke-theme-cube/blob/master/lib/bespoke-theme-cube.js

function cube_wrapper() {
  return function(deck) {
    var wrap = function(element) {
      var wrapper = document.createElement('div');
      wrapper.className = 'bespoke-theme-cube-slide-parent';
      element.parentNode.insertBefore(wrapper, element);
      wrapper.appendChild(element);
    };

    deck.slides.forEach(wrap);
  };
}


// all together now; configure and startup
bespoke.from( '#presentation', [
  classes(),
  // cube(),
  cube_wrapper(),      // note: for now include for all themes (just adds a div wrapper - no harm for others??)
  keys(),
  touch(),
  bullets( 'li, .bullet' ),
  scale(),
  progress(),
  backdrop()
]);
