// ==UserScript==
// @name TRA
// @namespace    http://tampermonkey.net/
// @include http://railway.hinet.net/ctno1.htm*
// @require http://code.jquery.com/jquery-latest.js
// @grant GM_getValue
// @grant GM_setValue
// ==/UserScript==

// Reference: https://gist.github.com/g761007/5791452

var num = '1';
var personalId = '';
var fromStation = '';       //台北100 田中154 台南175 高雄185 新左營288
var toStation = '';
var trainNo = '';
/**/
var date1 = new Date();
var takeDate = '2018/04/04';
var date2 = new Date(takeDate);

/*
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
var getinDate = takeDate + (diffDays < 10 ? '-0' : '-') + diffDays;
*/
var getinDate = '2018/04/04-15';
console.log(getinDate);

var form = document.forms.ctno1;
form.person_id.value = personalId;
form.from_station.value = fromStation;
form.to_station.value = toStation;
form.train_no.value = trainNo;
form.getin_date.value = getinDate;
form.n_order_qty_str.value = num;
form.order_qty_str.value = num;

$(document).ready(function(){
    $(document.head).append(
		'<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>'
	);
	$(document.head).append(
		'<style type="text/css" rel="stylesheet">' +
		' .block {' +
		' width:40%;' +
		' height:100%;' +
		' float: left;' +
		' padding:20px;' +
		' }' +
		' input#randInput {'+
		' width:55%;' +
		' height:40px;' +
		' font:24px arial,sans-serif;' +
		' }' +
		' #tip {' +
		' font:28px arial,sans-serif;' +
		' }' +
		' #step2 {' +
		' height:70px;' +
		' }' +
		' .float {' +
		' float: left;' +
		' }' +
		' #btn_refresh {' +
		' margin-left: 5px;' +
		' width:60px;' +
		' height:60px;' +
		' font:12px arial,sans-serif;' +
		' }' +
		'</style>'
	);
	var count = 0;
	function refresh() {
		console.log('refresh');
		$('input#randInput').attr('disabled', 'disabled');
		var date=new Date();
		$('#image_out').attr('src', 'ImageOut.jsp?'+'date='+date.getTime());
		$('input#randInput').val('');
		$('input#randInput').removeAttr('disabled');
        $('input#randInput').focus(); //add
	}

	function get_ticket() {
		$('input#randInput').attr('disabled', 'disabled');
		var ctno1 = $('form[name="ctno1"]')[0];
		if (ctno1 !== undefined) {
			var data = {
				'person_id':$('input[name="person_id"]').val(),
				'from_station':$('select[name="from_station"]').val(),
				'to_station':$('select[name="to_station"]').val(),
				'getin_date':$('select[name="getin_date"]').val(),
				'train_no':$('input[name="train_no"]').val(),
				'order_qty_str':$('select[name="n_order_qty_str"]').val(),
				'randInput':$('input#randInput').val(),
				'returnTicket':'0'
			};
			console.log(data);
			$.get('http://railway.hinet.net/order_no1.jsp', //change again and again...
				data,
				function(data) {
					console.log('success');
					var html = data.split(/<body>([^]*)<\/body>/g);
					$('#result').html(html);
				}).done(function(){
					console.log('done...');
					count++;
					$('#count').text(count);
				}).fail(function(){
					console.log('fail...');
				}).always(function(){
					refresh();
			});
			return;
		}
		refresh();
		alert('fail');
	}

	var form = $('form')[0];
	$('body').html(
		'<div class="content">' +
		' <div id="div1" class="block"> </div>' +
		' <div id="div2" class="block"> ' +
		' <div id="tip"><span>Count:</span> <span id="count">0</span></div>' +
		' <div id="step2">' +
		' <div class="float"><img id="image_out" src="ImageOut.jsp"></img></div>' +
		' <div class="float"><button id="btn_refresh"> Refresh </button></div>' +
		' </div>' +
		' <div><input id="randInput" type="text" maxlength="6" size="12" name="randInput" placeholder="enter to go" /></div>' +
		' <h2 > Result: </h2>' +
		' <div id="result" class=""> </div>' +
		' </div>' +
		'</div>'
	);
	$('div#div1').append(form);
    //document.getElementById("randInput").focus();
	$('button#btn_refresh').click(function(){
	refresh();
	});
	$('input#randInput').keydown(function(event) {
		if (event.keyCode == 13) {
			get_ticket();
		}
	});
	$('button')[0].hidden = true;
	refresh();

});
