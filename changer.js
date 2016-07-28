/*
 * File: changer.js
 * Author: Zachary Liou
 * Date created: 2016 July 28
 */

(function() {
    "use strict";

    var DESTINATION = "https://www.google.com";

    var elems = document.querySelectorAll("a");
    for (var i = 0; i < elems.length; ++i) {
        elems[i].setAttribute("href", DESTINATION);
    }

})();
