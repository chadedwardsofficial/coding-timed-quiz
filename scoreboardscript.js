function addScore() {
  var name = document.getElementById('name').value;
  var score = document.getElementById('score').value;

  if (name && score) {
      var list = document.getElementById('scoreList');
      var listItem = document.createElement('li');
      listItem.textContent = name + ': ' + score;
      list.appendChild(listItem);

      document.getElementById('name').value = '';
      document.getElementById('score').value = '';

      // Save data to local storage
      var scores = JSON.parse(localStorage.getItem('scores')) || [];
      scores.push({ name: name, score: score });
      localStorage.setItem('scores', JSON.stringify(scores));
  }
}

function loadScores() {
  var scores = JSON.parse(localStorage.getItem('scores')) || [];
  var list = document.getElementById('scoreList');

  scores.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.textContent = item.name + ': ' + item.score;
      list.appendChild(listItem);
  });
}