console.log("Initializing Inventory System");

let inventory = [
    {
        name: "Laptop",
        price: 800
    },
    {
        name: "Mouse",
        price: 25
    }
];

let productName = prompt("Enter new product name:");
let priceInput = prompt("Enter product price:");

let productPrice = Number(priceInput);

if (
    productName === null ||
    productName.trim() === "" ||
    priceInput === null ||
    isNaN(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product input.");
} else {

    let category;

    if (productPrice < 100) {
        category = "Budget";
    } else if (productPrice <= 500) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    inventory.push({
        name: productName,
        price: productPrice,
        category: category
    });

    console.log(`User adds "${productName}" at "$${productPrice}"`);
}

function getCategory(price) {

    if (price < 100) {
        return "Budget";
    } else if (price <= 500) {
        return "Standard";
    } else {
        return "Premium";
    }
}

function getBadge(category) {

    switch (category) {
        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }
}

console.log("Inventory roster:");

for (let i = 0; i < inventory.length; i++) {

    if (!inventory[i].name || inventory[i].price <= 0) {
        continue;
    }

    let category = inventory[i].category;

    if (!category) {
        category = getCategory(inventory[i].price);
    }

    console.log(
        `${inventory[i].name} ($${inventory[i].price}) -> ${getBadge(category)}`
    );
}

function calculateTotal(items, tax, discount) {

    let total = 0;

    for (let i = 0; i < items.length; i++) {

        if (items[i].price <= 0) {
            continue;
        }

        total += items[i].price;
    }

    total = total + (total * tax);
    total = total - (total * discount);

    return total;
}

const calculateAffordable = (items, limit) => {
    return items.filter(product => product.price < limit);
};

let totalValue = calculateTotal(inventory, 0, 0);

console.log(`Total Inventory Value: $${totalValue}`);

let affordableProducts = calculateAffordable(inventory, 200);

console.log(
    "Affordable under $200:",
    affordableProducts.map(product => product.name).join(", ")
);

let formattedReport = [];

inventory.forEach(product => {

    formattedReport.push(
        `${product.name.toUpperCase()}: $${product.price}`
    );

});

console.log(
    "Formatted report:",
    formattedReport.join(", ")
);

for (let i = 0; i < inventory.length; i++) {

    if (inventory[i].name === productName) {
        console.log(`Product found: ${inventory[i].name}`);
        break;
    }
}