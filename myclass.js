"use strict"
//variable declaration
//var, let, const
function sampleFunction(){
    console.log("var let const");
    var x = 10
    var y = 20
    const z = 40
        //z = 50  //invalild operation
    {
        //var x = 1
        let x = 1
        let y = 2
        const z = 4
        console.log("Inside scope");
        console.log("X: " + x);
        console.log("Y: " + y);
        console.log("Z: " + z);
    }
    console.log("Outside scope");
    console.log("X: " + x);
    console.log("Y: " + y);
    console.log("Z: " + z);
}

sampleFunction()
console.log("Code for foreach");
var friends = ["obb", "bnp", "ola", "uber", "mewo"]
console.log("foreach with arrow function");
 friends.forEach(f => console.log(f))
 console.log("foreach with named function");
 friends.forEach(dumpOut)
 function dumpOut(f){
    console.log(f);
 }

 console.log("code for map with return statement");
 var newFriends = friends.map( (f) => { 
    return f.toUpperCase()
})
newFriends.forEach( f => console.log(f))

console.log("code for map without return statement");
 var newFriendsLength = friends.map( f => f.length)
 var newFriends = friends.map( f => f.toUpperCase())
newFriends.forEach( f => console.log(f))
newFriendsLength.forEach( f => console.log(f))

console.log("code for filter");
 var scores = [10, 50,100,6,3,1,90,55,22,41,30]
 console.log("filter with named function");
var filteredScore = scores.filter(greaterThan55)
function greaterThan55(score){
    return score > 50
}
filteredScore.forEach(s => console.log(s))
console.log("filter with arrow function");
var filteredScore = scores.filter(score => score>50)
filteredScore.forEach(s => console.log(s))

console.log("code for find");
var friends =[
    {
        name:"OBB",
        score:10
    },
    {
        name:"BNP",
        score:20
    },
    {
        name:"MOVA",
        score:22
    },
    {
        name:"Nika",
        score:17
    }
]
console.log("find with named function");
var foundFriend = friends.find(findMe)
function findMe(f){
    return f.score>20
}
console.log(foundFriend);
console.log("find with arrow function");
var foundFriend = friends.find(f => f.score>20)
console.log(foundFriend);
// some, every, reduce

console.log("code for reduce");
var scores = [10, 50,100,6,3,1,90,55,22,41,30]
var totalOfScores = scores.reduce(totalOfAll, 0)
function totalOfAll(t, iv){
    return t + iv
}
console.log("sum of all scores greater than and equal to 50");
var filteredTotal= scores
                .filter(score => score>=50)
                .reduce((onescore, iv=0) => onescore+iv)
console.log("Total of Scores: " + filteredTotal);

console.log("default function arguments");
var scores = [10, 50,100,6,3,1,90,55,22,41,30]
function sortScores(ary =[], order='ascending'){
    console.log("Array is: " + ary);
    console.log("Order is: " + order);
}
sortScores(scores)
sortScores(scores, 'descending')

console.log("code for spread operator");
var scores = [10, 50,100,6,3,1,90,55,22,41,30]
var copyOfScores = [...scores]
console.log(scores);
console.log(copyOfScores);
console.log(scores === copyOfScores);

console.log("code for merging arrays");
var scores1 = [10, 50,100,6,3,1]
var scores2 = [90,55,22,41,30]
var mergedArray = [...scores1, ...scores2]
console.log(mergedArray);
//rest
function displayScoresFromArray(first, second, third, ...others){
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
}
displayScoresFromArray(10, 50,100,6,3,1,90,55,22,41,30)