function textToSpeech() {
    let text = document.getElementById("text-input").value;
    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
