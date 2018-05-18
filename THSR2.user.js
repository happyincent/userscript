// ==UserScript==
// @name         THSR2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  2016/08/13
// @author       You
// @match        https://irs.thsrc.com.tw/IMINT/?wicket:interface=*
// @grant        none
// ==/UserScript==

//document.querySelector("#idInputRadio1").click();
document.querySelector("#idNumber").value = "";

document.querySelector("#mobileInputRadio").click();
document.querySelector("#mobilePhone").value = "";

document.querySelector("#name2622").value = "";

document.querySelector("input[name='agree']").checked = true;
document.querySelector("#isSubmit").click();
