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



// all together now; configure and startup
bespoke.from( '#presentation', [
  classes(),
  // cube(),
  keys(),
  touch(),
  bullets( 'li, .bullet' ),
  // scale(),     // note: do NOT include scale (auto-zoom) for now - use strg+plus or strg+minus etc.
  progress(),
  backdrop()
]);
