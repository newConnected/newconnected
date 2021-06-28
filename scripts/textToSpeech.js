function TTSSpeak() {
    if ('speechSynthesis' in window) {
        var tts = window.speechSynthesis;
        var toSpeak = new SpeechSynthesisUtterance();
        language = chatProcess2()
        if (language == "English") {
            toSpeak.lang = 'en-US';
        }
        if (language == "Dutch") {
            toSpeak.lang = 'nl-NL';
        }
        if (language == "French") {
            toSpeak.lang = 'fr-FR';
        }
        if (language == "Deutch") {
            toSpeak.lang = 'de-DE';
        }
        toSpeak.text = document.getElementById("txtInput").value
        tts.speak(toSpeak);
    }else{
        alert("Sorry, your browser doesn't support the speech synthesis API!");
    }
}
