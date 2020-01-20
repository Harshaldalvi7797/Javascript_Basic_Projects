//Function without parameter and no return values
function add1()
{
    //Define variable

    let value1=10;
    let value2=20;

    console.log(value1 + value2);

}




//call a function
add1();


//Function without parameter and  return values


function add2()
{
    //Define variable
    let value1=10;
    let value2=50;
    // let result = value1 + value2;
    // return result;
    return(value1 + value2);



}
let result = add2();
console.log(result);

function add3(numValue1, numValue2)
{
    console.log((numValue1 + numValue2));


}

add3(2,25);


function add4(numValue4,numValue5)
{
    return(numValue4 + numValue5);


}
   result=add4(25,35);
  console.log(result);
