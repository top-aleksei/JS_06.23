Array.prototype.customFilter = function (fn, context) {
  console.log(this);
};
[2, 3].customFilter();
