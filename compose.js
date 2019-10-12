const compose = (...fns) => args => fns.reduceRight((x, f) => f(x), args);
