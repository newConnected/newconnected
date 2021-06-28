languageUsing = 0

function chatProcess() {
    fixGrammar()
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
    message = document.getElementById("txtInput").value
    document.getElementById("chatBotOut").innerHTML = chatBot(message)
    savedData = saveData(message)

}
function chatBot(sentence) {
    dataIn = [
    ["hi hello", "hoi hallo", "salut bonjour", "hallo"],
    ["how are you", "hoe gaat het", "ca va", "wie geht's es dir"],
    ["what is newConnected", "wat is newConnected", "gu'est-ce que newConnected", "was its newConnected"],
    ["who are you", "wie ben jij", "qui es-tu", "wer bist du"],
    ["who made newConnected", "wie heeft newConnected gemaakt", "qui a fait newConnected", "Wer hat newConnected gemacht"],
    ["how is newConnected helping people", "hoe helpt newConnected mensen", "comment est newConnected aider les gens", 
    "Wie hilft newConnected Menschen?"],
    ["hey hi    ", "hey hoi    ", "salut    ", "hallo    "]]
    dataOut = [
    ["Hey!",  "Hey!", "Salut!", "Hallo!"],
    ["I am great!", "Met mij gaat het goed!", "Je vais bien!", "Mir geht es gut!"],
    ["NewConnected is a project to help people.", "NewConnected is een project om mensen te helpen.", 
    "newConnected est un projet pour aider les gens", "NewConnected ist ein Projekt, um Menschen zu helfen"],
    ["I am the Chatbot made by newConnected.", "Ik ben de chatbot van newConnected.", 
    "je suis le chatbot de newConnected", "Ich bin der Chatbot von newConnected"],
    ["NewConnected is made by Orange and Chase Harper.", "NewConnected is gemaakt door Orange en Chase Harper.", 
    "NewConnected est fabriqué par Orange et Chase Harper.", "NewConnected wurde von Orange und Chase Harper erstellt"],
    ["NewConnected is made to give people a voice when they can't use thier voice.", 
    "NewConnected is gemaakt om mensen die het moeilijk hebben met communiceren te laten communiceren.",
    "NewConnected est fait pour aider les gens à communiquer", 
    "NewConnected wurde entwickelt, um Menschen mit Kommunikationsschwierigkeiten die Kommunikation zu ermöglichen"],
    ["Hello!", "Hallo!", "Salut!", "Hallo!"]]
    values = [
    0,
    0,
    0,
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
        processOut = dataIn[x][languageUsing].toLowerCase().split(" ");
        for (y = 0; y < processIn.length; y++)
        {
            for (z = 0; z < processOut.length; z++)
            {
                if (processIn[y] == processOut[z] || processOut[z].includes(processIn[y]) && processIn[y] != " " && processIn[y] != "")
                {
                    values[x] = values[x] + 1;
                }
            }
        }
    }
    m = Math.max(...values);
    p = values.indexOf(m);
    if (m == 0) {
        p = 0
    }
    return dataOut[p][languageUsing];
}
