function handler(){
    console.log(numOfGifters);
    buildParticipantForms(numOfGifters.value);
}

function buildParticipantForms(numOfForms) {
    hideSubmit();

    const formContent = document.getElementById('contactInfoForm');
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.innerHTML = 'Names: ';
    const numberLabel = document.createElement('label');
    numberLabel.htmlFor = 'phoneNum';
    numberLabel.innerHTML = 'Phone Numbers: ';
    for(let i = 0; i < numOfForms; i++){
        let nameForm = document.createElement('input');
        nameForm.classList.add('name');
        nameForm.id = 'name' + i;
        nameForm.name = 'name';
        nameForm.type = 'text';
        let numberForm = document.createElement('input');
        numberForm.classList.add('phoneNum');
        numberForm.id = 'phoneNum' + i;
        numberForm.name = 'phoneNum';
        numberForm.type = 'text';
        
        let spacing = document.createElement('br');

        formContent.appendChild(spacing);
        if(i === 0){
            formContent.appendChild(nameLabel);
            formContent.appendChild(document.createElement('label').innerHTML('&nbsp;'));
            formContent.appendChild(numberLabel);
            formContent.appendChild(spacing);
        }
        
        formContent.appendChild(nameForm);
        
        formContent.appendChild(numberForm);
    }

    const names = Array.from(document.querySelectorAll('.name'));
    names.forEach(name => name.addEventListener('', function(){
        console.log(name.value)
    }));
    const numbers = Array.from(document.querySelectorAll('.phoneNum'));    

    console.log()
}

function hideSubmit(){
    console.log(submitButton.getAttribute('disabled'));
    if(submitButton.getAttribute('disabled')){
        submitButton.disabled = false;
    }else {
        submitButton.disabled = true;
    }
}

const submitButton = document.getElementById('numOfGiftersButton');
const numOfGifters = document.getElementById('numOfGifters');

if(submitButton.getAttribute('disabled')){
    numOfGifters.addEventListener('change', hideSubmit());
}