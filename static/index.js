(function() {
	var START_GAME = 'start_game';
	var CLICK_TILE = 'click_tile';
	var USE_MULTIPLIER = 'use_multiplier';
	var USE_FIND_PIECES = 'use_find_pieces';
	var USE_ADD_TIME = 'use_add_time';
	var END_GAME = 'end_game';
	var MY_REFERRER = 'my_referrer';

	_kmq.push(['record', MY_REFERRER, {'my_referrer': document.referrer}]);
	
	var start = document.querySelector('.start');
	var tile = document.querySelector('.tile');
	var multiplier = document.querySelector('.multiplier');
	var findPieces = document.querySelector('.find-pieces');
	var addTime = document.querySelector('.add-time');
	var end = document.querySelector('.end');

	start.addEventListener('click', ()=> {
		console.log("start!");
		_kmq.push(['record', START_GAME]);
	});
	tile.addEventListener('click', ()=> {
		console.log("tile!");
		_kmq.push(['record', CLICK_TILE]);
	});
	multiplier.addEventListener('click', ()=> {
		console.log("multiplier!");
		_kmq.push(['record', USE_MULTIPLIER]);
	});
	findPieces.addEventListener('click', ()=> {
		console.log("findPieces!");
		_kmq.push(['record', USE_FIND_PIECES]);
	});
	findPieces.addEventListener('click', ()=> {
		console.log("add time!");
		_kmq.push(['record', USE_FIND_PIECES]);
	});
	end.addEventListener('click', ()=> {
		console.log("end!");
		_kmq.push(['record', END_GAME]);
	});
})();
