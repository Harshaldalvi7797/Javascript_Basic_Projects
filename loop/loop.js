// for(let counter=0; counter<=10; counter++)
// {
//     document.write("I hate javascript");
//     document.write("</br>");
// }

// for(let counter=0; counter<=10; counter++)
// {
//   console.log("counter");
// }

let numarray= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// console.log(numarray.length);
// console.log(numarray[1]);
 for(let counter=0; counter <=numarray.length-1; counter++)
 {
    //  console.log(numarray[counter]);
     
 }

 let strArray =["Harshal","Vrushali","Minal","Pratiksha","Saurabh","Vedu"];

 console.log(strArray);
 console.log(strArray.length);

 for(let counter=0; counter<=strArray.length-1; counter++)
 {
    //  console.log(strArray[counter]);
 }
let str1="hello";
 for(let strdata of strArray)
 {
    //  console.log(strdata);
    //  document.write("<h1>"+ strdata+ "</h1>");

    //  document.write(`<h1> ${strdata}   </h1>`);
    //  document.write(`</br>`);
 }

 for(let strdata in strArray)
 {
    //  console.log(strdata);
    //  document.write("<h1>"+ strdata+ "</h1>");

    //  document.write(`<h1> ${strdata}   </h1>`);
    //  document.write(`</br>`);
 }


 for(let num of numarray)
 {
     if(num % 2 == 0)
     {
         console.log(num );
     }
 }
for (let num of numarray)
{
 
    if(num <= 5)
    {
        continue;
    }
    console.log(num);
}

for(let counter1=0; counter1<=5; counter1++)
{
    for(let counter2=0; counter2<=counter1;counter2++)
    {
        document.write("*");
    }
    document.write("</br>");
}