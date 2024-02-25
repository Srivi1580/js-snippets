const allvalues=[];
function add(){
    
    const inputvalue= document.getElementById('in').value
    allvalues.push(inputvalue)
   // let list=`<li> ${inputvalue} </li>`
    
    console.log(inputvalue);
    looplist()

}
function looplist(){
list =` `;
for(i=0; i<allvalues.length;i++){
list=list+ `<li>${allvalues[i]} </li>`
}
document.getElementById('lis').innerHTML = list
}
