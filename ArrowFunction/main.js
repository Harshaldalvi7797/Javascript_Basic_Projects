let onSubmit1= () =>
{
    //Multiple Statement
    return "harshal dalvi";

}

let result =onSubmit1();
console.log(result);

let onSubmit2 = (strFullName)=> console.log(strFullName);

 onSubmit2("Harshal Dalvi");

 function onDisplay(strFirstName,strLastName,intage)
 {
     return `my name is ${ strFirstName} ${strLastName} ${intage}
     `;
     

 }

let display = onDisplay("Harshal","Dalvi",22);
console.log(display);
 display = onDisplay("Pratiksha","More",21);
 console.log(display);