function getAkanName () {
 let yearOfBirth = document.getElementById("yearBorn").value;
 let monthOfBirth = Number(document.getElementById("monthBorn").value);
 let dayOfBirth = Number(document.getElementById("dayBorn").value);
 let genders = document.getElementsByName("gender");

   // function to get gender
   function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }