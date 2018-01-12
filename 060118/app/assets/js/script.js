$(function(){
	var navs = document.querySelectorAll('.menuUl li');

		navs.forEach.call(navs, function(btn){
		btn.addEventListener("click", onClick, false);
	});

		function onClick(e) {
			window.alert(this.innerHTML);
		}	
})

$(function(){
	var btn = document.querySelector('#btn1');
		btn.addEventListener("click", addClick, false);
		
		function addClick(e){
			e.preventDefault();
			$("#tBody").clone().insertAfter("#tBody");

		}
})		

//<return false 사용법>
// $("#btn1").click(function(){

	// 	$("#tBody").clone().insertAfter("#tBody");
	// 	return false;
	// });
// });


