"use strict";
/* global define, app, config, RELATIVE_PATH */

define('forum/login', ['csrf', 'translator'], function(csrf, translator) {
	var	Login = {};

	Login.init = function() {
		var errorEl = $('#login-error-notify'),
			submitEl = $('#login'),
			codeEl = $('#btnCode'),  //获取验证码按钮
			formEl = $('#login-form');

		submitEl.on('click', function(e) {
			e.preventDefault();

			if (!$('#username').val() || !$('#password').val()) {
				errorEl.find('p').translateText('[[error:invalid-username-or-password]]');
				errorEl.show();
			} else {
				errorEl.hide();

				if (submitEl.hasClass('disabled')) {
					return;
				}

				submitEl.addClass('disabled');
				formEl.ajaxSubmit({
					headers: {
						'x-csrf-token': csrf.get()
					},
					success: function(data, status) {
						window.location.href = data + '?loggedin';
					},
					error: function(data, status) {
						errorEl.find('p').translateText(data.responseText);
						errorEl.show();
						submitEl.removeClass('disabled');
					}
				});
			}
		});

		//获取验证码按钮点击事件
		codeEl.on('click',function(e){
			e.preventDefault();
			var timeCount = 60;
			var username = $('#username').val();
			if(!username|| !/(13|14|15|17|18)[0-9]{9}/.test(username)){
				//登录用户名为空 或者非手机号 提示出错
				errorEl.find('p').translateText('[[error:invalid-phone-num]]');
				errorEl.show();
			}else{
				errorEl.hide();
				if(codeEl.hasClass('disabled')){
					return;
				}
				codeEl.addClass('disabled');
				//倒计时一分钟显示
				//ajax提交请求 获取验证码
				var interval = setInterval(function(){
					timeCount--;
					codeEl.text(timeCount);
					if(timeCount==0){
						codeEl.text('重新获取验证码');
						codeEl.removeClass('disabled');
						clearInterval(interval);
					}
				},1000);
				//调用发送短信接口
				$.ajax({
						method: "POST",
						url: "/api/reqSms",
						data: { phone: username }
					})
					.done(function( msg ) {
						//alert( "Data Saved: " + msg );
						console.log('msg:',msg);
					});
				
			}

		});

		$('#login-error-notify button').on('click', function(e) {
			e.preventDefault();
			errorEl.hide();
			return false;
		});

		$('#content #username').focus();

		// Add "returnTo" data if present
		if (app.previousUrl) {
			var returnToEl = document.createElement('input');
			returnToEl.type = 'hidden';
			returnToEl.name = 'returnTo';
			returnToEl.value = app.previousUrl;
			$(returnToEl).appendTo(formEl);
		}
	};

	return Login;
});
