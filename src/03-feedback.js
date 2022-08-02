import throttle from "lodash.throttle";

const FORM_STATE_KEY = "feedback-form-state";


const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form [name='email']" ),
    message: document.querySelector(".feedback-form [name='message']")
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

initForm();

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(localStorage.getItem(FORM_STATE_KEY));
    localStorage.removeItem(FORM_STATE_KEY);    
}

function onInput(evt){
    let savedData=localStorage.getItem(FORM_STATE_KEY);
    savedData=savedData ? JSON.parse(savedData) : {};    
    savedData[evt.target.name]=evt.target.value;
    localStorage.setItem(FORM_STATE_KEY,JSON.stringify(savedData));
}

function initForm(){
    let savedData=localStorage.getItem(FORM_STATE_KEY);
        
    if(savedData){
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value])=>{            
            refs.form.elements[name].value = value;
        });        
    }
}
