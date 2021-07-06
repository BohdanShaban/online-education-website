
const checkCyrillicOnlyInputs = (selector) => {

    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
}


const checkNOTCyrillicInputs = (selector) => {

    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {

            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) { // !!!
                e.preventDefault();
            }
        });
    });
}

function checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                e.preventDefault();
            }
        });
    });
}


export { checkCyrillicOnlyInputs, checkNOTCyrillicInputs, checkMailInputs };