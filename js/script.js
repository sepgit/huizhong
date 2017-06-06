var	main={
	liNodes:$(".js_title .js_lists li"),///触发下拉菜单的li节点
	dlNode:$(".js_nav_table"),
	fourliNodes:$(".flash_use li"),///四个球
	teamDivNode:$(".about_team"),///蓝色块
	aboutLeftNode:$(".leftArrow"),///文字左箭头
	aboutRightNode:$(".rightArrow"),///文字右箭头
	emNode:$(".about_value em"),///文字
	picNode:$(".main li"),///图片li
	flashSpanNode:$(".flashDots span"),///图片移动span
	flashLeft:$(".leftbtn"),///大图左箭头
	flashRight:$(".rightbtn"),///大图右箭头
	mainUlNode:$(".main ul"),///三张大图UL	
	
	bottomLeft:$(".leftArr"),
	bottomRigh:$(".rightArr"),
	navMove:function(){
		var that=this;
		$(".js_lists li").mouseenter(function(){
			var curPos=$(this).index();			
			var	oldPos=$(".js_lists .current").index();	
			that.liNodes.eq(curPos).addClass("current");
		 	that.liNodes.eq(oldPos).removeClass("current");
			$(this).children().show();
			
			$(".table1_ta").mouseenter(function(){
				$(this).children().show();
				$(this).mouseleave(function(){$(this).children().hide();})
			});
			
		});
		$(".js_lists li").mouseleave(function(){
			var	oldPos=$(".js_lists .current").index();
			that.liNodes.eq(oldPos).removeClass("current");
			$(this).children().hide();
			
			$(".table1_ta").mouseleave(function(){
				$(this).children().hide();
			})
		});		
	},
	//箭头效果
	mouseEnterLeave:function(){
		var	that=this;
		that.mainUlNode.mouseenter(function(){
			that.flashLeft.show();
			that.flashLeft.mouseenter(function(){$(this).show();that.flashRight.show();})
			that.flashRight.show();
			that.flashRight.mouseenter(function(){$(this).show();that.flashLeft.show();})
		});
		that.mainUlNode.mouseleave(function(){
			that.flashLeft.hide();
			that.flashRight.hide();
		});
	},
	
	//淡入淡出
	picMove:function(){
		var	that=this;		
		//span点击淡入淡出
		that.flashSpanNode.click(function(){
			if($(this).hasClass("current")){
		 			return;
		 	}			
		 	var curPos=$(this).index();
		 	var oldPos=$(".flashDots .current").index();
		 	that.flashSpanNode.eq(curPos).addClass("current");
		 	that.flashSpanNode.eq(oldPos).removeClass("current");
		 	console.log(curPos,oldPos)
		 	that.picNode.eq(curPos).stop(true,true).fadeIn(200);
		 	that.picNode.eq(oldPos).stop(true,true).fadeOut(200);
		});
		//左右箭头淡入淡出
		that.flashLeft.click(function(){
			var curPos=$(this).index();
			var oldPos=$(".flashDots .current").index();
			var	lastPos=that.flashSpanNode.last().index();
			curPos=oldPos!=0?oldPos-1:lastPos;
			that.flashSpanNode.eq(curPos).addClass("current");
			that.flashSpanNode.eq(oldPos).removeClass("current");
			that.picNode.eq(curPos).stop(true,true).fadeIn(200);
		 	that.picNode.eq(oldPos).stop(true,true).fadeOut(200);
		});	
		that.flashRight.click(function(){			
			var curPos=$(this).index();
			var oldPos=$(".flashDots .current").index();
			var	lastPos=that.flashSpanNode.last().index();
			curPos=oldPos!=lastPos?oldPos+1:0;
			that.flashSpanNode.eq(curPos).addClass("current");
			that.flashSpanNode.eq(oldPos).removeClass("current");
			that.picNode.eq(curPos).stop(true,true).fadeIn(200);
		 	that.picNode.eq(oldPos).stop(true,true).fadeOut(200);
		});
	},
	//四个球移动
	fourballFlash:function(){
		var that=this;
		that.fourliNodes.mouseenter(function(){
			$(this).stop().animate({width:"503px"},200);
			$(this).siblings().stop().animate({width:"168px"},200);			
		});
		that.fourliNodes.mouseleave(function(){			
			$(this).stop().animate({width:"503px"},200);
			$(this).siblings().stop().animate({width:"168px"},200);
		});
	},
	//蓝色块变化
	bluepicMove:function(){
		var that=this;
		
		that.teamDivNode.mouseenter(function(){
			$(this).children().animate({top:"0"},2000);
			$(this).css({backgroundSize:"540px 282px"});
			
		});
		that.teamDivNode.mouseleave(function(){
			$(this).children().animate({top:"241px"},200);
			$(this).css({backgroundSize:"491px 261px"});
		});
	},
	//about箭头变字
	btnMoveLi:function(){
		var that=this;			
		that.aboutLeftNode.click(function(){
			var	oldPos=$(".about_value .current").index();
			var	lastPos=that.emNode.last().index();
			curPos=oldPos!=0?oldPos-1:lastPos;
			
			that.emNode.eq(curPos).addClass("current");
		 	that.emNode.eq(oldPos).removeClass("current");		 	
		});		
		that.aboutRightNode.click(function(){
			var oldPos=$(".about_value .current").index();
		 	var	lastPos=that.emNode.last().index();
		 		curPos=oldPos!=lastPos?oldPos+1:0;

		 	that.emNode.eq(curPos).addClass("current");
		 	that.emNode.eq(oldPos).removeClass("current");		 		
		});
	},
	//合作伙伴的图片移动
	ourClientMove:function(){
		var	that=this;	
		
		that.bottomLeft.click(function(){
			var	bottomLi=$(".client_tit li");
			var	bottomUl=$(".client_tit ul");
			bottomLi.first().stop().animate({marginLeft:"-202px"},100,function(){
				bottomLi.first().appendTo(bottomUl).css({marginLeft:"0px"});
			});
		});
		that.bottomRigh.click(function(){
			var	bottomLi=$(".client_tit li");
			var	bottomUl=$(".client_tit ul");
			
			bottomLi.last().prependTo(bottomUl).css({marginLeft:"-202px"});
			bottomLi.last().stop().animate({marginLeft:"0"},100);
		});
	},
	
	init:function(){
		var	that=this;
		
		that.navMove();
		that.fourballFlash();
		that.bluepicMove();
		that.btnMoveLi();
		that.picMove();
		that.ourClientMove();
		that.mouseEnterLeave();
	}
};
main.init();
   
