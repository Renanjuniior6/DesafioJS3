const companies = [
    { name: 'Samsung', marketvalue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketvalue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketvalue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketvalue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketvalue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    { name: 'Apple', marketvalue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const sumCompanies = companies.reduce((acc, current) => {
    return acc + current.marketvalue
}, 0)

console.log('O valor total é de', sumCompanies)