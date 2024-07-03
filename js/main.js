 let hasToken = localStorage.getItem('token');
 let loginInputs = document.querySelectorAll("user_control");
 let button = document.getElementById('submitButton')
 let  userObject = {};

 loginInputs.forEach((field)=>{
    field.addEventListener('keyup' , (event) => {
        const {name , value} = event.target;
        userObject[name]= value;

        console.log(userObject);
        event.preventDefault();
        
    })
 })

 button.addEventListener('click', () => {

  localStorage.setItem("token",userObject)
 });

 let authenticity_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"