const assert = require('chai').assert;
const tail   = require('../tail');




describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("return 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("return 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("return ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});


