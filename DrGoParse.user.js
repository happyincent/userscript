// ==UserScript==
// @name         DrGoParse
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://drgo.kh.edu.tw/drgo/resume/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_setClipboard
// ==/UserScript==

waitForKeyElements("#topicDetailTable tr td", show);

function show() {
    var links = document.querySelectorAll('[href*="javascript:showDetail"]');

    function get_hrefs(links){
        links = Array.prototype.slice.call(links);

        return links.map(function(elem){ return elem.getAttribute("href"); });
    }

    var href_links = String( get_hrefs(links) )
    .replace(/javascript\:showDetail\(\'/g , "\'http://drgo.kh.edu.tw/drgo/course/courseAction!preCourse.so?contentId=")
    .replace(/\' \, \'allList\' \, \'1\'\)/g, "&jumptype=allList&addstate=1\'")
    .replace(/,/g, ",\n\t\t");

    //prompt('All links:', href_links);
    console.log(href_links);
    GM_setClipboard(href_links);
}