var Letter = function(char) {
  this.charac = char.toLowerCase();
  this.appear = false;
  this.letterRender = function() {
    if (this.appear) {
      return this.charac;
    } else if (this.charac === " ") {
        this.appear = true;
        return this.charac;
    } else {
        return "_ ";
    }
  };
};
exports.wordBank = ["Lana", "Stevie", "Gaga", "Suicide", "Death", "Sorrow", "Dark", "Alone", "Prison", "Lies", "happy", "Treyvon", "BLM", "build a wall"];
exports.Letter = Letter;