'use strict';
let s = 22;

let obj = {
  name: 'Object',
  ev() {
    return 'ops ev?';
  },

  evs: function () {
    return 'eve2';
  },
};

function Do() {
  this.mname = 'kdkdd';
}
let sww = new Do();
console.log(sww.mname);
let l2 = obj.ev;
const num = Math.random(2);

let ar = s;
ar = '123';
s;
