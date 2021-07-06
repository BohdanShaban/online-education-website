import Slider from './slider';

export default class SliderMain extends Slider {

    constructor( containerSel, btnsSel ){
        super( containerSel, btnsSel );
        
        // ************************** //
        this.slideIndex = 4;
    }
    
    
    
    showSlides(n) {

        // BOUNDARIES
        if (n > this.slides.length) { this.slideIndex = 1; }
        if (n < 1) { this.slideIndex = this.slides.length; }

        // SHOW BLOCK IN 3 SECS
        if( this.slideIndex == 3) {
            const showBlock = this.slides[this.slideIndex - 1].querySelector('.hanson');
            showBlock.classList.add('animated');
            showBlock.style.opacity = '0';
            showBlock.classList.remove('slideInUp');

            setTimeout( () => {
                showBlock.style.opacity = '1';
                showBlock.classList.add('slideInUp');
            }, 3000)
        } 

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                console.log('Clicked !!!');
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}