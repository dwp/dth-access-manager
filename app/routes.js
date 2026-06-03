//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


//Routes for registration test environment//



// Handle form submission
router.post('/enter-their-contact-details', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['responsibleon'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "me") {
            // Send user here
            res.redirect('/client-registration-test/responsible-client-credentials');
        } else {
            // Send user here
            res.redirect('/client-registration-test/enter-their-contact-details');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/responsible-onboarding?error=true');
    }
});


// Handle form submission
router.post('/enter-their-contact-details2', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['responsiblecred'];

     if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "me") {
            // Send user to...
            res.redirect('/client-registration-test/register-resource-server');
        } else if (selectedOption === "me2") {
            // Send user to enter passport details
            res.redirect('/client-registration-test/register-resource-server');
        } else if (selectedOption === "thisperson") {
            // Send user to enter passport details
            res.redirect('/client-registration-test/register-resource-server');
        } else if (selectedOption === "someone") {
            // Send user to prove identity at the post office
            res.redirect('/client-registration-test/enter-their-contact-details2');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/responsible-onboarding?error=true');
    }
});


// Handle form submission
router.post('/check-answers-rc', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['regresource'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes');
        } else {
            // Send user here
            res.redirect('/client-registration-test/check-answers-consuming-service');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/register-resource-server?error=true');
    }
});



// Handle form submission
router.post('/scopes-list', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes');
        } else {
            // Send user here
            res.redirect('/client-registration-test/select-allowed-clients');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/scopes-list?error=true');
    }
});


// Handle form submission
router.post('/ara-product', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['araproduct'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "Not applicable") {
            // Send user here
            res.redirect('/client-registration-test/enter-product-name');
        } else {
            // Send user here
            res.redirect('/client-registration-test/enter-service-name');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/select-ara-product?error=true');
    }
});


// Handle form submission
router.post('/ara-product-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['araproduct'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "Not applicable") {
            // Send user here
            res.redirect('/client-management-test/enter-product-name-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/enter-service-name-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/select-ara-product-m?error=true');
    }
});






//Routes for client management test environment//

