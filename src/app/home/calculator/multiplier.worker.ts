/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  postMessage(data.result * data.multiplier);
});
