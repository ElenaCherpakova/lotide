const args = process.argv.slice(2);
const pigLatin = function(string) {
  let sliced = string.slice(1);
  return sliced + string[0] + "ay";
};

for (let i = 0; i < args.length; i++) {
  console.log(pigLatin(`${args[i]}`));
}