var num = 12;   // global variable

class Numbers {
    num_val = 13;            // class variable
    static static_val = 10;  // static field

    storeNum(): void {
        var local_num = 14; // local variable
    }
}

console.log(Numbers.static_val);
