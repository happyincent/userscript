// ==UserScript==
// @name         THSR1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  2016/08/13
// @author       You
// @match        https://irs.thsrc.com.tw/IMINT/?student=university
// @grant        none
// ==/UserScript==

/* 台北2 彰化8 台南11 高雄12 */
document.querySelector("select.text1:nth-child(1)").value = 11;
document.querySelector("select.text1:nth-child(2)").value = 2;

document.querySelector("#seatRadio1").click();
document.querySelector("#bookingMethod_1").click();

document.querySelector("#toTimeInputField").value = "2018/04/08";
document.querySelector("#toTrainID > input:nth-child(1)").value = 1257;

/* 來回票 *
// document.querySelector("#backDate").style.display = '';
// document.querySelector("#backTrainID").style.display = '';
document.querySelector("#returnCheckBox").checked = true;
document.querySelector("#backTimeInputField").value = "2017/09/13";
document.querySelector("#backTrainID > input:nth-child(1)").value = 696; //*/

document.querySelector("span.PR10:nth-child(3) > input:nth-child(1)").focus();
