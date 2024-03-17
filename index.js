// let studesnts = ["Saad","Hammad","Ahmed","Asad","Hassan"];
// studesnts[studesnts.length] = "Hussain";
// studesnts[2] = "Ali";
// studesnts[1] = "Abubakar";
// console.log(studesnts);


// Array push method
// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.push("Umer","Hammad") 
// console.log(studesnts)
// console.log(returnvale)


//Array pop method
// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale = studesnts.pop();
// console.log(studesnts);
// console.log(returnvale);


// Array unshift method
// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvalue = studesnts.unshift("Hammad");
// console.log(studesnts)
// console.log(returnvalue)


// Array shift method
// let studesnts = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvale =  studesnts.shift();
// console.log(returvalue)
// console.log(studesnts)


// Array slice method
// let students = ["Saad","Usman","Ahmed","Asad","Hassan"];
// let returnvalue = students.splice(2,0,"irshad" );
// console.log(students);
// console.log(returnvalue);

// Array splice method
// let students = ["Saad", "Usman", "Ahmed", "Asad", "Hassan"];
// let returnValue = students.splice(1, 0, "Irshad");
// console.log(students);
//  console.log(returnValue);




// let colours = ["red", "green","'blue'","black"]
// console.log(colours)
// colours.shift()


// let colours = ["red", "green","'blue'","black"]
// console.log(colours)
// let userinput = prompt("enter a first adding colour" )
// colours.unshift(userinput)
// console.log(colours)

// let colours = ["red", "green","'blue'","black"]
// console.log(colours)
// colours.pop()
// console.log(colours)

// let colours = ["red", "green","'blue'","black"]
// console.log(colours)
// let userinput = prompt("enter a last adding colour" )
// colours.push(userinput)
// console.log(colours)



// let colours = ["red", "green","'blue'","black"];
// console.log(colours);
// let userinput = prompt("");
// colours.splice(0,userinput,"blue","white");
// console.log(colours);


// let colours = ["red", "green","'blue'","black"];
// console.log(colours);
// let userinput = prompt("");
// colours.splice(0,userinput);
// console.log(colours);


let pragraph = prompt("ente a paragraph");
console.log(pragraph);
let wordcount = pragraph.split(" ");
console.log(wordcount.length);
if(pragraph <= 5 ){
    console.log(wordcount.length)
    console.log(wordcount)
}else(
    "Do not enter more then 5 words"
);



// let pragraph = prompt("ente a 5 words and change to paragraph");
// console.log(pragraph);
// let wordcount = pragraph.join(" ");
// console.log(wordcount);
