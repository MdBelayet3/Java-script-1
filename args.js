function sum(...args){
    return args.reduce((total, num) => total + num, 0)
};
const result = sum(23,4,5,6);
console.log(result)