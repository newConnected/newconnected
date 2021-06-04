optionsVisible = false

function chatProcess2() {
    message = document.getElementById("txtInput").value
    message = grammarFix(message)
    document.getElementById("langRecogOut").innerHTML = langRecog(message)
    return langRecog(message)
}
function langRecog(sentence) {
    dataIn = [
    "hello how are you I am great who are you sorry my name is",
    "hallo hoe gaat het met mij gaat het goed wie ben jij sorry mijn naam is",
    "bonjour ca va je vais bien je suis desole je m'appelle",
    "hallo wie geht's es dir mir geht es gut wer bist du es tut mir leid ich bin"]
    dataOut = [
    "English",
    "Dutch",
    "French",
    "Deutch"]
    values = [
    0,
    0,
    0,
    0]

    for (x = 0; x < dataIn.length; x++)
    {
        processIn = sentence.toLowerCase().split(" ");
        for (x_1 = 0; x_1 < processIn.length; x_1++) {
            if (processIn[x_1].includes("ç")) {
                processIn[x_1] = processIn[x_1].replace("ç", "c")
            }
            if (processIn[x_1].includes(".")) {
                processIn[x_1] = processIn[x_1].replace(".", "")
            }
            if (processIn[x_1].includes("?")) {
                processIn[x_1] = processIn[x_1].replace("?", "")
            }
            if (processIn[x_1].includes("!")) {
                processIn[x_1] = processIn[x_1].replace("!", "")
            }
        }
        processOut = dataIn[x].toLowerCase().split(" ");
        for (y = 0; y < processIn.length; y++)
        {
            wordExists = false
            for (z = 0; z < processOut.length; z++)
            {
                if (processIn[y] == processOut[z] && processIn[y] != " " && processIn[y] != "")
                {
                    values[x] = values[x] + 1;
                    wordExists = true
                }
            }
            for (z_1 = 0; z_1 < processOut.length; z_1++) {
                if (processOut[z_1].includes(processIn[z_1]) && wordExists == false) {
                    values[x] = values[x] + 0.5;
                }
            }
        }
    }
    m = Math.max(...values);
    p = values.indexOf(m);
    if (m == 0) {
        p = 0
    }
    if (dataOut[p] == "English") {
        document.getElementById("btnGiveCommand").innerHTML = "Please say something"
        document.getElementById("TTSButton").innerHTML = "Text to speech"
    }
    if (dataOut[p] == "Dutch") {
        document.getElementById("btnGiveCommand").innerHTML = "Zeg alstublieft iets"
        document.getElementById("TTSButton").innerHTML = "Tekst naar spraak"
    }
    if (dataOut[p] == "French") {
        document.getElementById("btnGiveCommand").innerHTML = "S'il te plait dis quelque chose"
        document.getElementById("TTSButton").innerHTML = "Texte pour parler"
    }
    if (dataOut[p] == "Deutch") {
        document.getElementById("btnGiveCommand").innerHTML = "Bitte sag was"
        document.getElementById("TTSButton").innerHTML = "Text zu Sprache"
    }
    return dataOut[p];
}

function selectedLanguage() {
    if (optionsVisible == false) {
        document.getElementById("langRecogOut").innerHTML = "select language"
        document.getElementById("options").style.display = "table"
        optionsVisible = true
    } else {
        document.getElementById("langRecogOut").innerHTML = "language: " + chatProcess2()
        document.getElementById("options").style.display = "none"
        optionsVisible = false
    }
}
