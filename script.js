const shopName = "Hollow Ataraxia";
const currentYear = 2026;

const stockCount = 5;
let stockMessage = "";

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

let orderTotal = 2500;
let isMember = true;
let deliveryFee = (orderTotal >= 2000 && isMember === true) ? 0 : 150;
let finalOrderTotal = orderTotal + deliveryFee;

let isShopOpen = true;
let shopStatusMessage = isShopOpen === true ? "Open today" : "Closed today";

const currentHour = new Date().getHours();
let greetingMessage = "An endless night for true collectors";

if (currentHour < 12) {
    greetingMessage = "Good morning! An endless night for true collectors";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon! An endless night for true collectors";
} else {
    greetingMessage = "Good evening! An endless night for true collectors";
}

const shopTitleElement = document.getElementById("shop-title");
if (shopTitleElement) {
    shopTitleElement.textContent = shopName;
}

const greetingElement = document.getElementById("greeting-text");
if (greetingElement) {
    greetingElement.textContent = greetingMessage;
}

const footerElement = document.getElementById("footer-copyright");
if (footerElement) {
    footerElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

const stockOutputElement = document.getElementById("stock-output");
if (stockOutputElement) {
    stockOutputElement.textContent = `Stock Status: ${stockMessage}`;
}

const deliveryOutputElement = document.getElementById("delivery-output");
if (deliveryOutputElement) {
    deliveryOutputElement.textContent = `Final Total (Delivery Fee: ₱${deliveryFee}): ₱${finalOrderTotal}`;
}

const shopStatusOutputElement = document.getElementById("shop-status-output");
if (shopStatusOutputElement) {
    shopStatusOutputElement.textContent = `Shop Status: ${shopStatusMessage}`;
}

const toggleButton = document.getElementById("toggle-shop-btn");
if (toggleButton && shopStatusOutputElement) {
    toggleButton.addEventListener("click", () => {
        isShopOpen = (isShopOpen === true) ? false : true;
        shopStatusMessage = (isShopOpen === true) ? "Open today" : "Closed today";
        shopStatusOutputElement.textContent = `Shop Status: ${shopStatusMessage}`;
        console.log("Shop status toggled to:", shopStatusMessage);
    });
}

const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            return;
        }
        const productName = card.querySelector("h3").textContent;
        console.log(`User selected product: ${productName}`);
        alert(`You selected: ${productName}!`);
    });
});

console.log("Shop Name:", shopName);
console.log("Stock Status:", stockMessage);
console.log("Final Order Total:", finalOrderTotal);
console.log("Shop Status:", shopStatusMessage);