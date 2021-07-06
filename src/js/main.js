import SliderMain from './modules/slidersHierarhy/slider-main';
import PlayYouTubeVid from './modules/playYouTubeVid';
import SliderMini from './modules/slidersHierarhy/slider-mini';
import educationDifferences from './modules/educationDifferences';
import formsPostOnServ from './modules/formsPostOnServ';


window.addEventListener( 'DOMContentLoaded', () => {

    const mainSlider = new SliderMain( { containerSel:'.page', btnsSel:'.next'} );
    mainSlider.render();

    const playYouTubeVid = new PlayYouTubeVid( '.showup .play', '.overlay', '.overlay .close');
    playYouTubeVid.setPlayer();

    // MINI SLIDERS
    const showUpMiniSlider = new SliderMini( {  
        containerSel:'.showup__content-slider',
        slidesSel: 'a', // !!!
        nextBtnSel:'.showup__next',
        prevBtnSel:'.showup__prev',
        activeClass: 'card-active',
        animate: true // Change Slide Header/Arrow opasity = '1'
    } );
    showUpMiniSlider.init();

    const modulesMiniSlider = new SliderMini( { 
        containerSel:'.modules__content-slider',
        slidesSel: 'a',
        nextBtnSel:'.modules__info-btns .slick-next',
        prevBtnSel:'.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true, // Change Slide Header/Arrow opasity = '1'
        autoPlay: true
    } );
    modulesMiniSlider.init();

    const clientsFeedMiniSlider = new SliderMini( { 
        containerSel:'.feed__slider',
        slidesSel: '.feed__item',
        nextBtnSel:'.feed__slider .slick-next',
        prevBtnSel:'.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    } );
    clientsFeedMiniSlider.init();


    // DIFFERENCES BLOCK  ( Only in 1 Exemple )
    new educationDifferences( {
        oldContainerSel: '.officerold',
        newContainerSel: '.officernew',
        cardItemSel: '.officer__card-item',
        clickDivSel: '.officer__card-item .card__click .plus'
    }).init();

    new formsPostOnServ().allFormsInit();


});  // End of 'DOMContentLoaded'