
function myFunction(divid) {

  var x = document.getElementById(divid);  
  
  if (x.style.display == "block") 
  {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }  
}


function setColor(e) {
  var target = e.target,
      status = e.target.classList.contains('active');
  
  e.target.classList.add(status ? 'inactive' : 'active');
  e.target.classList.remove(status ? 'active' : 'inactive');
}

