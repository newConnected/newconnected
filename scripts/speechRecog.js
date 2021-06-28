var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.interimResults = false;

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    var message = document.querySelector('#message');
    message.innerHTML = message.innerHTML + command
    var message2 = document.querySelector('#txtInput');
    message2.value = message.innerHTML
};

recognition.onspeechend = function() {
    recognition.stop();
    document.getElementById("btnGiveCommand").innerHTML = "Start talking."
};

recognition.onerror = function(event) {
    var message = document.querySelector('#message');
    message.innerHTML = 'Error occurred in recognition: ' + event.error;
    document.getElementById("btnGiveCommand").innerHTML = "Start talking."
}

function startListening() {
    language = chatProcess2()
    if (language == "English") {
        recognition.lang = 'en-US';
    }
    if (language == "Dutch") {
        recognition.lang = 'nl-NL';
    }
    if (language == "French") {
        recognition.lang = 'fr-FR';
    }
    if (language == "Deutch") {
        recognition.lang = 'de-DE';
    }
    recognition.start();
    document.getElementById("btnGiveCommand").innerHTML = "Please say something."
    var message = document.querySelector('#message');
    message.innerHTML = ''
}