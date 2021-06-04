<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>newConnected</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
        <script src='textToSpeech.js'></script>
        <script src='speechRecog.js'></script>
        <script src='chatBot.js'></script>
        <script src='languageRecog.js'></script>
        <script src='grammarRecog.js'></script>
        <script src='saveData.js'></script>
    </head>
    <body>
        <?php
            echo "php is running";
            echo "php is running";
            echo "php is running";
            echo "php is running";
            echo "php is running";
            echo "php is running";
            echo "php is running";
        ?>
        <div class="menuBar">
            <button class="homeButton" onclick="window.location.href='index.html'"><b>NewConnected</b></button>
            <button class="downloadsButton" onclick="window.location.href='downloads.html'">download page</button>
            <div class="version"><center>v 1.5</center></div>
        </div>

        <button class="TTSButton" id="TTSButton" onclick="TTSSpeak()">Text to speech</button>
        <input type="text" class="TTSInput" id="txtInput" oninput="chatProcess()" onchange="chatProcess()" placeholder="start by typing here">
        <button class="chatBot" id="chatBotOut">Hey!</button>
        <button class="langRecog" id="langRecogOut" onclick="selectedLanguage()">language: English</button>
        <textarea type="text" class="grammarRecog" id="grammarRecog" placeholder="grammar fix" rows="4"></textarea>

        <button id='btnGiveCommand' class="STTButton" onclick="startListening()">Start talking.</button>
        <button id='message' class="STTInput"></button>

        <a href="https://drive.google.com/drive/folders/1oa1jOco0OmJsY_Sg1fIvy-hsPrFAcFQb?usp=sharing" class="MobileApp">
            download the mobile app (latest release)
        </a>
        <ul id="options" style="display: none;">
            <li><button class="option_layout option1" id="lang1" onclick="language1()">english</button></li>
            <li><button class="option_layout option2" id="lang2" onclick="language4()">deutch</button></li>
            <li><button class="option_layout option3" id="lang3" onclick="language2()">dutch</button></li>
            <li><button class="option_layout option4" id="lang4" onclick="language3()">french</button></li>
            <li><button class="option_layout option5" id="lang5" onclick="language5()">recognize (default)</button></li>
          </ul>
    </body>
</html>