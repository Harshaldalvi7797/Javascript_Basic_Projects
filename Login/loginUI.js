///  <reference path="../Login/jquery-3.4.1.min.js"/>

function onCancel()
{
    //Clear textbox

    $("#txtusername").val("");
    $("#txtpassword").val("");

//Focus on textbox textusename
    $('#txtusername').focus();


}



function loginResponceIsvalid(strmessage)
{
  
    let type = typeof(strmessage);

    if(type === "boolean")
    {
        //Redirect to x page

       console.log("Redirect to dashboard");
       $("#divMessage").html("");
       $("#divMessage").hide();
    
    }

    else (type === "String")
    {
        onCancel();
        $("#divMessage").html(strmessage);
        $("#divMessage").show();

        
    }

}

function getLoginData()
{
    let username = $("#txtusername").val();
    let password =  $("#txtpassword").val();

    let loginArray = [username,password];
    return loginArray;

}


function onSubmit()
{

    let loginArray = getLoginData();

    // let username = loginArray[0];
    // let password = loginArray[1];



    // let message = loginVerification(username,password);
    // let message = loginVerification(username,password);

     let message = loginVerification(loginArray[0], loginArray[1]);

    // let message = loginVerification();

    
    //  loginArray =[$("#txtusername").val(""),$("#txtpassword").val("")];

    //  return loginArray;


    loginResponceIsvalid(message);

}