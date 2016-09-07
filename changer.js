/*
 * File: changer.js
 * Author: Zachary Liou
 * Date created: 2016 July 28
 */

(function() {
    "use strict";

    /*
     * Destination of all links on the page
     */
    var DESTINATION = "about:blank";

    /*
     * Change all keywords into links
     */
    var KEYWORD = "alice bob";
    var KEYWORD_DESTINATION = "https://www.yahoo.com";


    /////////////////////////////////////////////////////////////////


    // Replace all existing links
    var elems = document.querySelectorAll("a");
    for (var i = 0; i < elems.length; ++i) {
        elems[i].setAttribute("href", DESTINATION);
    }

    // Replace all keyword occurrences with keyword link
    var body = document.body;
    var re = new RegExp(KEYWORD, "g");
    body.innerHTML = body.innerHTML.replace(re, 
        "<a href='" + KEYWORD_DESTINATION + "'>" + KEYWORD + "</a>");

})();
