

export default class educationDifferences {

    constructor( { oldContainerSel = null, newContainerSel = null, cardItemSel = null,
                   clickDivSel = null } = {} ) {
        //
        this.oldContainer = document.querySelector(oldContainerSel);
        this.newContainer = document.querySelector(newContainerSel);
        this.oldCards = this.oldContainer.querySelectorAll(cardItemSel);
        this.newCards = this.newContainer.querySelectorAll(cardItemSel);
        this.oldClickBtn = this.oldContainer.querySelector(clickDivSel);
        this.newClickBtn = this.newContainer.querySelector(clickDivSel);
    }
    

    hideCardsAndShowCard( ) {

        // HIDE ALL CARDS  !!! BUT !!!  NOT LAST
        this.oldCards.forEach( (oldCard, idx, arrPointer) => {
            
            if( idx !== arrPointer.length - 1) {  //  !!! arrPointer
                oldCard.style.display = 'none';
                oldCard.classList.add('animated');
            }
        });

        // HIDE ALL CARDS  !!! BUT !!!  NOT LAST
        this.newCards.forEach( (newCard, idx, arrPointer) => {  //  !!! arrPointer
            
            if( idx !== arrPointer.length - 1) {
                newCard.style.display = 'none';
                newCard.classList.add('animated');
            }  
        });

        // SHOW LAST CARDS (Old & New)
        // this.oldCards[this.oldCards.length - 1].style.display = 'flex';
        // this.oldCards[this.oldCards.length - 1].classList.add('fadeIn');
        // this.newCards[this.newCards.length - 1].style.display = 'flex';
        // this.newCards[this.newCards.length - 1].classList.add('fadeIn');
    }

    
    showCardsOneByOne( cardsArr, trigBtn) {
        // !!! NEED break
        for (let i = 0; i < cardsArr.length; i++) {
            let card = cardsArr[i];

            // CURRENT CARD IS HIDED
            if( card.style.display === 'none') {
                card.style.display = 'flex';
                card.classList.add('fadeIn');
                break;
            } 

            // FIRST 2 CARDS SHOWED 
            if( cardsArr[0].style.display === 'flex' && cardsArr[1].style.display === 'flex' ) {
                trigBtn.parentNode.parentNode.style.display = 'none'; // Hide Button
            }
        }
    }


    bindTriggers() {

        this.oldClickBtn.addEventListener( 'click', () => { 
            this.showCardsOneByOne( this.oldCards, this.oldClickBtn); 
        });
        this.newClickBtn.addEventListener( 'click', () => { 
            this.showCardsOneByOne( this.newCards, this.newClickBtn); 
        });
    }


    init() {
        this.hideCardsAndShowCard();
        this.bindTriggers();
    }
}