var input = require('fs').readFileSync('./dev/stdin', 'utf8')

var economy = input.split('\n');

var numberOfParticipants = economy.shift(); 

var votes = economy.shift().split(' ').map((n) => parseInt(n));

function countVotes(votes) {
    let satisfiedVotes = 0;
    let insatisfiedVotes = 0;
    for (const vote of votes) {
      if (vote == 0) {
        satisfiedVotes++;
      } else {
        insatisfiedVotes++;
      }
    }

    if (satisfiedVotes > insatisfiedVotes) {
        return 'Y';
    } else {
        return 'N';
    }
}
console.log(countVotes(votes));
