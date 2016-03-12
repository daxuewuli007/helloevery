	var currIndex = 0;
	var htitle = "";
	var $book = $("#flipbook");

	$(function() {
		OnPageLoadComplete();
		SetPageProperty();
		LoadImage();
	});

	function LoadImage()
	{
		var arya=["bg-five-left2.png","bg-five-left3.png","bg-four-left2.png","bg-freedom-left.png"];				
		for(var i in arya)
		{			
				var img=document.createElement("img");
				
				img.onload=function(){
					console.log(this);
				};
			  img.src=path+arya[i];
		}	
		// $("body img").lazyload({ 
		// 	effect : "fadeIn" 
		// 	}); 
		// $("body img").load();
	}

	function OnPageLoadComplete() {
		var index = 0;
		// $('#month_right img').each(function(idx, dom) {
		// 	$(dom).on('click', onMonthTabsClick);
		// });
		$("#flipbook").on("click", ".month", onMonthTabsClick);

		$(".book-title").on('click', onBookTitleClick);

		$("body").on("click", ".activity-size", onActivitySizeClick);

		$("#flipbook").on("click", ".activity-size", onActivitySizeClick);

		$("#close").click(onCloseClick);

		$(".arrow-right").click(onArrowRightClick);
		$(".arrow-left").click(onArrowLightClick);
		$(window).resize(onWindowResize);

		$(".back").click(onBackClick);

		 $(".book-foot a").on("click", onBookFootClick);

		 $(".book-foot4 a").on("click", onBookFoot4Click);
		//$("body").on("click", ".book-foot", onBookFootClick);
		//$("body").on("click", ".book-foot4", onBookFoot4Click);
		 $("body").on("click",".book-foot5>a",onBookFoot5Click);
	}

	function SetPageProperty() {
		var w = $(document).width() - $(window).width();
		$(document).scrollLeft(w / 2);

		var left = ($(document).width() - 1000) / 2 - 20;
		var right = ($(document).width() - 1000) / 2 + 1000 - 90 + 20;
		var height = ($(document).height() / 2 - 150);

		var left_size = ($(document).width() - 1000) / 2 + 10;
		var height_size = ($(document).height() / 2);
		var left_back = ($(document).width() - 1000) / 2 + 1000 - 150;

		$(".back").css({
			"left": left_back
		});
		$(".arrow-left").css({
			"left": left,
			"top": height
		}).show();

		$(".arrow-right").css({
			"left": right,
			"top": height
		}).show();


		if (currIndex == 0) {
			$(".arrow-left").hide();
		} else {
			$(".arrow-left").show();
		}

		$(".activity-size").css({
			"left": left_size,
			"top": height_size
		});
	}

	function onBookFoot5Click(e) {
		$(e.target).parent().children().css("background-color","");
		$(e.target).parent().children().css("color","#d52929");		
		$(e.target).css("color","#f2f0e5");
		$(e.target).css("background-color", "#d52929");

		var index = $(e.target).text();
		var five_path = $(".left5").css("background-image");
		$(".left5").css("background-image", five_path.replace(/-left\d{1}/i, "-left" + index));
		var five_url=$(".right-img5").attr("src");
		$(".right-img5").attr("src", five_url.replace(/-detail\d{1}/i, "-detail" + index));

		for (var i = 1; i < 4; i++) {
			if (parseInt(index) === i) {
				$(".five-shopping" + i).show();

			} else {
				$(".five-shopping" + i).hide();
			}
		}

	}

	function onBookFoot4Click(e) {

		$(e.target).parent().children().css("background-color","");
		$(e.target).parent().children().css("color","#d52929");		
		$(e.target).css("color","#f2f0e5");
		$(e.target).css("background-color", "#d52929");
		var index = $(e.target).text();
		var four_path = $(".left4").css("background-image");
		$(".left4").css("background-image", four_path.replace(/-left\d{1}/i, "-left" + index));
		var four_url=$(".right-img4").attr("src");
		$(".right-img4").attr("src", four_url.replace(/-detail\d{1}/i, "-detail" + index));
		for (var i = 1; i < 3; i++) {
			if (parseInt(index) === i) {
				$(".four-shopping" + i).show();

			} else {
				$(".four-shopping" + i).hide();

			}

		}
	}


	function onBookFootClick(e) {
		$(e.target).parent().children().css("background-color","");
		$(e.target).parent().children().css("color","#d52929");		
		$(e.target).css("color","#f2f0e5");
		$(e.target).css("background-color", "#d52929");
		
		var index = $(e.target).text();

		var three_path = $(".left2").css("background-image");
        
		$(".left2").css("background-image", three_path.replace(/-left\d{1}/i, "-left" + index));
		var three_url=$(".right-img2").attr("src");
		$(".right-img2").attr("src", three_url.replace(/-detail\d{1}/i, "-detail" + index));
	
		
		for (var i = 1; i < 4; i++) {
			if (parseInt(index) === i) {
				$(".shopping" + i).show();

			} else {
				$(".shopping" + i).hide();
			}

		}
	}


	function onBackClick() {
		left = "#l1";
		right = "#r1";

		$(".book-title img").removeClass('tophigh');
		$(".back").hide();

		bookGo(0);

		$('#month_right img').each(function(idx, dom) {
			$(dom).off().on('click', onMonthTabsClick);
		});
	}



	//显示活动规则
	// $(".activity-size").click(function() {
	// 	//$(".month").removeClass('book-month');
	// 	$('.size').show();
	// });
	// $(".activity-sizes").click(function() {	
	// 	$(".month").removeClass('book-month');
	// 	$('.size').show();
	// });
	//为什么事件代理和直接绑定事件在响应上会有差别，难道真的是事件代理绑定未来事件吗？！！！



	// var $bookTags = $(".book-tags");


	// 	$bookTags.on("click", ".b-tag", function() {
	// 		var index = $(this).index() + 1;
	// 		$(this).addClass("curr").siblings().removeClass("curr");
	// 		bookGo(index);
	// 	});

	function bookGo(index, id) {
		// var x = {'i1':'right2','i2':'right4','i3':'right5','i4':'right6'};
		// $('#'+x[id]+" img").lazyload({ 
		// 	effect : "fadeIn" 
		// 	}); 
		// $('#'+x[id]+" img").load();
		//console.log('#'+x[id]+" img");
		$(".book-foot a").off().on("click", onBookFootClick);

		 $(".book-foot4 a").off().on("click", onBookFoot4Click);		
		 $(".book-foot5>a").off().on("click",onBookFoot5Click);	
		var offset = index - currIndex;
		var i;

		currIndex = index;

		if (offset > 0) {
			for (i = offset; i > 0; i--) {
				$book.turn("next");
			}
		} else if (offset < 0) {
			for (i = offset; i < 0; i++) {
				$book.turn("previous");
			}
		}
		//currIndex = page;
		if (currIndex == 0) {
			$(".arrow-left").hide();
			$(".arrow-right").show();
		} else if (currIndex == 4) {
			$(".arrow-left").show();
			$(".arrow-right").hide();
		} else {
			$(".arrow-left").show();
			$(".arrow-right").show();
		}
	}
	//点击切换

	function change(bigid, id) {
		$(bigid + " .go").hide();
		$(bigid + " " + id).show();
	};

	function onMonthTabsClick(e) {
		var index = 0;

		$(".back").show

		switch (e.target.id) {
			case "m1":
				index = 1;
				htitle = "#i1";
				break;
			case "m2":
				index = 2;
				htitle = "#i2";
				// alert(index);
				// alert(currIndex);
				break;
			case "m3":
				index = 3;
				htitle = "#i3";
				// alert(index);
				// alert(currIndex);
				break;
			case "m4":
				index = 4;
				htitle = "#i4";
				break;
		}

		$(".book-title img").removeClass('tophigh');
		$("" + htitle).addClass('tophigh');
		$('.back').show();
		bookGo(index);
	}

	function onBookTitleClick(e) {
		var index = 0;

		$(".back").show();
		switch (e.target.id) {
			case "i1":

				index = 1;

				break;
			case "i2":

				index = 2;

				// alert(index);
				// alert(currIndex);
				break;
			case "i3":

				index = 3;

				// alert(index);
				// alert(currIndex);
				break;
			case "i4":

				index = 4;

				// alert(index);
				// alert(currIndex);
				break;
		}
		//console.log(e.target.id);
		$(".book-title img").removeClass('tophigh');
		$(e.target).addClass('tophigh');
		$('.back').show();
		bookGo(index, e.target.id);
	}

	function onActivitySizeClick(e) {
		$('.size').show();
	}

	function onCloseClick() {
		$('.size').hide();
	}

	function onArrowRightClick() {
		$(".back").show();
		var index = currIndex + 1;
		switchTo(index);
		bookGo(index);
	}

	function onArrowLightClick() {
		$(".back").show();
		var index = currIndex - 1;
		switchTo(index);
		bookGo(index);
	}


	function onWindowResize(event) {
		var left_size = ($(document).width() - 1000) / 2 + 10;
		var height_size = ($(document).height() / 2);

		var left = ($(document).width() - 1000) / 2 - 20;
		var right = ($(document).width() - 1000) / 2 + 1000 - 90 + 20;
		var height = ($(document).height() / 2 - 150);

		$(".activity-size").css({
			"left": left_size,
			"top": height_size
		});

		$(".arrow-left").css({
			"left": left,
			"top": height
		}).show();

		$(".arrow-right").css({
			"left": right,
			"top": height
		}).show();
	}
	function switchTo(index){
		switch (index) {
			case 1:
				
				htitle = "#i1";
				break;
			case 2:
				
				htitle = "#i2";
				// alert(index);
				// alert(currIndex);
				break;
			case 3:
				
				htitle = "#i3";
				// alert(index);
				// alert(currIndex);
				break;
			case 4:
				
				htitle = "#i4";
				break;
		}
		$(".book-title img").removeClass('tophigh');
		$("" + htitle).addClass('tophigh');
	}