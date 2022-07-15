
document.addEventListener('click', function(e) {
  clear(e);
});

function clear(e){
  document.getElementsByTagName("body")[0].style.setProperty("overFlow", "auto", "important");
  if(e.target.id){
    //console.log("ID : " + e.target.id);
    var id = document.getElementById(e.target.id);
    id.style.setProperty("display", "none", "important");
  }
  else{
    console.log("Class : " + e.target.className);
    var className = document.getElementsByClassName(e.target.className);
    //className.style.setProperty("display", "none", "important");
  }
}
