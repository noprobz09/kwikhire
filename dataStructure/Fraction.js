class Fraction {
    constructor (top, bottom) {
        this.num = top;
        this.den = bottom;
    }
    
    show() {
        console.log(`${this.num}/${this.den}`);
    }

    plus(fraction) {
        let newnum = this.num * fraction.den + this.den * fraction.num;
        let newden = this.den * fraction.den;

        return new Fraction(newnum, newden);
    }

    gcd(n = this.num, d = this.den) {
        while (d%n != 0) {
            let oldm = d;
            let oldn = n;

            d = oldn;
            n = oldm%oldn;
        }

        return n;
    }
}

var f1 = new Fraction(20, 10);
console.log(f1.gcd());