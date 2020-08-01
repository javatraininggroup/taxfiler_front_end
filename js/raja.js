function ajax(url, method, reqData){
	try{
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
