const arr = [5, 4, 3, 2, 1]

const getRes = () => {
    let sum = 0;
    arr.forEach(item => {sum+=item});
    return sum;
}
console.log(getRes())