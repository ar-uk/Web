(function (window) {
  var speakWord = "Good Bye";

  var byeSpeaker = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    },
    speakHTML: function (name) {
      return `<p>${speakWord} ${name}</p>`;
    }
  };

  window.byeSpeaker = byeSpeaker;
})(window);