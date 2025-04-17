/**
 * Function to validate and determine the card brand (bandeira) based on the card number.
 * @param {string} cardNumber - The credit card number as a string.
 * @returns {string} - The card brand (bandeira) or "Unknown" if not matched.
 */
function getCardBrand(cardNumber) {
    const cardPatterns = [
        { brand: "Visa", pattern: /^4/ },
        { brand: "Mastercard", pattern: /^(5[1-5]|2[2-7])/ },
        { brand: "American Express", pattern: /^3[47]/ },
        { brand: "Discover", pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|92[0-5])|64[4-9]|65)/ },
        { brand: "JCB", pattern: /^35(2[89]|[3-8][0-9])/ },
        { brand: "Elo", pattern: /^(4011|4312|4389|4514)/ },
        { brand: "Hipercard", pattern: /^(606282|3841)/ }
    ];

    for (const { brand, pattern } of cardPatterns) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }

    return "Unknown";
}

/**
 * Function to validate if the card brand (bandeira) is valid.
 * @param {string} cardNumber - The credit card number as a string.
 * @returns {boolean} - True if the card brand is valid, otherwise false.
 */
function isCardBrandValid(cardNumber) {
    const validBrands = [
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "JCB",
        "Elo",
        "Hipercard"
    ];

    const cardBrand = getCardBrand(cardNumber);
    return validBrands.includes(cardBrand);
}

// Example usage:
const cardNumber = "5532271031257499"; // Replace with the card number to test
console.log(getCardBrand(cardNumber)); // Output: Visa
console.log(isCardBrandValid(cardNumber)); // Output: true