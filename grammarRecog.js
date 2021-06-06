function fixGrammar() {
    var input = document.getElementById("txtInput").value
    var output = document.getElementById("grammarRecog")
    language = chatProcess2()
    if (language == "English") {
        languageUsing = 0
    }
    if (language == "Dutch") {
        languageUsing = 1
    }
    if (language == "French") {
        languageUsing = 2
    }
    if (language == "Deutch") {
        languageUsing = 3
    }
    Out = fixLanguage(input, languageUsing)
    if (input == ""){
        output.value = ""
    } else {
        output.value = Out  
    }
    addEmotion()
}

function fixLanguage(sentence, languageUse) {
    sentenceStructure = 0
    sentenceWords = grammarFix(sentence.toLowerCase())
    sentenceWords = sentenceWords.split(" ")
    structureSentence = sentence.split(" ")
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
    if (languageUse == 0) {
        questionWords = ["what", "how", "can", "when", "who", "why"]

        while (sentence.includes(";")) {
            sentence = sentence.replace(";", ",")
        }
        for (a = 0; a < sentenceWords.length; a++) {
            for (b = 0; b < sentence.length; b++) {
                if (sentence[b] == "." || sentence[b] == "?" || sentence[b] == "!") {
                    sentence = sentence.slice(0, b + 2) + sentence.charAt(b + 2).toUpperCase() + sentence.slice(b + 3)
                    sentenceStructure = 0
                }
            }
            for (c = 0; c < questionWords.length; c++) {
                if (sentenceWords[a] == questionWords[c]) {
                    sentenceStructure = 1
                    //question
                }
            }
            if (sentence.includes("hru")  && sentenceWords[a] == "hru") {
                sentence = sentence.replace("hru", "how are you")
                sentenceStructure = 1
                //question
            }
            if (sentence.includes("what's") && sentenceWords[a] == "what's") {
                sentence = sentence.replace("what's", "what is")
                sentenceStructure = 1
                //question
            }
            if (sentence.includes("asap") && sentenceWords[a] == "asap") {
                sentence = sentence.replace("asap", "as soon as possible")
            }
            if (sentence.includes("am") && sentenceWords[a] == "am" && !sentence.includes("i am") && !sentence.includes("I am")) {
                sentence = sentence.replace("am", "before midday")
            }
            if (sentence.includes("pm") && sentenceWords[a] == "pm") {
                sentence = sentence.replace("pm", "after midday")
            }
            if (sentence.includes("lmk") && sentenceWords[a] == "lmk") {
                sentence = sentence.replace("lmk", "let me know")
            }
            if (sentence.includes("brb") && sentenceWords[a] == "brb") {
                sentence = sentence.replace("brb", "be right back")
            }
            if (sentence.includes("tba") && sentenceWords[a] == "tba") {
                sentence = sentence.replace("tba", "to be announced")
            }
            if (sentence.includes("tbc") && sentenceWords[a] == "tbc") {
                sentence = sentence.replace("tbc", "to be confirmed")
            }
            if (sentence.includes("it's") && sentenceWords[a] == "it's") {
                sentence = sentence.replace("it's", "it is")
            }
            if (sentence.includes("alot") && sentenceWords[a] == "alot") {
                sentence = sentence.replace("alot", "a lot")
            }
            if (sentence.includes("btw") && sentenceWords[a] == "btw") {
                sentence = sentence.replace("btw", "by the way")
            }
            if (sentence.includes("afk") && sentenceWords[a] == "afk") {
                sentence = sentence.replace("afk", "away from keyboard")
            }
            if (sentence.includes("i'm") && sentenceWords[a] == "i'm") {
                sentence = sentence.replace("i'm", "I am")
            }
            if (sentence.includes("i'm") && sentenceWords[a] == "i'm") {
                sentence = sentence.replace("i'm", "I am")
            }
            if (sentence.includes("il") && sentenceWords[a] == "il") {
                sentence = sentence.replace("il", "I will")
            }
            if (sentence.includes("rn") && sentenceWords[a] == "rn") {
                sentence = sentence.replace("rn", "right now")
            }
            if (sentence.includes("i") && sentenceWords[a] == "i") {
                sentence = sentence.replace(" i ", " I ")
            }
        }
    }
    if (languageUse == 1) {
        questionWords = ["wat", "hoe", "waneer", "wie", "waarom"]
        abbrevations = [
            ["aub", "alstublieft"],
            ["ajb", "alstjeblieft"],
            ["abn", "algemeen beschaaft nederlands"],
            ["nap", "normaal amsterdams peil"],
            ["mnu", "maakt niet uit"]
        ]

        for (a = 0; a < sentenceWords.length; a++) {
            for (b = 0; b < sentence.length; b++) {
                if (sentence[b] == "." || sentence[b] == "?" || sentence[b] == "!") {
                    sentence = sentence.slice(0, b + 2) + sentence.charAt(b + 2).toUpperCase() + sentence.slice(b + 3)
                    sentenceStructure = 0
                }
            }
            for (c = 0; c < questionWords.length; c++) {
                if (sentenceWords[a] == questionWords[c]) {
                    sentenceStructure = 1
                    //question
                }
            }
            for (c = 0; c < abbrevations.length; c++) {
                if (sentence.includes(abbrevations[c][0]) && sentenceWords[a] == abbrevations[c][0]) {
                    sentence = sentence.replace(abbrevations[c][0], abbrevations[c][1])
                }
            }
        }
    }
    if (sentence.charAt(sentence.length - 1) != "." && sentence.charAt(sentence.length - 1) != "!" && sentence.charAt(sentence.length - 1) != "?") {
        if (sentenceStructure == 1) {
            sentence = sentence + "?"
        } else {
            sentence = sentence + "."
        }
    } else {
        console.log(sentence.charAt(sentence.length - 1))
    }
    return sentence
}

function grammarFix(sentence) {
    while (sentence.includes("?")) {
        sentence = sentence.replace("?", "")
    }
    while (sentence.includes("!")) {
        sentence = sentence.replace("!", "")
    }
    while (sentence.includes(".")) {
        sentence = sentence.replace(".", "")
    }
    while (sentence.includes('"')) {
        sentence = sentence.replace('"', '')
    }
    while (sentence.includes(',')) {
        sentence = sentence.replace(',', '')
    }
    return sentence
}
