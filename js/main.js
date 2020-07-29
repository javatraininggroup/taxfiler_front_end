
function ajax(url, method, reqData){
	try{
		//alert("inside ajax");
	 $.ajax({
             url :url,
             type:method,
			 contentType: "application/json",
             data: reqData,
             success:function(data, textStatus, jqXHR){
                $('#msg').text('Register Successfully');
				var delay = 1000; 
        		var url = 'login.html'
        		setTimeout(function(){ window.location = url; }, delay);
             },
             error:function(jqXHR, textStatus, errorThrown){
                  console.log('data',reqData);
				   alert('something went wrong');
             }
         });
	}catch (ex) {
        alert('Error parsing response.'+ex);
    }
}

function register(){
		 var register = { };
	     register.email = $('#email').val();
         register.confirmEmail = $('#confirmEmail').val();
         register.password = $('#password').val();
         register.confirmPassword = $('#confirmPassword').val();
         register.name = $('#name').val();
         register.phone = $('#phone').val();
         register.alternatePhone = $('#alternatePhone').val();
         register.sourceOfKnowingSite = $('#sourceOfKnowingSite').val();
         register.preferredTimezone = $('#preferredTimezone').val();
         var registerObj = JSON.stringify(register);
		 console.log("registerObj: "+registerObj);
		 ajax("http://34.239.168.155:8080/taxfiler-0.0.1-SNAPSHOT/api/register", 'POST',registerObj);
}


$(function(){

	$("#sourceOfKnowingSite").val('');
	$("#preferredTimezone").val('');

	window.top.postMessage(-1000, "*"); //scroll to top
	
});

function submitRegister(){
	$("#registerForm").submit();
}
			
$(document).ready(function(){
 $("#submit").click(function(e) { 	
$('#email').focus();
jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Letters only please"); 
			
jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, ""); 
    return this.optional(element) || phone_number.length > 9 && phone_number.match(/^[0-9]+(-[0-9]+)*$/) ;
}, "Please specify a valid phone number");


var validator = $("#registerForm").validate({
			    rules: {
			    		email: {
                        required: true,
                           email: true
                       },
                       confirmEmail:{
                           required:true,
                           equalTo:"#email"
                       },
				
                       password: {
                        required: true,
                        minlength:6
                       },
                       confirmPassword:{
                           required:true,
                           equalTo:"#password"
                       },
				name: {
				 required: true,
                lettersonly: true
				},
				code: {
				 required: true
					},
					
				phone: {
				     required: true,
	                 phoneUS: true,
					 minlength:10
						},
				reference_from: {
				 required: true
					  },	
				p_time_zone:{
					required: true
					}
			},
			messages: {
		
                email: {
                    required: "Email is required",
                       email: "Invalid Email"
                    },
                    confirmEmail:{
                        required: "Confirm Email is required",
                        equalTo: "Confirm Email and Email doesn't match"
                    },
					password: {
                        required: "Password is required"
                        },
                        confirmPassword:{
                            required: "Confirm Password is required",
                            equalTo: "Confirm Password and Password doesn't match"
                        },
				name:
                                      { required: "Name is required",
                                        lettersonly: "Special symbols are not allowed"
                                      },   
				phone: {
					required: "Phone# is required",
                    phoneUS: "Invalid Phone#",
					minlength:"Invalid Phone#, please provide at least 10 #"
				},
				code: "Verification code is required",
				sourceOfKnowingSite:"Please select How do you know about Best Tax Filer",
				preferredTimezone:"Please select Preferred time zone"
		},invalidHandler: function() {
           //alert("invalid handleEvent");
		   
        },
		submitHandler: function(form) { 
			//	alert("submitHandler"); 
				//alert("calling register method");
				register()
		}
                
        
 
    });
	
		/*$.validator.setDefaults({
			submitHandler: function() { 
                alert("hello");   
			}
        });*/	
       
});
  });

// setInterval(function() {
//     window.top.postMessage(document.body.scrollHeight, "*");
// }, 200); 


