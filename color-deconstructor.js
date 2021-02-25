/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(color){
    if (color === "orange"){
      return "red and yellow"
    }else if (color === "purple"){
      return"red and blue"
    }else if (color === "green"){
      return "blue and yellow"
    }else{
    console.log("Please enter a valid secondary color.")
  }
}



// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
