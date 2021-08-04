function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    // if(name!=="" && email!=="" && message!==""){
    //     alert("hi" + " " +name +" " +"welcome to Soma Halisi. W'll get back to you ASAP!");
    // }
    // else if(name!=="" || email!=="" || message!==""){
    //     alert("please enter your details");  
    // }
    if(name==""){
        $("#error1").show()
        return false
    }else
    $("#error1").hide();
    if(email==""){
        $("#error2").show();
        return false
    }else
        $("#error2").hide();
    if(message==""){
        $("#error3").show();
        return false
        
    }else
    alert("hi" +" " +name +" " +"welcome to Soma Halisi and w'll get back to you ASAP!")

}

