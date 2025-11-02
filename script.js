// Handle Pricing Plan Selection
const pricingButtons = document.querySelectorAll('.cta-button');
const selectedPlanSpan = document.getElementById('selected-plan');
const paymentSection = document.getElementById('payment');
const backToPricingButton = document.getElementById('back-to-pricing-button');
const creditCardInfo = document.getElementById('credit-card-info');
const phonePeScanner = document.getElementById('phonepe-scanner');
const proceedPaymentButton = document.getElementById('proceed-payment-button');
const confirmPaymentButton = document.getElementById('confirm-payment-button');

// Handle plan selection
pricingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const plan = e.target.getAttribute('data-plan');
        selectedPlanSpan.textContent = plan;
        paymentSection.style.display = 'block';
    });
});

// Toggle Payment Methods
const paymentMethodInputs = document.querySelectorAll('input[name="payment-method"]');
paymentMethodInputs.forEach(input => {
    input.addEventListener('change', () => {
        if (document.querySelector('input[name="payment-method"]:checked').value === 'credit-card') {
            creditCardInfo.style.display = 'block';
            phonePeScanner.style.display = 'none';
        } else {
            creditCardInfo.style.display = 'none';
            phonePeScanner.style.display = 'block';
        }
    });
});

// Handle Back Button
backToPricingButton.addEventListener('click', () => {
    paymentSection.style.display = 'none';
});

// Handle Credit Card Payment
proceedPaymentButton.addEventListener('click', () => {
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const cardCVV = document.getElementById('card-cvv').value;

    if (cardNumber && cardName && cardCVV) {
        // Simulate successful payment
        alert('Payment processed successfully.');
        document.getElementById('payment-method-confirmation').textContent = 'Credit Card';
        document.getElementById('selected-plan-confirmation').textContent = selectedPlanSpan.textContent;
        document.getElementById('payment-confirmation').style.display = 'block';
        paymentSection.style.display = 'none';
    } else {
        alert('Please fill in all card details.');
    }
});

// Handle PhonePe Payment Confirmation
confirmPaymentButton.addEventListener('click', () => {
    // Simulate successful payment
    alert('Payment processed successfully via PhonePe.');
    document.getElementById('payment-method-confirmation').textContent = 'PhonePe';
    document.getElementById('selected-plan-confirmation').textContent = selectedPlanSpan.textContent;
    document.getElementById('payment-confirmation').style.display = 'block';
    paymentSection.style.display = 'none';
});

// Handle Transaction ID Verification
const verifyTransactionButton = document.getElementById('verify-transaction-button');
verifyTransactionButton.addEventListener('click', () => {
    const transactionId = document.getElementById('transaction-id-input').value;
    if (transactionId) {
        alert('Transaction Verified.');
        document.getElementById('payment-confirmation').style.display = 'block';
        document.getElementById('transaction-id').style.display = 'none';
    } else {
        alert('Please enter a valid transaction ID.');
    }
});