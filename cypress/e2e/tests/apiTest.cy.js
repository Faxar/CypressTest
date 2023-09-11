import { faker } from '@faker-js/faker';

describe('Test api endpints', () => {
    it('GET API endpoint', () => {
        cy.request("GET", "https://restful-booker.herokuapp.com/booking").should((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it("POST API endpint", () => {
        let firstName = faker.person.firstName()
        let lastName = faker.person.lastName()
        cy.request("POST", "https://restful-booker.herokuapp.com/booking", {
            "firstname" : firstName,
            "lastname" : lastName,
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.booking.firstname).to.equal(firstName)
        })
    })
})