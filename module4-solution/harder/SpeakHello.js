(function (window) {
  var speakWord = "Hello";

  var helloSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    },
    speakHTML: function (name) {
      return `<p>${speakWord} ${name}</p>`;
    }
  };

  window.helloSpeaker = helloSpeaker;
})(window);