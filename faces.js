images = ["smile.png", "unsure.png", "sad.png"]
imageChange = [
    ["smile.png", "happy.png"], 
    ["unsure.png"], 
    ["sad.png"]
]

function addEmotion() {
    var input = document.getElementById("txtInput").value
    getKeywords(input)
}

function getKeywords(sentence) {
    emotions = [0, 0, 0]
    process = sentence.split(" ")
    for (x = 0; x < process.length; x++) {
        if (process[x] == "what" || process[x] == "how" || process[x] == "why" || process[x] == "where") {
            emotions[1] = emotions[1] + 1
        } else if (process[x] == "great" || process[x] == "happy" || process[x] == "okay" || process[x] == "hello") {
            emotions[0] = emotions[0] + 1
        } else if (process[x] == "bye" || process[x] == "hate" || process[x] == "stupid" || process[x] == "sad") {
            emotions[2] = emotions[2] + 1
        }
    }
    m = Math.max(...emotions);
    p = emotions.indexOf(m);
    changeFace(p)
}

function changeFace(face) {
    y = 0
    function changeFaceStep() {
        setTimeout(() => {
            if (y < imageChange[face].length) {
                document.getElementById("face").src = imageChange[face][y];
                y++
                changeFaceStep()
            }
        }, 200 * (y + 1));
    }
    changeFaceStep()
}
