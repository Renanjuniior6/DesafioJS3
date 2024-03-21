const list = [20,3,234,12,17,541,6,87,275,1000];

const numbers = list.filter(numbers => {
     return numbers % 2 === 0 && numbers % 5 === 0 
})
console.log(numbers)


//---------------------------------------------------------------------
//ou asssim... 

/*const numbers = list.filter(numbers => {
    if (numbers % 2 !== 0) return false
    if (numbers % 5 !== 0) return false
    
    return true
})
console.log(numbers)*/

//---------------------------------------------------------------------



const companies = [
    { name: 'Samsung', marketvalue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketvalue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketvalue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketvalue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketvalue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    { name: 'Apple', marketvalue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const empresas = companies.filter(valor => {
   return valor.foundedOn > 1975 && valor.marketvalue > 200 
})

console.log(empresas)

