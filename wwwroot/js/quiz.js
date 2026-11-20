window.quizAudio = {
    play: async function () {
        const audio = document.getElementById("resultAudio");

        if (!audio) {
            return;
        }

        try {
            audio.currentTime = 0;
            audio.loop = false;
            await audio.play();
            console.log("Music plays!")
        } catch (error) {
            console.warn("Quiz music autoplay was blocked by the browser.", error);
        }
    }
};