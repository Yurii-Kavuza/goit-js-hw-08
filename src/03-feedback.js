import throttle from "lodash.throttle";

const FORM_STATE_KEY = "feedback-form-state";
const formState = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form [name='email']" ),
    message: document.querySelector(".feedback-form [name='message']")
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateForm();

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_STATE_KEY);
}

function onInput(evt){
    formState[evt.target.name]=evt.target.value;
    localStorage.setItem(FORM_STATE_KEY,JSON.stringify(formState));
}

function populateForm(){
    const savedData=localStorage.getItem(FORM_STATE_KEY);
    
    if(savedData){
        const parsedData = JSON.parse(savedData);
        refs.email.value=parsedData.email;
        refs.message.value=parsedData.message;
    }
}