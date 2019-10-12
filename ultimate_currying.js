function curry(f) {
  // f as argument since function are first class value in JS so can be passed to other function
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= f.length // f.length => no of arguments f accepts.
      ? f.apply(null, args)
      : currify.bind(null, ...args);
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

const curry_other = (f, arity = f.length, ...args) =>
  arity <= args.length
    ? f(...args)
    : (...argz) => curry_other(f, arity, ...args, ...argz);

//
