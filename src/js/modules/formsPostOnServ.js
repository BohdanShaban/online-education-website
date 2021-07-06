////////    FORMS  (L 7)     ///////////
// import {checkNOTCyrillicInputs, checkMailInputs} from './additional/checkTxtInputs';
// import {postData} from './services/requests';


export default class formsPostOnServ  {

    constructor() {
        this.formsArr = document.querySelectorAll('form');
        this.inputsArr = document.querySelectorAll('input');  // Only For:  Clear Form Inputs

        this.messages = {
            loading : 'Data is Loading...',
            success : 'Successfully Loaded !',
            error   : 'An Errrrror Ocured !!!!',
    
            spinnerGif : 'assets/img/spinner.gif',
            okImg      : 'assets/img/ok.png',
            failImg    : 'assets/img/fail.png'
        };
        this.path = 'assets/question.php';
    }


    clearAllInputs( ) {
        this.inputsArr.forEach( input => {
            input.value = ''; // Clear Form Inputs
        });
    }

    async postData( url, data) {
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await result.text();
    }

    checkNOTCyrillicInputs( selector) {
        const mailInputs = document.querySelectorAll(selector);
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    initMask( selector) {

        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };

        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
            //

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll(selector);
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }


    allFormsInit( ) {

        // ONLY NOT CYRYLIC INPUT OR NUMBS
        this.checkNOTCyrillicInputs('[type="email"]'); 

        //PHONE MASK
        this.initMask( '[name="phone"]' );

        this.formsArr.forEach( form => {

            form.addEventListener( 'submit', (e) => {  // !!! 'submit'  —>  e.preventDefault();
                e.preventDefault();
    
                // MESSAGE EL <div> CREATION
                let messageDiv = document.createElement('div');
                messageDiv.classList.add('status');  // css class in main.css
                // messageDiv.style.cssText = `
                //     margin-top: 15px;
                //     font-size: 18px;
                //     color: grey;
                // `;
                form.parentNode.appendChild(messageDiv);
                messageDiv.textContent = this.messages.loading;
                // Img
                let createdImg = document.createElement('img');
                createdImg.classList.add('animated', 'fadeInUp');
                messageDiv.appendChild(createdImg);
                createdImg.setAttribute('src', this.messages.spinnerGif);


                // MAKE FORM INVIS & DISAPEAR
                form.classList.add('animated', 'fadeOutUp'); // Invisible BUT Exists
                setTimeout( () => { form.style.display = 'none'; } , 400)
    
                // MAKE FormData OBJ
                const formData = new FormData(form);
    
                // POST Data (FormData Obj) On Server
                this.postData( this.path , formData)
                .then( res => {
                    console.log(res);
                    messageDiv.textContent = this.messages.success;
                    createdImg.setAttribute('src', this.messages.okImg)
                })
                .catch( () => { messageDiv.textContent = this.messages.error; createdImg.setAttribute('src', this.messages.failImg); })
                .finally( () => {
                    this.clearAllInputs();
                    setTimeout( () => {
                        messageDiv.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 3000);
                })
        
            })
        })
    }

    
    // mail@gmail.com
}