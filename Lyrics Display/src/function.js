import { lyrics } from "./lyricsObs.js";
// import { timings } from "./lyricsObs.js";

    
    const lyricsBox = document.getElementById("lyricsBox");
    const icarus = document.getElementById("icarus");
    let hasStartedFrom215 = false;
    let lyricsStarted = false;
    let textDuration = 0;

    function displayOfLyrics() {

        lyrics.forEach((lyric) => {

            setTimeout(() => {

            lyricsBox.textContent += lyric.text + " ";

            }, textDuration);
        
               textDuration += lyric.textDelay;
        });
    
    }

    btn.addEventListener("click", function(){

        const audio = document.getElementById('audio');
        
        
        if (audio.paused) {
            
             if (!hasStartedFrom215) {
                audio.currentTime = 216;
                hasStartedFrom215 = true;
            }

                icarus.classList.add("animate");
            
                audio.play();
            

            if (!lyricsStarted) {
                lyricsStarted = true;
                displayOfLyrics();
            }

         }

    });
