const args = process.argv.slice(2);
const pigLatin = function(string) {
  return string.slice(1) + string[0] + "ay";
};

for (el of args) {
  console.log(pigLatin(`${el}`));
}