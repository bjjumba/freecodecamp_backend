var natural = require('natural');
var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;

var wordA = 'psalm';
var wordB = 'sam';

if (metaphone.compare(wordA, wordB))
    console.log('They sound alike!');

// We can also obtain the raw phonetics of a word using process()
console.log(metaphone.process('psalm'));
