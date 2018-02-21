
 var todo = {
 	//저장
 	save: function(){
 		if(event.which == 13) {
 			var val = $('.input').val();
 			$.post("http://139.59.230.182:3002/tasks",{name:val}, function(data){
 				//콜백함수, 프라미스 함수
 				console.log(data);
 				$('.ul').append('<li class="li"><span class="span" data-id="'+data._id+'"><i class="fa fa-trash-o"></i></span>'+data.name+'</li>');
		 		//데이터값, response코드도 내려오는데 계속 undefined라고 뜸, 스테터스 코드 304
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
	 	var objSpan = $(this);
	 	$.ajax({
	 			url: 'http://139.59.230.182:3002/tasks/'+objSpan.data('id'),
	 			type: 'DELETE',		

	 		}).done(function(data) {
	 			//변수에 불러올 속성값(data-id) 가져온다.
	 				objSpan.closest('li').remove();
	 			//찾은 값을 지운다.	
	 		})
	 		// var remove = $(this).closest('.li');
	 		// remove.remove();
 		},	

 	//업데이트	
 	update: function(){
 		var li = $(this);
 		$.ajax({
 			url: 'http://139.59.230.182:3002/tasks/'+li.data('id'),
 			type: 'PUT',

 			}).done(function(data) {
				console.log("success");
				li.toggleClass('completed');
 			})
 		},	

 	//이벤트
 	setEvent: function(){
 		//enter 후 save로 감
 		var input = $('.input');
 		input.keypress(this.save);
 		//span 클릭 후 del로 감 
 		$('.ul').on('click', '.span', todo.del);
 		//span 클릭 후 update로 감
 		$('.ul').on('click', '.li', todo.update);
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
 				$('.ul').append('<li class="li"><span class="span" data-id="'+value._id+'"><i class="fa fa-trash-o"></i></span>'+value.name+'</li>');
 			})

 		})
 	}
 }





