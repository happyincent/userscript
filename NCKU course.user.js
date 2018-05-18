// ==UserScript==
// @name         NCKU course
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://course-query.acad.ncku.edu.tw/qry/
// @match        http://course-query.acad.ncku.edu.tw/qry/index.php
// ==/UserScript==

var syear = prompt("年分:", "106");
var sem = prompt("學期:", "2");
var dept_no = prompt("系所 電通(Q3) 資訊(P7) :", "Q3");

var qryURL = "http://course-query.acad.ncku.edu.tw/qry/qry002.php?&college_no=V&syear=0" + syear + "&sem=" + sem + "&dept_no=" + dept_no;

window.location.href = qryURL;