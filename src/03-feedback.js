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

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_STATE_KEY);
}

function onInput(evt){
    formState.email=refs.email.value;
    formState.message=refs.message.value;
    localStorage.setItem(FORM_STATE_KEY,JSON.stringify(formState));
    console.log(localStorage.getItem(FORM_STATE_KEY));
}

