// ==UserScript==
// @name         NCKUEE IEET
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ieet.ee.ncku.edu.tw/ieet/student/questionnaire/*
// @grant        none
// ==/UserScript==

document.querySelectorAll("input[type=radio]").forEach( x=> { if(x.value==="5") { x.setAttribute('checked', 'checked'); } } );
