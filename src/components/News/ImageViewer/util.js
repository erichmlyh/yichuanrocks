export const isFirefox = function() {
  return !!window.navigator.userAgent.match(/firefox/i);
};

export function rafThrottle(fn) {
  let locked = false;
  return function() {
    const args = Array.prototype.slice.call(arguments);
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}
