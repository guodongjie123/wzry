$(function () {
	//导航
	$('#header').mouseenter(function () {
		$('#bot').css('display','block');
	});
	$('#header').mouseleave(function () {
		$('#bot').css('display','none');
	});
	//鼠标移入li
	$('#u li').mouseenter(function () {
		$('#u li').css({'background':'','borderBottom':''})
		$('#u li').find('a').css('color','')
		$(this).css({'background':'rgba(240,194,96,.3)','borderBottom':'3px solid #F5C259'})
		$(this).find('a').css('color','rgba(240,194,96,.7')
	})
	$('#u li').mouseleave(function () {
		$('#u li').css({'background':'','borderBottom':''})
		$('#u li').find('a').css('color','')
	})
	//登录页面
	$('#log').click(function () {
		$('#log1').show();
	})
	$('#dlog').click(function () {
		$('#log1').hide();
	})
	$(document).scroll(function () {
		var y = $(document).scrollTop() + 300 + 'px';
		$('#log1 .center').css('top',y);
	})
	//选项卡
	function tab (selector1,selector2) {
			$(selector1).mouseenter(function () {
				// 移出所有
				$(selector1).removeClass('active');
				$(selector2).hide();
				// 给自己添加
				$(this).addClass('active');
				$(selector2).eq($(this).index()).show();
			})
		}

	//定时器//轮播图
	var iNow=0;
	var b = $('#ul1 li').length;
	function time () {
		$('#ul1 li').hide();
		$('#ul2 li').removeClass('active');
        iNow++;
        if(iNow >= $('#ul1 li').length){
        	iNow=0;
        }
        $('#ul1 li').eq(iNow).show(); 
        $('#ul2 li').eq(iNow).addClass('active');
	}
	var tid = setInterval(time,1000);
	$('#ul2 li').mouseenter(function () {
		$('#ul2 li').removeClass('active');
		$('#ul1 li').hide();
		clearInterval(tid);
		$(this).addClass('active')
		$('#ul1 li').eq($(this).index()).show();
		iNow=$(this).index();
	})
	$('#ul2 li').mouseleave(function () {
		tid = setInterval(time,1000);
	});
	//鼠标移入新闻
	tab('#ul3 li','#ul4 li');
	//攻略中心
	tab('#ul7 li','#ul8 div');
	//英雄攻略
	$('#ul17').mouseenter(function () {
		$('#ul17').find('dl').css('display','block');
	})
	$('#ul17').mouseleave(function () {
		$('#ul17').find('dl').css('display','none');
	})
	tab('#ul18 li','#ul19 li')
	//赛事精品
	tab('#ul12 li','#ul13 dl');
	//赛事精品
	tab('#ul14 li','#ul15 dl');
	//英雄&皮肤
	tab('#ul5 li','#ul6 li');
	$('#ul6 dd').mouseenter(function () {
		$('#ul6 dd').find('span').css('display','none');
		$(this).find('span').css('display','block');
	})
	//赛事中心
	tab('#ul9 li','#ul10 dd');
	//合作媒体
	$('#mt').mouseenter(function () {
		$('#mt .bot').css('display','block');
	})
	$('#mt').mouseleave(function () {
		$('#mt .bot').css('display','none');
	})
	//滚动条
	$('#ul11 li').mouseenter(function () {
		$(this).css('background','#3778B2');
	})
	$('#ul11 li').mouseleave(function () {
		$(this).css('background','');
	})
	// var dis = 0;
	// // 滚动条的最大值
	// var maxBarTop = $('#bott').offsetHeight() - $('#bar').offsetHeight(); 
	// // ul的最大值
	// var maxUlTop = $('#bott').offsetHeight() - $('ul17').offsetHeight();
	// 	// 拖拽
	// 	$('#bar').on('mousedown',function (evt) {
	// 		//记录位置
	// 		evt = evt || window.event;
	// 		// var disY = evt.clientY - oDiv.offsetTop - oBar.offsetTop;
	// 		var disY = evt.clientY - getPos($('#bar')).top;

	// 		$(document).on('mousemove'),function (evt) {
	// 			evt = evt || window.event;

	// 			dis = evt.clientY - disY - $('#bott').offsetTop();
	// 			if (dis <= 0) {
	// 				dis = 0;
	// 			}
	// 			if (dis >= maxBarTop) {
	// 				dis = maxBarTop;
	// 			}
	// 			// 比例
	// 			var scale = dis / maxBarTop;
	// 			// 算ul的top
	// 			var ulTop = scale * maxUlTop;
	// 			$('#bar').style.top = dis + 'px';
	// 			$('#ul17').style.top = ulTop + 'px';

	// 		}
	// 		$(document).on('mouseup') = function () {
	// 			$(document).on('mousemove') = null;
	// 		}
	// 		return false;
	// 	 .

	// 	// 鼠标滚动事件
	// 	addMouseWheel($('#bott'),function (evt) {
	// 		evt = evt || window.event;
	// 		if (isUp(evt)) {
	// 			dis -= 10;
	// 			if (dis <= 0) {
	// 				dis = 0;
	// 			}
	// 		} else {
	// 			dis += 10;
	// 			if (dis >= maxBarTop) {
	// 				dis = maxBarTop;
	// 			}
	// 		}
	// 		// 比例
	// 		var scale = dis / maxBarTop;
	// 		// 算ul的top
	// 		var ulTop = scale * maxUlTop;
	// 		$('#bar').style.top = dis + 'px';
	// 		$('#ul17').style.top = ulTop + 'px';
	// 		return false;
	// 	});
 // 	});
	
	  













});