function formInput () {
 let yearOfBirth = document.getElementById("yearborn").value;
 let monthOfBirth = Number(document.getElementById("monthborn").value);
 let dayOfBirth = Number(document.getElementById("dayborn").value);
 let genders = document.getElementsByName("gender");

 // function to get gender
 function genderValue () {
   for (let gender of genders){
     if (gender.checked){
       return gender.value;
     }
   }
 }

 let myGender = genderValue();
 console.log(myGender);

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

 let monthValid = monthValidator();
 let dayValid = dayValidator();

 //formula to determine day
 let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
         ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

 //creating arrays of Akan names for males & females and days
 let daysOfWeek = [
   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
 ];

 let maleAkanNames = [
   "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
 ];

 let femaleAkanNames = [
   "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
 ];

 //generating and index value to select items on arrays
 let index;
 // fix formula bug
 if (dayOfWeekNumber == 0){
   index = 6;
 } else {
   index = dayOfWeekNumber - 1;
 }

 console.log(index);

 if (myGender == "male" && monthValid && dayValid) {
  document.getElementById('result').textContent = "Your Akan name is " + maleAkanNames[index];
  document.getElementById('result').style.fontSize = "25px";
  return false;
} else if (myGender == "female" && monthValid && dayValid) {
  document.getElementById('result').textContent = "Your Akan name is " + femaleAkanNames[index];
  document.getElementById('result').style.fontSize = "25px";
  return false;
} else {
  alert("You entered an invalid day or month, please try again");
}
}