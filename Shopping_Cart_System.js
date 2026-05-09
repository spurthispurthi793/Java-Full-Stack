class Product {

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {

    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {

        this.items.push({
            product: product,
            quantity: quantity
        });

        console.log(product.name + " Added To Cart");
    }

    removeItem(productId) {

        this.items = this.items.filter(
            item => item.product.id !== productId
        );

        console.log("Item Removed From Cart");
    }

    calculateTotal() {

        let total = 0;

        this.items.forEach((item) => {

            total +=
            item.product.price * item.quantity;
        });

        return total;
    }

    applyCoupon(code) {

        let total = this.calculateTotal();

        if (code === "SAVE10") {

            total = total - (total * 0.10);

            console.log("10% Discount Applied");
        }

        return total;
    }

    showCart() {

        console.log("Cart Items");

        this.items.forEach((item) => {

            console.log(
                item.product.name +
                " Quantity: " + item.quantity +
                " Price: ₹" + item.product.price
            );
        });
    }
}

const product1 = new Product(
    1,
    "Smartphone",
    20000
);

const product2 = new Product(
    2,
    "Headphones",
    3000
);

const cart = new Cart();

cart.addItem(product1, 1);

cart.addItem(product2, 2);

cart.showCart();

console.log(
    "Total Price: ₹" +
    cart.calculateTotal()
);

console.log(
    "Final Price After Discount: ₹" +
    cart.applyCoupon("SAVE10")
);

cart.removeItem(2);

cart.showCart();
