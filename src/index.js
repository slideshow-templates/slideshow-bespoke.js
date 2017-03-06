import bespoke  from 'bespoke';

// included/bundles themes
//  note: no longer include/bundle themes - get include "unbundled"
// import cube     from 'bespoke-theme-cube';

// included/bundled plugins
import keys     from 'bespoke-keys';
import touch    from 'bespoke-touch';
import bullets  from 'bespoke-bullets';
import scale    from 'bespoke-scale';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';





// all together now; configure and startup
bespoke.from( '#presentation', [
  // cube(),
  keys(),
  touch(),
  bullets( 'li, .bullet' ),
  scale(),
  progress(),
  backdrop()
]);
