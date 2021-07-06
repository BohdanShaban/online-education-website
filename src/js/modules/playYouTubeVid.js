
export default class PlayYouTubeVid {

    constructor(trigsBtnsSel, modalWindSel, closeBtnSel) {
        this.trigsBtns = document.querySelectorAll(trigsBtnsSel);
        this.modalWind = document.querySelector(modalWindSel);
        this.closeBtn = document.querySelector(closeBtnSel);
    }


    youTubePlayerInit() {
        // 2. This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    createYouTubePlayer(url) {

        this.youTubePlayerInit();
        // 3. This function creates an <iframe> (and YouTube player)

        this.player = new YT.Player( 'frame', {  // !!! 'frame' -> Uniq Id -> <div id='frame'></div>
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });

        this.modalWind.style.display = 'flex';
    }

    bindTrigBtns() {
        this.trigsBtns.forEach( btn => {
            btn.addEventListener( 'click', () => {
                // IF( Created Framy By YouTube Exists Already)
                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }
            })
        })
    }

    bindCloseBtn() {
        this.closeBtn.addEventListener( 'click', () => {
            this.modalWind.style.display = 'none';
            this.player.stopVideo();
        })
    }


    // MAIN FUNCTION 
    setPlayer() {

        this.bindTrigBtns();
        this.bindCloseBtn();
    }
}