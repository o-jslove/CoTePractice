const fs = require('fs');

function subDomainPopularityDifference(popularity1, popularity2) {
    const difference = Math.abs(popularity1 - popularity2);
    return difference;
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error reading the input file:', err);
        return;
    }

    const [popularity1, popularity2] = data.trim().split(' ').map(Number);

    const difference = subDomainPopularityDifference(popularity1, popularity2);

    console.log(difference);
})
