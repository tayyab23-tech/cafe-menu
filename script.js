// Chai Corner - simple JavaScript for the order and contact forms

const itemSelect = document.getElementById("item");
const quantityInput = document.getElementById("quantity");
const totalText = document.getElementById("total");

function updateTotal() {
    if (!itemSelect || !quantityInput || !totalText) {
        return;
    }

    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const price = Number(selectedOption.dataset.price || 0);
    const quantity = Number(quantityInput.value || 0);

    totalText.textContent = "Rs. " + (price * quantity);
}

if (itemSelect && quantityInput) {
    itemSelect.addEventListener("change", updateTotal);
    quantityInput.addEventListener("input", updateTotal);
}

const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const customerName = document.getElementById("customerName").value;
        const item = itemSelect.value;
        const quantity = Number(quantityInput.value);
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];
        const price = Number(selectedOption.dataset.price);
        const total = price * quantity;

        document.getElementById("orderMessage").textContent =
            "Thank you, " + customerName + "! Your demo order is " +
            quantity + " " + item + "(s). Total: Rs. " + total + ".";
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("contactMessage").textContent =
            "Thank you! Your message has been recorded for this demo.";
        contactForm.reset();
    });
}
