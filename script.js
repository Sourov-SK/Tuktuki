let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 3;
  text_speak.lang = 'en-GB';
  window.speechSynthesis.speak(text_speak);
}

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";

  if (message.includes("hello") || message.includes("hey")) {
    speak("Hello sir, what can I help you with?");
  } 
  else if (message.includes("who are you")) {
    speak("I am a virtual assistant named Toktoki, created by Sourov Sir.");
  } 
  else if (message.includes("what is love")) {
    speak("Love is a complex and multifaceted emotion that encompasses deep affection care and connection between people It can manifest in various forms including romantic love familial love friendship and self-love")
  }
  else if (message.includes("open YouTube")) {
    speak("Opening YouTube...");
    window.open("https://www.youtube.com/", "_blank");
  } 
  else if (message.includes("open facebook")) {
    speak("Opening Facebook...");
    window.open("https://www.facebook.com/", "_blank");
  } 
  else if (message.includes("open instagram")) {
    speak("Opening Instagram...");
    window.open("https://www.instagram.com/", "_blank");
  } 
  else if (message.includes("open w3schools")) {
    speak("Opening W3Schools...");
    window.open("https://www.w3schools.com/", "_blank");
  } 
  else if (message.includes("open chatgpt")) {
    speak("Opening chatgpt...");
    window.open("https://chatgpt.com/", "_blank");
  } 
  else if (message.includes("open google scholar")) {
    speak("Opening Google Scholar...");
    window.open("https://scholar.google.com/", "_blank");
  } 
  else if (message.includes("open google")) {
    speak("Opening Google...");
    window.open("https://google.com/", "_blank");
  } 
  else if (message.includes("open calculator")) {
    speak("Opening Calculator...");
    window.open("calculator://");
  } 
  else if (message.includes("open whatsapp")) {
    speak("Opening WhatsApp...");
    window.open("whatsapp://");
  } 
  
  else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    speak("The current time is " + time);
  } 
  else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
    speak("Today's date is " + date);
  } 
  
  else {
    let finalText = "This is what I found on the internet regarding " + message.replace("toktoki", "").replace("tuktuki", "");
    speak(finalText);
    window.open(`https://www.google.com/search?q=${message.replace("toktoki", " ")}`, "_blank");
  }
}
