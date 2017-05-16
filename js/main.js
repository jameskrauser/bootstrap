$(document).ready(function() {
	
	 $('#real_login').on('click',function(e) {
		e.preventDefault();
        var $account= $("#signin-account").val();
		var $pwd=$("#signin-password").val();
		
		if( $account=='mitac' && $pwd=='mitac' ){
			//把帳號,密碼TEXT及登入按鈕做隱藏
			$("#signin-account").fadeTo("slow",0);
			$("#signin-password").fadeTo("slow",0);
			$("#real_login").fadeTo("slow",0);
			//回傳訊息
			document.getElementById("login_name").innerHTML =  
			"<span style='color:#FF0000; font-size:8em'> 登入成功 </span>";
			
		}
		else{
			document.getElementById("login_name").innerHTML = 
			"<span style='color:#FF0000; font-size:8em'>登入失敗  </span>";
		}
	 });
	
	
	//按下登入,彈出帳號及密碼輸入欄
    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
	
	 

});
