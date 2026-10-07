"use strict";
class Product {
    navigateTo() {
        console.log('Navigating to product page');
    }
}
class Cart extends Product {
    navigateTo() {
        console.log('Navigating to cart page');
    }
}
const c = new Cart();
c.navigateTo();
//# sourceMappingURL=polymorphism.js.map