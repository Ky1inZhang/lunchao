$(function () {
	var timer;
	var index = 0;
	// 大图
	var big = $(".big");
	// 大图按钮
	var btn = $(".btn");
	// 小图片上
	var topImg = $("#topImg img");
	// 下
	var downImg = $("#downImg img");

	roll();
	timer = setInterval(roll, 3000);

	function roll() {
		for (var i = 0; i < 6; i++) {
			if (i == index) {
				big.hide();
				$(big[i]).show();
				btn.css("background", "#555");
				$(btn[i]).css("background", "#f2f2f2");
			}
		}


		for (var k = 0; k < topImg.length; k++) {
			var rollTop = $(topImg[k]).attr("roll");
			if (rollTop == index) {
				topImg.hide();
				$(topImg[k]).show();
				downImg.hide();
				$(downImg[k]).show();
			} else {
				$(topImg[k]).hide();
				$(downImg[k]).hide();
			}
		}

		color();

		index = index == 5 ? 0 : Number(index) + 1;
	}

	btn.mouseover(function () {
		var slide = $(this).attr("slide");
		index = slide;
		big.hide();
		$(big[index]).show();
		btn.css("background", "#555");
		$(btn[index]).css("background", "#f2f2f2");

		topImg.hide();
		$("#topImg img[roll=" + index + "]").show();

		downImg.hide();
		$("#downImg img[roll=" + index + "]").show();

		color();
	})

	$("#btn").click(function () {
		var txt = $("#txt").val();
		window.location = "https://list.tmall.com/search_product.htm?q=" + txt;
	});


	function color() {
		if (index == 0) {
			$("#imgs").css("background", "rgb(106,106,106)");
		} else if (index == 1) {
			$("#imgs").css("background", "rgb(232,232,232)");
		} else if (index == 2) {
			$("#imgs").css("background", "rgb(215,2,6)");
		} else if (index == 3) {
			$("#imgs").css("background", "rgb(232,232,232)");
		} else if (index == 4) {
			$("#imgs").css("background", "rgb(8,100,227)");
		} else if (index == 5) {
			$("#imgs").css("background", "rgb(2,44,118)");
		}

	}

});
