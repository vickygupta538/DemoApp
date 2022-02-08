import { TrackJS } from 'trackjs';
TrackJS.install({
  token: 'ddcd513338194dd99d38b5fd8fe079c2',
});

window.addEventListener('error', (err) => {
  window.TrackJS && TrackJS.track(err);
});
