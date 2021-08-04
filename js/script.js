function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(name!=="" && email!=="" && message!==""){
        alert("hi" + " " +name +" " +"welcome to Soma Halisi. W'll get back to you ASAP!");
    }
    else if(name!=="" || email!=="" || message!==""){
        alert("please enter your details");  
    }
}
