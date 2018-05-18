// ==UserScript==
// @name         PTT Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.ptt.cc/bbs/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('* { font-family: "Noto Sans Mono CJK TC", monospace !important; }' +
            'span { font-family: consolas, "Noto Sans Mono CJK TC" !important; }'
);