//console.log(23);

// const fruits=["apple","mango"];
// fruits=["grapes","pineapple"]
// fruits.push("banana");
// console.log(fruits) 

// const fruits=["bana", "app", "carry"];
// for(var  i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

//array destructuring
// const myArray1 = ["n","m","k","d" ];

// let [myvar1, myvar2, ...mynewArray] = myArray1;
// //let mynewArray= myArray.slice(2);
// console.log(myvar1);
// console.log(myvar2);
// console.log(mynewArray);



//objects are reference type
// const key="email";
// const person = {
//     name:"nitin",
//      "age":22,
//      "tayal hobbies":["guittar", "music"]
//     };
// console.log(typeof person);
// console.log(person["tayal hobbies"])
// console.log(person.name);
// person["key"]="male@gmail.com";
// console.log(person) ;
// console.log(person["name"])
 

// const person = {
//     name:"nitin",
//      "age":22,
//      "tayal hobbies":["guittar", "music"]
//     };


//     // for(let key in person){
//     //     console.log(`${key} : ${person[key]}`);
//     //     console.log(key,":",person[key])
//     // }

//     console.log(Object.keys(person))

//     for(let key of Object.keys(person)){
//         console.log(person[key])
//     }

//string is iteratble
//  const newArray=[..."12344"];
//  console.log(newArray);

//  //spread operatorin object
//  const obj1 = {
//      key1:"value1",
//      key2:"value2",
//  };

//  const obj2 = {
//      key1:"un",
//     key3:"value1",
//     key4:"value2",
// };
// console.log({...obj2,...obj1, key2:"nue"});
 
 
//object destructturing

// const band={
//     bandName:"tayal",
//     famousSong:"kuch bhe",
//     ssdb:"dwd"
// }

// let{bandName:var1, famousSong, ...restpro} = band;
// console.log(var1)
// console.log(restpro)



// const users=[
//     {userId:1,firstName:"nitin",lastName:"tayal"},
//     {userId:2,firstName:"priyanshu",lastName:"saini"},
//     {userId:3,firstName:"punnit",lastName:"bal"}
// ]
// // console.log(users)
// // for(let user of users){
// //     console.log(user)
// // }

// function callsum(){
//     console.log("happy birthday")
// }
// callsum()

// const findsum =(array, target)=>{
//     for(let i=0; i<array.length; i++){
//         if(array[i]===target)
//         return i;
//     }
//     return -1;
// }

// const myArray=[1,3,6,9]
// const ans = findsum(myArray,90);
// console.log(ans);


//hoisting


// const hello =  function (){
    
//     const newfun = function(){
//         console.log("inside fun");
//     }
//     newfun();
//     console.log("hello");
//     newfun();
// }
// hello();


// {
//     var firstname = "niitn"; 
// }
// console.log(firstname);

// const users=[
//     {firstName: "nitin", age:66},
//     {firstName: "kapoor", age:99},
// ]

// users.forEach(({firstName, age})=>{
//     console.log(firstName,age)
// })
// console.log("hello");

// console.log("sss");
// let array=["mango", "man", "can"];
// let  array2=[];

// for(let i=0; i<array.length;i++){
//     array2.push(array[i].toUpperCase());
// }
// console.log(array2);

const fruits=["mango", "man"];
const fruits2=[];
// let i=0;
// while(i<fruits.length){
//     fruits2.push(fruits[i])
// }
for(let fruit of fruits){
    console.log(fruit);
}
 console.log("hello");