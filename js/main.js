$(document).ready(function() {
	//not work
  	$('#contact form').on('submit', function(e) {	 
        e.preventDefault();
        var $form = $(e.currentTarget),
            $email = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');
        if($email.val().indexOf('@') == -1) {
            vaca = $email.closest('form-group')
            $email.closest('.form-group').addClass('has-error');
        } else {
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>訊息已送出。我們將盡快與你聯繫</span>');
        }
    });
	
	 $('#real_login').on('click',function(e) {
		e.preventDefault();
        var $account= $("#signin-account").val();
		var $pwd=$("#signin-password").val();
		
		if( $account=='mitac' && $pwd=='mitac' ){
			
			//$button.after('<span>登入成功...</span>');
			//alert("account ok");
			// $('form#signin').fadeIn('fast');
			
			//javascript style
			//var a = document.getElementById("signin-account");		
			//a.style.display = 'none';
			
			
			$("#signin-account").fadeTo("slow",0);
			$("#signin-password").fadeTo("slow",0);
			$("#real_login").fadeTo("slow",0);
			document.getElementById("login_name").innerHTML =  "<span style='color:#FF0000; font-size:8em'> 登入成功 </span>";
			
		}
		else{
			
			//$button.after('<span>帳號或密碼錯誤</span>');
			//alert("account fail");
			document.getElementById("login_name").innerHTML = "<span style='color:#FF0000; font-size:8em'>登入失敗  </span>";
		}
		 
		  
	 });
	
	
	//按下登入,彈出帳號及密碼輸入欄
    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
	
	 

});
