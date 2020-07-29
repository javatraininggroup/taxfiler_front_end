result = (x,y) =>{
    var ragi = Number(document.getElementById('grocery').value);
    var rice = Number(document.getElementById('item').value);
    
  
    document.getElementById('shop').innerHTML = rice + ragi;
}