function setTransitionDuration(element: any, times: number): void {
  element.style.webkitTransitionDuration = times + 'ms';
  element.style.mozTransitionDuration = times + 'ms';
  element.style.oTransitionDuration = times + 'ms';
  element.style.transitionDuration = times + 'ms';
}

export {
  setTransitionDuration
}
