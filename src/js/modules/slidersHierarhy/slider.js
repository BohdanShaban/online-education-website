
export default class Slider {

    constructor( {containerSel = null, slidesSel = null, btnsSel = null, nextBtnSel = null, prevBtnSel = null,
                  activeClass = null, animate = false, autoPlay = false } = {}  ) {
        //

        this.container = document.querySelector(containerSel);

        this.slides = this.container.children;                      // !!! ret:  HTMLCollection(8)
        //this.slides = this.container.querySelectorAll(slidesSel); // !!! ret:  NodeList(8)

        this.btns = document.querySelectorAll(btnsSel);
        this.nextBtn = document.querySelector(nextBtnSel);
        this.prevBtn = document.querySelector(prevBtnSel);
        this.activeClass = activeClass; // !!! activeClass = null  NOT  = ''
        this.animate = animate; 
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    } 
}