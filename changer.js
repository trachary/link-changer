/*
 * File: changer.js
 * Author: Zachary Liou
 * Date created: 2016 July 28
 */

(function() {
    "use strict";

    var DESTINATION = "about:blank";

    var KEYWORD = "Kate";
    var KEYWORD_DESTINATION = "https://www.yahoo.com";

    // Replace all existing links
    var elems = document.querySelectorAll("a");
    for (var i = 0; i < elems.length; ++i) {
        elems[i].setAttribute("href", DESTINATION);
    }

    // Replace all keyword occurrences with keyword link

    //console.log(document.getElementsByTagName("body")[0].textContent);

})();
