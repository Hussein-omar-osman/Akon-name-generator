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

  let myGenderValue = getGender();
  console.log(myGenderValue);

  // validation functions
  function monthValidator () {
   if (monthOfBirth < 1 || monthOfBirth > 12) {
     return false;
   } else {
     return true;
   }
 }

 function dayValidator () {
   if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
     if (dayOfBirth > 28 || dayOfBirth < 1) {
       return false;
     } else if (monthOfBirth === 2 && dayOfBirth > 29) {
       return false;
     } else if (monthOfBirth === 2 && dayOfBirth < 1) {
       return false;
     } else {
       return true;
     }
   } else if (dayOfBirth < 1 || dayOfBirth > 31){
     return false;
   } else {
     return true;
   }
 }

 