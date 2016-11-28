/*module.exports = {
    'Home Page Test': function(browser) {
        browser
            .url('https://dev1.talentscreen.io')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.navbar-right a[ui-sref]', 1000)
            .click('.navbar-right a[ui-sref]')
            .pause(1000)
            .assert.containsText('#signup-intro h1','Log In')
            .end();
    }
}
*/