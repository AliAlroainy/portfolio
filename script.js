function myFunction() {
    var x = document.getElementById("togl");
    if (x.className === "tog") {
      x.className += " togr";
    } else {
      x.className = "tog";
    }
  }

 function dmmMk(){

    document.getElementById("dtll").style.display = "block";
    
     
 // background-color: rgba(0, 0, 0, 0.246);
 }

 function dmk(){

    document.getElementById("dtll").style.display = "none";
    
     
 // background-color: rgba(0, 0, 0, 0.246);
 }

 function lightMood(){

    var y = document.body;
    
        if (y){
            y.style.backgroundColor = "#444";
        }
    
        

        else 
        {
            y.style.backgroundColor = "#333";
        
        }
 }


 /////////// ///////////////////////// form

 var firstName = document.getElementById("fname");

var firstNameValidation = function () {
  firstNameValue = firstName.value.trim();
  validFirstName = /^[A-Za-z]+$/;
  firstNameErr = document.getElementById("fname-err");

  if (firstNameValue == "") {
    firstNameErr.innerHTML = " Name is required";
  } else if (!validFirstName.test(firstNameValue)) {
    firstNameErr.innerHTML = " Name must be only string without white spaces";
  } else if (firstNameValue.length > 10 || firstNameValue.length < 3) {
    firstNameErr.innerHTML =
      " Name must be  string more than 3 and less than 10";
  } else {
    firstNameErr.innerHTML = "";
    return true;
  }
};


firstName.oninput = function () {
    firstNameValidation();
  };

  /// last name 

  var lastName = document.getElementById("lname");

var lastNameValidation = function () {
  lastNameValue = lastName.value.trim();
  validlastName = /^[A-Za-z]+$/;
  lastNameErr = document.getElementById("lname-err");

  if (lastNameValue == "") {
    lastNameErr.innerHTML = " last Name is required";
  } else if (!validlastName.test(lastNameValue)) {
    lastNameErr.innerHTML = " last Name must be only string without white spaces";
  } else if (lastNameValue.length > 10 || lastNameValue.length < 3) {
    lastNameErr.innerHTML =
      " last Name must be  string more than 3 and less than 10";
  } else {
    lastNameErr.innerHTML = "";
    return true;
  }
};


lastName.oninput = function () {
    lastNameValidation();
  };


 ///  messege -

 var masseg = document.getElementById("subject");

var massegValidation = function () {
  massegValue = masseg.value.trim();
  validmasseg = /^[A-Za-z]+$/;
  massegErr = document.getElementById("subject-err");

  if (massegValue == "") {
    massegErr.innerHTML = " last Name is required";
  } else if (!validmasseg.test(massegValue)) {
    massegErr.innerHTML = " last Name must be only string without white spaces";
  } else if (massegValue.length > 300 || massegValue.length < 3) {
    massegErr.innerHTML =
      " last Name must be  string more than 3 and less than 10";
  } else {
    massegErr.innerHTML = "";
    return true;
  }
};


masseg.oninput = function () {
    massegValidation();
  };

