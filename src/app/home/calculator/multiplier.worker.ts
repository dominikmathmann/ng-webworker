/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  for (let i = 0; i < data.times; i++) {
    data.result = data.result * data.multiplier;
  }
  postMessage(data.result);
});
