import { useState, useEffect } from 'react';
import "../App.css";
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sound() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        // Initialize audio when component mounts
        const audioElement = new Audio('/bg.mp3');
        audioElement.loop = true;
        setAudio(audioElement);

        // Cleanup function to stop audio when component unmounts
        return () => {
            if (audioElement) {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
        };
    }, []);

    const playMusic = () => {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            // Create a promise to handle the play action
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Audio started playing successfully
                    })
                    .catch(error => {
                        console.log("Playback failed:", error);
                    });
            }
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="sound-section">
            <button className="soundbutton" onClick={playMusic}>
                <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} />
            </button>
        </section>
    );
}

export default Sound; 