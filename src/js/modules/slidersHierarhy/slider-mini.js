import Slider from './slider';

export default class SliderMini extends Slider {

    constructor( containerSel, nextBtnSel, prevBtnSel, activeClass, animate, autoPlay ) {
        
        super( containerSel, nextBtnSel, prevBtnSel, activeClass, animate, autoPlay );
        this.intervalId;
    }  


    decorizeSlides() {

        this.slides.forEach( slide => {

            slide.classList.remove(this.activeClass);

            //Make INVISIBLE ALL Titles & Arrows
            if( this.animate ) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        // WORK WITH 1-st SLIDE:  ->  !!! IF( Its NOT But)
        if( !this.slides[0].closest('button')) { this.slides[0].classList.add(this.activeClass); }
        
        // Make VISIBLE Title & Arrow 
        if( this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        // IF( Sec El == Button -> Sec & Third Elms  Becomes Last)
        if( this.slides[1].nodeName === 'BUTTON' ) { 
            this.container.appendChild( this.slides[1] ); 
            this.container.appendChild( this.slides[1] );
        }
        this.container.appendChild( this.slides[0] );
        this.decorizeSlides();
    }

    // SLIDES TRANSITION LOGIC: NextBtn -> First Slide becomes Last & PrevBtn -> Last Sld becomes First
    bindTrigsBtns() {

        this.nextBtn.addEventListener( 'click', () => { 

            // STOP TIMER 
            clearInterval(this.intervalId);

            // Next Slide f()
            this.nextSlide();
        });

        this.prevBtn.addEventListener( 'click', () => {
            let lastSlide = this.slides[this.slides.length-1]; // !!! slides.length-1

            // IF( Last El == Butt —> Last & Sec Last Elms  Becomes Firs
            if( lastSlide.nodeName === 'BUTTON') { 

                this.container.insertBefore(lastSlide, this.slides[0]); 
                lastSlide = this.slides[this.slides.length-1];
                
                this.container.insertBefore(lastSlide, this.slides[0]); 
                lastSlide = this.slides[this.slides.length-1];
            }

            this.container.insertBefore(lastSlide, this.slides[0] ); // !!!
            this.decorizeSlides();
        });
    }

    autoPlaySlider( mSecs) {
        this.intervalId = setInterval( () => this.nextSlide() , mSecs)
    }

    init() {

        // !!! Use Dev Console to Dynamicaly Change the Css Props
        this.container.style.cssText = ` 
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTrigsBtns();
        this.decorizeSlides();
        if (this.autoPlay) { this.autoPlaySlider(3000); }
    }
}