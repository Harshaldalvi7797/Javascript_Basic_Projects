function loginVerification(strUsername,strPassword)
{
    let message ;
    let tempUsername = "Harshal";
    let tempPassword = "12";
    if(strUsername === tempUsername && strPassword === tempPassword)
    {
         message=true;


    }
    else
    {
        message= "Username and Password does not match" ;
    }
return message;
  

}