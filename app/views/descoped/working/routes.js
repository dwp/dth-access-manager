//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

//router.post('/country-answer', function(request, response) {

router.post('/choice-answer', function(request, response) {

    var country = request.session.data['choice']
    if (country == "dth"){
        response.redirect("/request-list")
    } else {
        response.redirect("/request-list-ol")
    }
})

router.post('/request-decision', function(request, response) {

    var decision = request.session.data['yourDecision']
    if (decision == "approve"){
        response.redirect("/request-list-updated")
    } else {
        response.redirect("/request-list-declined")
    }

})

router.post('/approve-choice-answer', function(request, response) {

    var choice = request.session.data['approve-choice']
    if (choice == "dth"){
        response.redirect("/approvals-dwp/flow2/request-list")
    } else {
        response.redirect("/approvals-ol/flow2/request-list-ol")
    }
})

router.post('/request-decision2', function(request, response) {

    var decision = request.session.data['yourDecision2']
    if (decision == "approve"){
        response.redirect("/approvals-dwp/flow2/request-approved")
    } else {
        response.redirect("/approvals-dwp/flow2/request-declined")
    }
})
