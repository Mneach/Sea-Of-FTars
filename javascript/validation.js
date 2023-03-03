let create_button = document.getElementById('create-button');
let errorMessageElement = document.getElementById('error-message');
let successMessageElement = document.getElementById('success-message');
let usernameElement = document.getElementById('username');
let countryElement = document.getElementById('country');
let emailElement = document.getElementById('email');
let passwordElement = document.getElementById('password');
let checkboxElement = document.getElementById('checkbox');

function submit_form(event) {
    event.preventDefault();
    let username = usernameElement.value;
    let country = countryElement.value;
    let email = emailElement.value;
    let password = passwordElement.value;
    let checkbox = checkboxElement.checked;

    console.log(username);

    if (username.length < 5) {
        show_error_message(
            'Username must be more than 5 characters',
            usernameElement
        );
    } else if (country === '') {
        show_error_message('Please input your country', countryElement);
        changeSuccessBorder(usernameElement);
    } else if (emailValidation(email) != '') {
        show_error_message(emailValidation(email), emailElement);
        changeSuccessBorder(usernameElement);
        changeSuccessBorder(countryElement);
    } else if (checkAlphanumberic(password) == false) {
        show_error_message('Passowrd must be alphanumberic', passwordElement);
        changeSuccessBorder(usernameElement);
        changeSuccessBorder(countryElement);
        changeSuccessBorder(emailElement);
    } else if (checkbox == false) {
        show_error_message('must aggree terms and condition', checkboxElement);
        changeSuccessBorder(usernameElement);
        changeSuccessBorder(countryElement);
        changeSuccessBorder(emailElement);
        changeSuccessBorder(passwordElement);
    } else {
        show_success_message();
        resetForm();
    }
}

let show_success_message = () => {
    successMessageElement.style.top = '15%';
    successMessageElement.innerHTML = 'Account registered successfully';
    setTimeout(() => {
        successMessageElement.style.top = '-10%';
    }, 2000);
};

let show_error_message = (errorMessage, currentErrorElement) => {
    errorMessageElement.style.top = '15%';
    currentErrorElement.style.border = '2px solid var(--border-error-color)';
    errorMessageElement.innerHTML = errorMessage;
    resetMessage(currentErrorElement);
};

let resetMessage = (currentErrorElement) => {
    setTimeout(() => {
        errorMessageElement.style.top = '-15%';
        currentErrorElement.style.border = '1px solid var(--border-color)';
    }, 2000);
};

let emailValidation = (email) => {
    if (email.length === 0) {
        return 'Email cannot be empty';
    } else if (email.includes('@') == false) {
        return 'Email must contain @ character';
    } else if (email.endsWith('.com') == false) {
        return 'Email must ends with .com';
    } else {
        return '';
    }
};

let checkAlphanumberic = (password) => {
    let checkNumberic = false;
    let checkCharacter = false;

    for (let index = 0; index < password.length; index++) {
        let character = password.charAt(index);
        if (
            (character >= 'A' && character <= 'Z') ||
            (character >= 'a' && character <= 'z')
        )
            checkCharacter = true;
        if (character >= '0' && character <= '9') checkNumberic = true;
    }
    console.log(checkCharacter, checkNumberic);
    return checkNumberic && checkCharacter;
};

let changeSuccessBorder = (element) => {
    element.style.border = '2px solid var(--border-success-color)';
};

create_button.addEventListener('click', submit_form);

let resetForm = () => {
    usernameElement.value = '';
    countryElement.selectedIndex = 0;
    emailElement.value = '';
    passwordElement.value = '';
    checkboxElement.checked = false;
    usernameElement.style.border = '1px solid var(--border-color)';
    countryElement.style.border = '1px solid var(--border-color)';
    emailElement.style.border = '1px solid var(--border-color)';
    passwordElement.style.border = '1px solid var(--border-color)';
};
