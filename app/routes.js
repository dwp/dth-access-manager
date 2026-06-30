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
router.post('/reg-resource', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['regresource'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes');
        } else {
            // Send user here
            res.redirect('/client-registration-test/check-answers-cons');
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
            res.redirect('/client-registration-test/add-scopes1');
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
router.post('/scopes-list1', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another2'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes2');
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
router.post('/scopes-list2', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another3'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes3');
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
router.post('/scopes-list3', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another4'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes4');
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
router.post('/scopes-list4', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another5'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-registration-test/add-scopes4');
        } else {
            // Send user here
            res.redirect('/client-registration-test/select-allowed-clients');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-registration-test/scopes-list?error=true');
    }
});



router.post('/tech-prereq', function (req, res) {
  const prereqs = req.session.data['prereq'] || [];

  // Check if all 3 are selected
  if (prereqs.length !== 3) {
    // Show error on the same page
    return res.render('/client-registration-test/technical-prereq', {
      showErrorSummary: true
    });
  }

  // If all are ticked, go to next page
  res.redirect('/client-registration-test/select-ara-product');   // change to your actual next page
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



router.post('/clients', function (req, res) {
  res.redirect('/client-registration-test/check-answers-res');
});

router.post('/clients-m', function (req, res) {
  res.redirect('/client-management-test/check-answers-m');
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



// Handle form submission
router.post('/reg-resource-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['regresource'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/register-resource-server-m?error=true');
    }
});


// Handle form submission
router.post('/scopes-list-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes1-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/scopes-list-m?error=true');
    }
});


// Handle form submission
router.post('/scopes-list1-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another2'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes2-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/scopes-list1-m?error=true');
    }
});


// Handle form submission
router.post('/scopes-list2-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another3'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes3-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/scopes-list2-m?error=true');
    }
});



// Handle form submission
router.post('/scopes-list3-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another4'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes4-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/scopes-list2-m?error=true');
    }
});



// Handle form submission
router.post('/scopes-list4-m', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['add-another5'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "yes") {
            // Send user here
            res.redirect('/client-management-test/add-scopes4-m');
        } else {
            // Send user here
            res.redirect('/client-management-test/check-answers-m');
        }
    } else {
        // If no radio button is selected, redirect to error page
        res.redirect('/client-management-test/scopes-list2-m?error=true');
    }
});








router.get('/remove-scope', function (req, res) {
  const index = req.query.index;

  if (index) {
    req.session.data['scopename' + index] = '';
  }

  res.redirect('/client-registration-test/select-allowed-clients');   // or wherever the list is shown
});

router.get('/remove-scope1', function (req, res) {
  const index = req.query.index;

  if (index) {
    req.session.data['scopename1' + index] = '';
  }

  res.redirect('/client-registration-test/scopes-list');   // or wherever the list is shown
});

router.get('/remove-scope2', function (req, res) {
  const index = req.query.index;

  if (index) {
    req.session.data['scopename2' + index] = '';
  }

  res.redirect('/client-registration-test/scopes-list1');   // or wherever the list is shown
});


router.get('/remove-scope3', function (req, res) {
  const index = req.query.index;

  if (index) {
    req.session.data['scopename3' + index] = '';
  }

  res.redirect('/client-registration-test/scopes-list2');   // or wherever the list is shown
});

router.get('/remove-scope4', function (req, res) {
  const index = req.query.index;

  if (index) {
    req.session.data['scopename4' + index] = '';
  }

  res.redirect('/client-registration-test/scopes-list3');   // or wherever the list is shown
});


router.post('/select-ara-product', function (req, res) {
  const prereqs = req.session.data['prereq'] || [];

  if (prereqs.length !== 3) {   // change 3 to the number of checkboxes
    return res.render('/client-registration-test/technical-prereq', {
      error: true   // this will trigger the errorMessage above
    });
  }

  res.redirect('/next-page');
});