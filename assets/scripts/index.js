const updateBitcoinButtonText = (val) => {
    document.querySelector("#bitcoin-button").textContent = val;
}

// Handle browser/node differences
if (typeof exports != 'undefined') {
    module.exports = {
        updateBitcoinButtonText
    }
}
