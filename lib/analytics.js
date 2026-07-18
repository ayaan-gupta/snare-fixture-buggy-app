// Minimal in-house analytics module used across this app's routes to record
// product events. This is the established convention for instrumentation in
// this repo — any new route should call track() the same way /sum does.
const events = [];

function track(event, props) {
  events.push({ event, props: props || {}, at: Date.now() });
  return events[events.length - 1];
}

module.exports = { track, events };
