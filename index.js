// Your code here

function mapToNegativize(sourceArray){
  let arrays =[]
  arrays = sourceArray.map(x=>x*-1);
  
  return arrays
}


function mapToNoChange(sourceArray){
    return sourceArray
  
}
function mapToDouble(sourceArray){
  let arrays =[]
  arrays = sourceArray.map(x=>x*2);
  return arrays
}
function mapToSquare(sourceArray){
  let arrays =[]
  arrays = sourceArray.map(x=>x*x);
  return arrays
}


function reduceToTotal(sourceArray,startingPoint){
  let arrays =[]
  
  arrays =sourceArray.reduce((a, b) => a + b, startingPoint)
  return arrays
}
function reduceToAllTrue(sourceArray){
  let arrays =[]
  
  arrays =sourceArray.reduce((a, b) => a + b, 0)
  return arrays
}
function reduceToAnyTrue(sourceArray){
  let arrays =[]
  return arrays
}