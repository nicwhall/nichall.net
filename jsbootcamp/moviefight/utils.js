//debounce utility
const debounce = (func, delay = 1000) => {
  let timeoutID;

  //clear existing timer on input to stop call to function passed in
  return (...args) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    //create new timer for call to function passed in - after delay passed in
    timeoutID = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
