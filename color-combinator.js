const isValidPrimary = require("./is-valid-primary");

/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator(color1, color2){
  if (isValidPrimary(color1) && isValidPrimary(color2)){
    if ((color1 === "blue" && color2 === "yellow") || (color2 === "blue" && color1 === "yellow")){
      return "green"
    }else if ((color1 === "blue" && color2 === "red") || (color2 === "blue" && color1 === "red")){
      return "purple"
    }else if ((color1 === "yellow" && color2 === "red") || (color2 === "yellow" && color1 === "red")){
      return "orange"
    }
  }else{
  console.log("Please enter two valid primary colors.")
  }
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
