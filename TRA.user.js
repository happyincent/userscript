// ==UserScript==
// @name         TRA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip121/query
// @grant        none
// ==/UserScript==

// 身分證
document.querySelector("#pid").value = "A000000000";

// 去回
document.querySelector("#startStation").value = "4220-臺南";
document.querySelector("#endStation").value = "3420-田中";

// 去
document.querySelector("#rideDate1").value = "2019/05/25";
document.querySelector("#trainNoList1").value = "114";
document.querySelector("#trainNoList2").value = "108";
document.querySelector("#trainNoList3").value = "118";

/* 回 */
document.querySelector("#tripType1").click();
document.querySelector("#rideDate2").value = "2019/05/26";
document.querySelector("#trainNoList4").value = "141";
document.querySelector("#trainNoList5").value = "6135";
document.querySelector("#trainNoList6").value = "521"; //*/
