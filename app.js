let arr=["ram","shyam","jay","raj"];
let num=[2,4,8,16,32,64,128];
let txt="" ;
let numbers="";

// foreach
arr.forEach((value)=>{
txt += value + ',';

})

document.getElementById("demo").innerHTML=txt;

num.forEach((value)=>{
    numbers += value + ",";
    })
    
    document.getElementById("demo1").innerHTML=numbers;

    // array map
arr.map((item)=>{
 document.getElementById("map").innerHTML=item; 
 })

 num.map((item)=>{
  document.getElementById("map1").innerHTML=item; 
  })

//  Array filter
let newarr= num.filter((item)=>{
    return item >30;
})
document.getElementById("filter").innerHTML=newarr; 

// reducearr
let reducearr=num.reduce((acc, item)=>{
return acc+ item;
})
document.getElementById("acc").innerHTML=reducearr;

let reducearr1=num.reduce((acc, item)=>{
    return acc * item;
    })
    document.getElementById("acc1").innerHTML=reducearr1;

// reversearr
let reversearr=arr.reverse();
document.getElementById("reverse").innerHTML=reversearr;

let reversearr1=num.reverse();
document.getElementById("reverse1").innerHTML=reversearr1;

        
// evryarr and some
let everyarr=num.every((item)=>{
return item >30;
})

document.getElementById("every").innerHTML=everyarr;

let everyarr1=num.some((item)=>{
    return item >30;
    })
    
    document.getElementById("some").innerHTML=everyarr1;

    let everyarr2=arr.every((item)=>{
        return item ="a";
        })
        
        document.getElementById("every1").innerHTML=everyarr2;
        

 let everyarr3=arr.every((item)=>{
     return item ="m";
     })
            
document.getElementById("every2").innerHTML=everyarr3;

// includearr
let value=arr.includes("ram");
document.getElementById("include").innerHTML=value;

let value1=arr.includes("ramu");
document.getElementById("include1").innerHTML=value1;

let value2=num.includes(128);
document.getElementById("include2").innerHTML=value2;





