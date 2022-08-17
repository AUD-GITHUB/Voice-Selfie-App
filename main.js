var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startVoice(){
    document.getElementById("voice-output").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
  var Content = event.results[0][0].transcript;
  document.getElementById("voice-output").innerHTML = Content;
  console.log(Content);
  if(Content == "take my selfie")
  {
    console.log("taking selfie ...");
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking you selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:450,
    height:350,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = "<img id = 'img-selfie' src = '" + data_uri + "'/>";
    });
}

function save(){
    link = document.getElementById("link");
    Image = document.getElementById("img-selfie").src;
    link.href = Image;
    link.click();
}