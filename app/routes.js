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
        response.redirect("/onelogin")
    }
})
