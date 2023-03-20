interface myInterface {
    myKey1: string,
    myPin1: myInterface2
}

interface myInterface2 {
    myKey1: string,
    myPin1: number
}

var int1: myInterface = {
    myKey1: "cnalkvndavn",
    myPin1: {
        myKey1: "cnalkvndavn",
        myPin1: 4512
    }
}