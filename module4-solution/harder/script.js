(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var outputDiv = document.createElement('div');
  document.body.appendChild(outputDiv);

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      outputDiv.innerHTML += byeSpeaker.speakHTML(names[i]);
    } else {
      outputDiv.innerHTML += helloSpeaker.speakHTML(names[i]);
    }
  }
})();