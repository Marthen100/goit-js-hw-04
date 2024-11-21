const profile = {
  username: "Jacob",
  playTime: 300,
  
  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

const task3ResultsDiv = document.getElementById('task-3-results');

// Test cases
profile.changeUsername("Marco");
let result7 = profile.getInfo(); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
let result8 = profile.getInfo(); // "Marco has 320 active hours!"

task3ResultsDiv.innerHTML += `<p>First Info: ${result7}</p>`;
task3ResultsDiv.innerHTML += `<p>Second Info: ${result8}</p>`;
