function discount(price){
    this.price = price;
     
    this.discount= function(){

       let myDiscount = (this.price * 0.1) 
       let discountedAmount =this.price - myDiscount;
        return discountedAmount;
    }

}
let phone = new discount(10000)

 console.log(phone)
