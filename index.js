//Your Code here
let firstAnswer = window.prompt('Do you head left or right?')
//user selected left
if (firstAnswer === "left") {
    console.log("You selected left")
    let secondAnswer = window.prompt('Do you go to library or kitchen?')
    //user selected library
    if (secondAnswer === "library") {
        window.alert("You picked the right place! You win!")
    }
    //user selected kichen
    else if (secondAnswer === "kitchen") {
        window.alert("You are now stuck in the kitchen, sorry!")
    }
    //user selected anything else
    else {
        window.alert("Game over")
    }
}
//user selected right
else if (firstAnswer === "right") {
console.log("You selected right")
let secondAnswer = window.prompt('Do you go to forest or cave?')
//user selected forest
if (secondAnswer === "forest") {
    window.alert("You picked the right place! You win!")
}
//user selected cave
else if (secondAnswer === "cave") {
    window.alert("You are now stuck in the cave, sorry!")
}
//user selected anything else
else {
    window.alert("Game over")
}
}
//user selected anything else
else {
    window.alert("Game over")
}