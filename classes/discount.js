class Purchase{
    constructor(iPrice,fPrice){
        this.iPrice=iPrice;
        this.fPrice=fPrice;

    }
discount(){
    return this.iPrice *0.7;
}
}
let newPurchase = new Purchase(1000)
console.log(newPurchase.discount())

let purchase = new Purchase(20000)
console.log(purchase.discount())
