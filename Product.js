console.log("PRODUCT MANAGEMENT SYSTEM");
let product = {
    ProductId: 101,
    ProductName: "Laptop",
    ProductPrice: 50000,
    quantity: 2,

    calculatedPrice: function () {
        return this.ProductPrice * this.quantity; 
},
updateQuantity: function (newQuantity) {
        this.quantity = newQuantity;
},
displayProductDetails: function () {
        console.log("Product ID: " + this.ProductId);
        console.log("Product Name: " + this.ProductName);
        console.log("Product Price: " + this.ProductPrice);
        console.log("Quantity: " + this.quantity);
        console.log("Total Price: " + this.calculatedPrice());
    }
};

product.displayProductDetails();
product.updateQuantity(5);
console.log("After updating quantity:");
product.displayProductDetails();