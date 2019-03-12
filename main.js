
//create a constructor fucntion for objection creation
function nameList(first,last ) {
       this.firstName=first.toString();
       this.lastName=last.toString();
}

let sampleList=[];

window.onload=function(){
  let L=sampleList.length-1;
  document.getElementById('firstName').value=sampleList[L].firstName;
  document.getElementById('lastName').value=sampleList[L].lastName;
}

function myFunction(){
  let firstNameInput=document.getElementById('firstName');
  let lastNameInput=document.getElementById('lastName');
    if (firstNameInput.value===""||lastNameInput.value===""){
      return document.getElementById("demo").innerHTML="error: please type in your name";
    }
    let sample=new nameList(firstNameInput.value,lastNameInput.value);
    sampleList.push(sample);
    console.log(sampleList);
    var fs = require('fs');
    fs.writeFile('data.json', JSON.stringify(sampleList), 'utf8', callback);
  
    return document.getElementById("demo").innerHTML=JSON.stringify(sampleList);
     
}
// console.log(sampleList);
function removeName(){
  document.getElementById('firstName').value="";
  document.getElementById('lastName').value="";
}

//local storage
(function() {
    
  // Grab the textarea
  var demo = document.querySelector('.demo');
  
  // localStorage feature detect
  function supportsLocalStorage() {
    return typeof(Storage)!== 'undefined';
  }
  
  // Run the detection with inverted expression
  if (!supportsLocalStorage()) {
  
    // Change the value to inform the user of no support
    demo.value = 'No HTML5 localStorage support, soz.';
    
  } else {
  
    // Try this
    try {
    
      // Set the interval and autosave every second
      setInterval(function() {
        localStorage.setItem('autosave', JSON.stringify(sampleList));
      }, 1000);

    } catch (e) {
    
      // If any errors, catch and alert the user
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!');
      }
    }
    
    // If there is data available
    if (localStorage.getItem('autosave')) {
    
      // Retrieve the item
      sampleList = JSON.parse(localStorage.getItem('autosave'));
      
    }
   
   
    // document.getElementById('clear').onclick =(function() {
    //   console.log(document.getElementById("clearName"));
    // //  localStorage.removeItem('autosave');
    //  return sampleList=[];
    // })();

   
  }      
  
})();

function emptyFunction() {
  sampleList=[];
  console.log(sampleList);
}

