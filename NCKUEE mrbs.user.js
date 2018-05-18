// ==UserScript==
// @name         NCKUEE mrbs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.ee.ncku.edu.tw/mrbs/edit_entry.php?*
// @grant        none
// ==/UserScript==

document.querySelector("#name").value = 'Student xxx';
document.querySelector("#phone").value = '62400-xxxx';
document.querySelector("#unit").value = 'EE 電機系館x樓';
document.querySelector("#duration").value = '2';

document.querySelector("input[name=save_button]").click();