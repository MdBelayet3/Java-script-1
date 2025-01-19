function gun(...array){
    return array.reduce((result, num) => result * num, 1)
}
console.log(gun(2,3,4,5))