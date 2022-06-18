const _ = {};

_.reduce = function (list, callback, initial) {
  var prev = initial;
  for (var i = 0; i < list.length; i++) {
    if (i === 0 && prev === undefined) {
      prev = list[0];
    } else {
      prev = callback(list[i], prev);
    }
  }
  return prev;
};

_.reduce([1, 2, 3], (v, sum) => v + sum, 0);
