function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(name==="" && email==="" && message===""){
        alert("please provide your details");
         return false;
    }
    else if(name==="" || email==="" || message===""){
        alert("please provide valid details")
    }
}