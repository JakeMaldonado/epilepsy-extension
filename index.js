/**
 *  @license
 * Epilepsy.js
 * License: MIT
 * Author: Joseph An
 * Version: 0.0.1 (2019/09/30)
 */

(function() {
  setInterval(function() {
    var red = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var color = 'rgb(' + [red, green, blue].join(',') + ')';

    var elems = document.querySelectorAll('*');
    for (var i = 0, len = elems.length; i < len; i++) {
      elems[i].style.backgroundColor = color;
    }

  }, 100);
})()
