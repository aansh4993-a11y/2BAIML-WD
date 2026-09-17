class Product{
    constructor(productId, productName, price){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    getDiscountedPrice(discountPercentage){
        return this.price - (this.price * discountPercentage / 100);
}
displayProductDetails(){
        console.log("Product ID : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.price);
    }
    static compareProducts(p1, p2){
        if (p1.price > p2.price){
            console.log(p1.productName + " is costlier (" + p1.price + ") than " + p2.productName + " (" + p2.price + ")");
        } else if (p2.price > p1.price){
            console.log(p2.productName + " is costlier (" + p2.price + ") than " + p1.productName + " (" + p1.price + ")");
        } else{
            console.log(p1.productName + " and " + p2.productName + " have the same price (" + p1.price + ")");
        }
    }
}
class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
    displayProductDetails() {
        super.displayProductDetails();
        console.log("Warranty : " + this.warranty + " years");
    }
}
const p1 = new Product(1, "Wooden Chair", 2500);
const e1 = new Electronics(2, "LED TV", 32000, 2);
const e2 = new Electronics(3, "Washing Machine", 27000, 3);

console.log("Product Details:");
p1.displayProductDetails();
console.log("Discounted Price of " + p1.productName + " (10% off): " + p1.getDiscountedPrice(10));
e1.displayProductDetails();
console.log("Electronics Details");
e1.displayProductDetails();
console.log("Discounted Price (15%): " + e1.getDiscountedPrice(15));
e2.displayProductDetails();
console.log("Discounted Price (5%): " + e2.getDiscountedPrice(5));