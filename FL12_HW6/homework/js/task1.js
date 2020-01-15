// Your code goes here
const a = +prompt ("Enter a", "");
const b = +prompt ("Enter b", "");
const c = +prompt ("Enter c", "");
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid input data")
}
else{
  const d = b*b-4*a*c
  console.log(`d=${d}`)
  if(d<0){
    console.log(`no solutio d=${Math.round(d)}`)
  }
  else if(d===0){
    const x=(-b)/(2*a)
  console.log(`the solution is one 
  d=${Math.round(d)} 
and 
  x=${Math.round(x)}`)
  }
  else if(d>0){
    const x1=(-b-Math.sqrt(d))/(2*a)
    const x2=(-b+Math.sqrt(d))/(2*a)
    console.log(`solution
       x1=${Math.round(x1)}
       x2=${Math.round(x2)}`)
  }
}
  

