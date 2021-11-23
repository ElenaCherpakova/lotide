const args = process.argv;
let list = args.slice(2);
let output = "";
for (let i = 0; i < list.length; i++) {
  output = "";
  for (let j = list[i].length - 1; j >= 0; j--) {
    output += list[i][j];
  }
  console.log(output);
}

