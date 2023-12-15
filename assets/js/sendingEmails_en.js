

//handilg sendin email
let firstName=document.getElementById("firstName");
let familyName=document.getElementById("familyName");
let Email=document.getElementById("Email");
let PhoneNumber=document.getElementById("PhoneNumber");
let Country_of_Residence=document.getElementById("Country_of_Residence");
let Nationality=document.getElementById("Nationality");
let StudyDestination=document.getElementById("StudyDestination");
let StudyLevel=document.getElementById("StudyLevel");
let Major=document.getElementById("Major");
let Are_you_sponsored_student=document.getElementById("Are_you_sponsored_student");
let errorMessages=document.querySelectorAll(".error-message");
let alertDiv=document.querySelector(".pop-up-alert-message");
let alertMessage=document.querySelector(".pop-up-alert-message .message");
let closeAlertMessageButton=document.querySelector(".pop-up-alert-message .close-alert");
let interval;
let submit_button=document.getElementById("submit_form");


//check the validity of first name
checkFirstName=()=>{
    if(firstName.value==""){

        errorMessages[0].textContent="this Field Is Required";
        return false;
    }
    else{
        errorMessages[0].textContent="";
        return true;
    }
}


//check the validity of  Last Name
checkfamilyName=()=>{
    if(familyName.value==""){

        errorMessages[1].textContent="this Field Is Required";
        return false;
    }
    else{
        errorMessages[1].textContent="";
        return true;
    }
   
}
//check the validity of email
checkEmail=()=>{
    if(Email.value==""){

        errorMessages[2].textContent="This is a required field";
        return false;
    }
    else if(!Email.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        errorMessages[2].textContent= "please enter a valid email ex:" +"example@domain.com";
        return false;
    }
    else{
        errorMessages[2].textContent="";

        return true;

    }
 
}



//check the validity of PhoneNumber
checkPhoneNumber=()=>{
    if(PhoneNumber.value==""){

        errorMessages[3].textContent="This is a required field";
        return false;
    }
    else if(!PhoneNumber.value.match(/^([0-9]){5,}$/)){
        errorMessages[3].textContent="Phone not valid";
        return false;
    }
    else{
        errorMessages[3].textContent="";

        return true;

    }
}
checkeCountry_of_Residence=()=>{
    if(Country_of_Residence.value==""){

        errorMessages[4].textContent="this Field Is Required";
        return false;
    }
 
    else{
        errorMessages[4].textContent="";

        return true;

    }
}

checkNationality=()=>{
    if(Nationality.value==""){

        errorMessages[5].textContent="this Field Is Required";
        return false;
    }
  
    else{
        errorMessages[5].textContent="";

        return true;

    }

}
checkStudyDestination=()=>{
    if(StudyDestination.value==""){

        errorMessages[6].textContent="this Field Is Required";
        return false;
    }
  
  
    else{
        errorMessages[6].textContent="";

        return true;

    }
}
checkStudyLevel=()=>{
    if(StudyLevel.value==""){

        errorMessages[7].textContent="this Field Is Required";
        return false;
    }
  
  
    else{
        errorMessages[7].textContent="";

        return true;

    }
}
checkMajor=()=>{
    if(Major.value==""){

        errorMessages[8].textContent="this Field Is Required";
        return false;
    }
  
    else{
        errorMessages[8].textContent="";

        return true;

    }
}
checkAre_you_sponsored_student=()=>{
    if(Are_you_sponsored_student.value==""){

        errorMessages[9].textContent="this Field Is Required";
        return false;
    }
  
    else{
        errorMessages[9].textContent="";

        return true;

    }
}



submit_button.addEventListener("click",(e)=>{
    e.preventDefault();
    
    checkFirstName();
    checkfamilyName();
    checkEmail();
    checkPhoneNumber();
    checkeCountry_of_Residence();
    checkNationality();
    checkStudyDestination();
    checkStudyLevel();
    checkMajor();
    checkAre_you_sponsored_student();


    if(checkFirstName()&&checkfamilyName()&&checkEmail() &&checkPhoneNumber()&&checkeCountry_of_Residence()&&checkNationality()&&checkStudyDestination()&&checkStudyLevel()&&checkAre_you_sponsored_student()&&checkMajor()){
        submit_button.disabled = true;
        submit_button.innerHTML=`<div class="animation"><span></span><span></span><span></span></div>`;

        let date=new Date().getTime();
        if(localStorage.getItem("lastTimeSendingMessage")){
             if(date-localStorage.getItem("lastTimeSendingMessage")>3600000){
                   
                sendEmail();
                localStorage.setItem("lastTimeSendingMessage",date);

                


             }
             else{
                alertDiv.classList.add("error","active")
                alertMessage.innerHTML=`<img src="assets/images/error.webp" loading="lazy" alt=""><span >Sorry, this data already exists</span>`;
                submit_button.innerHTML="Register Now";
                submit_button.disabled = false;


               interval= setTimeout(()=>{
                    alertDiv.classList.remove("active","error");


                },5000);
             }
            
        }
        else{
          
            sendEmail();
          
            localStorage.setItem("lastTimeSendingMessage",date);

            
        }
    }
   

   
    
});    

//sending mails using emailjs

function sendEmail(){
    (function(){
        emailjs.init("hEtCYjZ259IpCwbyR");
    })();
    let serviceID="service_xfunm25";//email service id
    let templateID="template_zp91wh7";//email template id 
    let params={
        firstName:firstName.value,
        familyName:familyName.value,
        Email:Email.value,
        PhoneNumber:PhoneNumber.value,
        Country_of_Residence:Country_of_Residence.value,
        Nationality:Nationality.value,
        StudyDestination:StudyDestination.options[StudyDestination.selectedIndex].text,
        StudyLevel:StudyLevel.options[StudyLevel.selectedIndex].text,
        Major:Major.value,
        Are_you_sponsored_student:Are_you_sponsored_student.options[Are_you_sponsored_student.selectedIndex].text,


    }

    emailjs.send(serviceID,templateID,params)
    .then(function() {
        alertDiv.classList.add("success","active");
        alertMessage.innerHTML=`<img src="assets/images/success.webp" loading="lazy" alt=""><span >Your data  sent successfully</span>`;
        submit_button.disabled = false;
        submit_button.innerHTML="Register Now";


        interval=setTimeout(()=>{
          
            alertDiv.classList.remove("active","success");



        },5000);
    }, function(error) {
        alertDiv.classList.add("error","active")
        alertMessage.innerHTML=`<img src="assets/images/error.webp" loading="lazy" alt=""><span >Sorry we can not send your data</span>`;
       interval= setTimeout(()=>{
        alertDiv.classList.remove("active","error");



        },5000);
    });


}

//close alert message when click on close btn
closeAlertMessageButton.addEventListener("click",function(){
    alertDiv.classList.remove("active")
    clearInterval(interval);

});
