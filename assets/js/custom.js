$(document).ready(function(){
	$(".gnb li").click(function(){
		$(".gnb li").removeClass("on");
		$(this).addClass("on");
	});
	$(".gnb li").eq(2).click(function(){
		alert("서비스 준비중입니다.");
	});
	$(".tap-menu li").click(function(){
		$(".tap-menu li").removeClass("on");
		$(this).addClass("on");
		$(".account-table tbody tr").hide();
		if($(this).attr("data-cate")=="member"){
			$(".account-table tbody tr").show();
		}
		else{
			var show_member = $(this).attr("data-cate");
			var len = $(".account-table tbody tr").length;
			for(var i=0; i<len; i++){
				var member_cate=$(".account-table tbody tr").eq(i).attr("class");
				if(show_member==member_cate){
					$(".account-table tbody tr").eq(i).show();
				}
			}
		}
	});
//	$(".close-admin-btn").click(function(){
//		$(".close-admin-acc").show();
//	});
	$(".close-admin").click(function(){
		$(".close-admin-confirm").show();
	});
	$(".close-admin-confirm .send-mail").click(function(){
		$(".change-cate").show();
		$(".close-admin-acc").hide();
		
	});
	var memberCate=$(".profile-cate").text();
	if(memberCate=="관리자"){
		$(".close-admin-button").text("관리자해지");
		$(".close-admin-btn").click(function(){
		$(".close-admin-acc").show();
	});
	}
	 else if(memberCate=="일반회원"){
		 $(".close-admin-btn p").text("관리자등록");
		 $(".close-admin-btn").click(function(){
		$(".reg-admin-acc").show();
	});
	 }
	$(".reg-admin").click(function(){
		$(this).parents(".popup").hide();
		$(".change-cate .member-cate").text("관리자회원");
		$(".change-cate").show();
	});
	$(".change-cate button").click(function(){
		$(".close-admin-confirm").hide();
		if(memberCate=="관리자"){
			$(".profile-cate").text("일반회원");
			$(".close-admin-btn p").text("관리자등록");
	}
	 else{
		 $(".profile-cate").text("관리자");
		 $(".close-admin-btn p").text("관리자해지");
	 }
	});
	$(".close-popup").click(function(){
		$(this).parent("div").hide();
	});
	$(".member-page-btn").click(function(){
		$(".panel").hide();
		$(".member-page").show();
	});
	$(".return").click(function(){
		$(".member-page").hide();
		$(".panel").show();
	});
	$(".page-num li").click(function(){
		$(".page-num li").removeClass("on");
		$(this).addClass("on");
	});
	$(".unregister").click(function(){
		$(".unreg-acc").show();
	});
	$(".unreg-acc .unregister-btn").click(function(){
		$(".unreg-txt").show();
	});
		$(".unreg-txt .send-mail").click(function(){
		$(".unreg-confirm").show();
		$(".unreg-acc").hide();
		
	});
	$(".unreg-confirm button").click(function(){
		$(".unreg-txt").hide();
		$(".profile-cate").text("탈퇴회원");
		$(".close-admin-btn").hide();
		$(".profile-top").css({"height":250});
		$(".unreg-date").show();
		$(".unreg_d").text(unregDate());
	});
	function unregDate(){
		var date=new Date();
		var month = ''+(date.getMonth()+1);
		var day = ''+date.getDate();
		var year = date.getFullYear();
		var hour = ' '+date.getHours();
		var minutes = ''+date.getMinutes();
		var seconds = ''+date.getSeconds();
		
		if(month.length<2){
			month='0'+month;
		}
		if(day.length<2){
			day='0'+day;
		}
		return ([year,month,day].join(':')+[hour,minutes,seconds].join(':'));
	}
//	function unregDate(){
//		var newTr = document.getElementsByClassName("profile-table");
//		var unreg_d = new Date();
//		var makeTr = document.createElement('tr');
//		var makeTdList = document.createElement('td');
//		var makeTdDate = document.createElement('td');
//		var tdListName = document.createTextNode('탈퇴일시');
//		var tdDate = document.createTextNode(unreg_d);
//		makeTdList.appendChild(tdListName);
//		makeTdDate.appendChild(tdDate);
//		makeTr.appendChild(makeTdList);
//		makeTr.appendChild(makeTdDate);
//		document.body.appendChild(makeTr);
//		newTr.appendChild(makeTr);
//	}

	var isCheck=0;
	$(".check-all").click(function(){
		if(isCheck==0){
			$(".check-all").addClass("on");
			isCheck=1;
			$("input[name=checkRow]").prop("checked",true);
		}
		else if(isCheck==1){
			$(".check-all").removeClass("on");
			isCheck=0;
			$("input[name=checkRow]").prop("checked",false);
		}
	});
	var len=$(".banner-table tr").length;
	for(var i=0;i<len;i++){
		var p=$(".banner-table tr").eq(i).children(".payment");
		var s=$(".banner-table tr").eq(i).children(".state");
		if(p.text()=="결제완료")
			p.css({"color":"#34a9ff"});
		if(p.text()=="-"){
			s.text("종료");}
		if(s.text()=="광고중")
			s.css({"color":"#34a9ff"});
	}
	$(".banner-ad-btn").click(function(){
			$(".panel").hide();
			$(".banner-ad-page").show();
	});
	$(".download").click(function(){
		var src=$(this).siblings("img").attr("href");
		$(this).attr("href",src);
	});
	$(".confirm-pay").click(function(){
		$(".bakcground-black").show();
		$(".confirm-pay-popup").show();
	});
	$(".confirm-pay-btn").click(function(){
		$(this).parent("div").hide();
		$("button.confirm-pay").hide();
		$(".gotoAd").show();
		$(".pay-state").text("결제완료");
		$(".pay-state").css({"color":"#34a9ff"});
	});
	var uploadFile2 = $('.fileBox2 .uploadBtn2');
	uploadFile2.on('change', function(){
	if(window.FileReader){
		var filename2 = $(this)[0].files[0].name;
	} else {
		var filename2 = $(this).val().split('/').pop().split('\\').pop();
	}
	$(this).siblings('.fileName2').val(filename2);
	});
	$(".register").click(function(){
		$(".confirm-banner-popup").show();
	});
	$(".confirm-banner-btn").click(function(){
		location.href="/banner_sub.html";
	});
	$(".gotoList").click(function(){
		location.href="/banner.html";
	})
	$(".edit").click(function(){
		$(".edit-banner-popup").show();
	});
	$(".close-ad").click(function(){
		$(".close-ad-popup").show();
	});
	$(".terms-edit").click(function(){
		$(".terms-edit-box").show();
	});
	$(".per-info-edit").click(function(){
		$(".personal-info-edit").show();
	});
	$(".close-page").click(function(){
		$(".page-box").hide();
	})
});