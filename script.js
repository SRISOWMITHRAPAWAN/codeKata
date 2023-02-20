/*
5
*
**
***
****
*****

*/
//solution
var n=5;
for(var i=0;i<n;i++){
    let str=""
    for(var j=0;j<=i;j++){
        str+="*"
    }
    console.log(str)
}
///for reverse
var n=5;
for(var i=5;i>0;i--){
    let str=""
    for(var j=0;j<i;j++){
  
        str+="*"
    }
    console.log(str)
}

2.

///// for interchanging key value pair in object and retuen kin new object
var obj={
    jack:"three",
    jill:"two",
    And:"one"
}
let output={}
for(var key in obj){
output[obj[key]]=key;
}
console.log(output)
////output////
{ three: 'jack', two: 'jill', one: 'And' }
//////////////////////////////////////////////////////
3.
// for captilize only key

var obj={
    jack:"three",
    jill:"two",
    And:"one"
}
let output={}
for(var key in obj){
output[key.toUpperCase()]=obj[key]
}
console.log(output)
//////////////////
// 4.array[0]to apper case

var arr=[["jack","jill"],["jung","jill"],["chuck","jill"]]
var res=arr.map((ele)=>{
    ele[0]=ele[0].toUpperCase()
    return ele
})
console.log(res)
//output
[ [ 'JACK', 'jill' ], [ 'JUNG,JILL' ], [ 'CHUCK', 'jill' ] ]


5.n=32 2 power 5/////////////
var a=userInput[0]
for(var i=a;i%2==0;i/=2);
console.log(i===1)


///////////dupicate count/////////

6.var arr=[3,4,3,5,3,6]
var res=arr.reduce((accum,ele)=>{
 accum[ele]=accum[ele]+1 || 1
 console.log()
 return accum
},{})
console.log(res)


//////////index into value///////
var arr=[3,4,3,5,3,6]
var res=arr.reduce((acc,ele,index)=>{
   
    acc+=ele*index;
    return acc;
})
console.log(res)



////////////////////////ROTAION OF ARRAY///////////////////////////////////////////////////
var k=+userInput[0];
var arr=["1","2","3","4","5"].map(Number);
for(var i=0;i<k;i++){
    arr.unshift(arr.pop())
}
console.log(arr)