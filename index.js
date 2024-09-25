function receivesAFunction(callback) {
  return callback();
}

const returnsANamedFunction = function () {
  return function callback() {};
};

const returnsAnAnonymousFunction = () => function () {};
