
 var todo = {
 	//저장
 	save: function(){
 		if(event.which == 13) {
 			var val = $('.input').val();
 			$.post("http://139.59.230.182:3002/tasks", function(data){
 				var data = $('.ul').append('<li class="li"><span class="span" data-id=""><i class="fa fa-trash-o"></i></span>'+value.name+'</li>');
 					alert(data);
		 		//데이터값, response코드도 내려오는데 계속 undefined라고 뜸, 에러코드 304
 				})
 					.done(function(){
 						alert("saved");
 					})
 					.fail(function(){
 						alert("error");
 					})
 			}
 		},

 	//삭제
 	del: function delete_item(){
	 	//ajax으로 데이터 불러온다.
	 	$.ajax({
	 			url: 'http://139.59.230.182:3002/tasks/{id}',
	 			type: 'DELETE',		

	 		}).done(function(data) {
	 			//변수에 불러올 속성값(data-id) 가져온다.
	 			var id = $('.span').attr('data-id');
	 				alert(id);
	 				id.remove();
	 			//찾은 값을 지운다.	
	 		})
	 		// var remove = $(this).closest('.li');
	 		// remove.remove();
 		},	

 	//이벤트
 	setEvent: function(){
 		//enter 후 save로 감
 		var input = $('.input');
 		input.keypress(this.save);
 		//span 클릭 후 del로 감 
 		$('.ul').on('click', '.span', todo.del);

 	},

 	//실행
 	init: function(){
 		todo.setEvent(); 
 		//data 불러오기
 		$.get("http://139.59.230.182:3002/tasks", function(data){
 			//each로 값꺼내기
 			$.each(data, function(index, value){
 				console.log(value);
 				// append로 뒤에 붙이기 
 				$('.ul').append('<li class="li"><span class="span" data-id=""><i class="fa fa-trash-o"></i></span>'+value.name+'</li>');
 			})

 		})
 	}
 }





