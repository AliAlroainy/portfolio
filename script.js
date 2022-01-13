function myFunction() {
    var x = document.getElementById("togl");
    if (x.className === "tog") {
      x.className += " togr";
    } else {
      x.className = "tog";
    }
  }



  var y = document.getElementsByClassName("work")[0];
  var d = document.getElementsByClassName("dtl")[0];


  if (y.style.hover=active){
      d.style.display=block;
  }