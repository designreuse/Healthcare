var Lock = function () {

	var handleLockLogin = function() {
		$('.form-inline').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	                password: {
	                    required: true
	                }
	            },
	            messages: {
	                password: {
	                	required: "密码不能为空."
	                	//required: "Password is required."
	                }
	            },
	            invalidHandler: function (event, validator) { //display error alert on form submit   
	                $('.alert-danger', $('.form-inline')).show();
	            },
	            highlight: function (element) { // hightlight error inputs
	                $(element).closest('.input-icon').addClass('has-error'); // set error class to the control group
	            },
	            success: function (label) {
	                label.closest('.input-icon').removeClass('has-error');
	                label.remove();
	            },
	            errorPlacement: function (error, element) {
	                error.insertAfter(element.closest('.input-icon'));
	            },
	            submitHandler: function (form) {
	                form.submit();
	            }
	        });

	        $('.form-inline input').keypress(function (e) {
	            if (e.which == 13) {
	                if ($('.form-inline').validate().form()) {
	                    $('.form-inline').submit();
	                }
	                return false;
	            }
	        });
	}
	
    return {
        //main function to initiate the module
        init: function () {

        	handleLockLogin();
        	
             $.backstretch([
		        "assets/img/bg/1.jpg",
		        "assets/img/bg/2.jpg",
		        "assets/img/bg/3.jpg",
		        "assets/img/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();