$(document).ready(function() {
    
/* 	$('#contact form').on('submit', function(e) {
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
    }); */
	
	
	//按下登入,彈出帳號及密碼輸入欄
    $('#sign-btn').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
	
	
	////按下登入,彈出帳號及密碼輸入欄
    $('#sign-btn2').on('click', function(e) {
        $(e.currentTarget).closest('ul').hide();
        $('form#signin').fadeIn('fast');
    });
	
	
 
function validate(a1,a2)
{ 
  if (a1=='101' && a2=='001') 
      load('http://www.google.com.tw');  //輸入帳號101、密碼001時會進入google

  else if  (a1=='102' && a2=='002') 
      load('http://www.pchome.com.tw/');  //輸入帳號102、密碼002時會進入pchome

  else
      load('http://tw.yahoo.com'); //輸入錯的密碼時會進入奇摩網頁

}

function load(url)
{
location.href=url;
}
 

});
