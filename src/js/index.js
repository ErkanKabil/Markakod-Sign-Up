import '../styles/main.scss'
import IMask from 'imask';
// WHEN PAGE LOAD
window.addEventListener('load', function() {
    inputsMask();   // INPUTS MASK
})

//  INPUTS MASK
function inputsMask() {
    const phoneMask = IMask( // PHONE MASK
        document.getElementById("phone"), {
        mask: '+9\\0 000 000 00 00',
        lazy: false,
        placeholderChar: ' '
    });
    const digitsMask = IMask( // NUMBER MASK => JUST DIGITS
        document.getElementById("number"), {
            mask: /^\d+$/
    });
}

// CHANGE NUMBER VISIBILITY 
const number = document.querySelector('#number');
document.getElementById("togglePassword").addEventListener('click', function (e) {
    const type = number.getAttribute('type') === 'password' ? 'text' : 'password';
    number.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


// FORM POST
var check=true;
document.getElementById("btn-submit").addEventListener('click',(event)=>{
    event.preventDefault();
    check=true
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const number = document.getElementById('number');

    // FORM VALIDATION
    document.querySelectorAll('.form-group input').forEach(element => {
        checkInput(element);
    });

    // SUBMIT CHECK
    if (check) {
        console.log("FORM SEND");
        document.getElementById("signup-form").submit(); // SUBMIT FORM
    }

});
// CHECK INPUTS
function checkInput(input) {
    // FOR PHONE INPUT CHECK
    if (input.type=="tel") {
        if (input.value.trim().length<17) {
            setErrorFor(input, 'Please enter your '+input.placeholder.toLowerCase()+'');
        } else {
            setSuccessFor(input);
        }
    }else { // FOR INPUTS CHECK
        if (input.value === '') {
            setErrorFor(input, 'Please enter your '+input.placeholder.toLowerCase()+'');
        } else {
            setSuccessFor(input);
        }
    }
    if (input.type=="email") { // FOR MAIL CHECK
        if (!isEmail(input.value)){
            setErrorFor(input, 'Please enter a valid email adress');
        }
    }
}

// SET SUCCESS FOR INPUTS WHEN INPUT
document.querySelectorAll('.form-group input').forEach(element => {
    element.addEventListener('input',function(e){
        setSuccessFor(this);
    })
});

// SET ERROR FOR INPUTS
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small=formControl.querySelector("small")  
    formControl.classList.add("error");
    small.innerText = message;
    check = false;
}
// SET SUCCESS FOR INPUTS
function setSuccessFor(input) {
    console.log("sdv");
    const formControl = input.parentElement;
    formControl.classList.remove("error");
 
}
// EMAİL CHECK
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
