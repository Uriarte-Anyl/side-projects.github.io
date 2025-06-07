import { lyrics } from "./lyricsObs.js";
import { timing } from "./lyricsObs.js";

    
    const lyricsBox = document.getElementById("lyricsBox");
    let textDuration = 0;

    function displayOfLyrics() {

        lyrics.forEach((lyric, index) => {

        setTimeout(() => {

            lyricsBox.textContent += lyric.text + " ";

        }, textDuration);
        
        textDuration += lyric.textDelay + timing[index];

     });
    
    }

displayOfLyrics();
