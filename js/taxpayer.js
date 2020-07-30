
// function ajax(url, method, reqData){
// 	try{
// 		//alert("inside ajax");
// 	 $.ajax({
//              url :url,
//              type:method,
// 			 contentType: "application/json",
//              data: reqData,
//              success:function(data, textStatus, jqXHR){
//                 $('#msg').text('Register Successfully');
// 				var delay = 1000; 
//         		var url = 'login.html'
//         		setTimeout(function(){ window.location = url; }, delay);
//              },
//              error:function(jqXHR, textStatus, errorThrown){
//                   console.log('data',reqData);
// 				   alert('something went wrong');
//              }
//          });
// 	}catch (ex) {
//         alert('Error parsing response.'+ex);
//     }
// }

// function taxinfo(){
//     var taxpayerinfo = { };
//     // alert("ddsd");
//          taxpayerinfo.martialStatus = $('#martialStatus').val();
//          var taxpayerinfoObj = JSON.stringify(taxpayerinfo);
//          alert(taxpayerinfoObj);
// 		 //console.log("registerObj: "+registerObj);
// 		// ajax("http://34.239.168.155:8080/taxfiler-0.0.1-SNAPSHOT/api/register", 'POST',registerObj);
// }



// function taxinfo(){
//     $("#taxpayerform").submit();
//    // alert("jelo");
   
// }
			
$(document).ready(function(){
 $("#saveNext").click(function(e) { 
    var taxpayerinfo = { };
    // alert("ddsd");
         taxpayerinfo.martialStatus = $('#martialStatus').val();
          taxpayerinfo.lastName = $('#lastName').val();
        taxpayerinfo.middleName = $('#middleName').val();
        taxpayerinfo.firstName = $('#firstName').val();
		taxpayerinfo.ssn = $('#ssn').val();
		taxpayerinfo.occupation = $('#occupation').val();
		taxpayerinfo.dateOfBirth = $('#dateOfBirth').val();
		taxpayerinfo.dateOfMarriage = $('#dateOfMarriage').val();
        taxpayerinfo.firstDateOfEntyInUS = $('#firstDateOfEntyInUS').val();
        taxpayerinfo.typeOfVisa = $('#typeOfVisa').val();
		taxpayerinfo.citizenship = $('#citizenship').val();
		taxpayerinfo.contactDetails = $('#contactDetails').val();
        taxpayerinfo.address = $('#address').val();
        taxpayerinfo.city = $('#city').val();
        taxpayerinfo.aptNo = $('#aptNo').val();
        taxpayerinfo.state = $('#state').val();
        taxpayerinfo.zip = $('#zip').val();
        taxpayerinfo.country = $('#country').val();
        taxpayerinfo.mobilePhone = $('#mobilePhone').val();
        taxpayerinfo.alternateNumber = $('#alternateNumber').val();
         var taxpayerinfoObj = JSON.stringify(taxpayerinfo);
         alert(taxpayerinfoObj);	
var validator = $("#taxpayerform").validate({
	// 		    rules: {
	// 		    		email: {
    //                     required: true,
    //                        email: true
    //                    },
    //                    confirmEmail:{
    //                        required:true,
    //                        equalTo:"#email"
    //                    },
				
    //                    password: {
    //                     required: true,
    //                     minlength:6
    //                    },
    //                    confirmPassword:{
    //                        required:true,
    //                        equalTo:"#password"
    //                    },
	// 			name: {
	// 			 required: true,
    //             lettersonly: true
	// 			},
	// 			code: {
	// 			 required: true
	// 				},
					
	// 			phone: {
	// 			     required: true,
	//                  phoneUS: true,
	// 				 minlength:10
	// 					},
	// 			reference_from: {
	// 			 required: true
	// 				  },	
	// 			p_time_zone:{
	// 				required: true
	// 				}
	// 		},
	// 		// messages: {
		
    //         //     email: {
    //         //         required: "Email is required",
    //         //            email: "Invalid Email"
    //         //         },
    //         //         confirmEmail:{
    //         //             required: "Confirm Email is required",
    //         //             equalTo: "Confirm Email and Email doesn't match"
    //         //         },
	// 		// 		password: {
    //         //             required: "Password is required"
    //         //             },
    //         //             confirmPassword:{
    //         //                 required: "Confirm Password is required",
    //         //                 equalTo: "Confirm Password and Password doesn't match"
    //         //             },
	// 		// 	name:
    //         //                           { required: "Name is required",
    //         //                             lettersonly: "Special symbols are not allowed"
    //         //                           },   
	// 		// 	phone: {
	// 		// 		required: "Phone# is required",
    //         //         phoneUS: "Invalid Phone#",
	// 		// 		minlength:"Invalid Phone#, please provide at least 10 #"
	// },
			
	// 	},invalidHandler: function() {
    //        //alert("invalid handleEvent");
		   
    //     },
		submitHandler: function(form) { 
			//	alert("submitHandler"); 
				//alert("calling register method");
				//taxinfo()
		}
                
        
 
    });
	
	
       
});
  });

  

  
  