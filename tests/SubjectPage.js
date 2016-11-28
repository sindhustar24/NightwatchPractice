module.exports = {
    // 'Subjects Page Test' : function (browser) {
    //     browser.url('https://dev1.talentscreen.io')
    //         .waitForElementVisible('body', 1000)
    //         .waitForElementVisible('.nav>li:nth-child(1)', 1000)
    //         .click('.nav>li:nth-child(1)')
    //         .pause(1000)
    //         .assert.containsText('.media-body h1', 'Library')
    //         .end();
    //
    // },
    // 'Subject Subjects Test': function(browser) {
    //     browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
    //         .waitForElementVisible('body', 1000)
    //         .waitForElementVisible('.select2-choice .select2-chosen', 1000)
    //         .click('.select2-choice .select2-chosen')
    //         .pause(200)
    //         .click('ul li.ui-select-choices-row:nth-child(1)')
    //         .end();
    // },

    // 'Subject Category Test1': function(browser) {
    //     browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
    //         .waitForElementVisible('body', 1000)
    //         .waitForElementVisible('#select-category .select2-choice', 1000)
    //         .click('#select-category .select2-choice')
    //         .pause(200)
    //         .click('ul li.ui-select-choices-row:nth-child(1)')
    //         .pause(1000)
    //         .waitForElementVisible('#select-category .select2-choice', 1000)
    //         .click('#select-category .select2-choice')
    //         .pause(1000)
    //         .click('ul li.ui-select-choices-row:nth-child(2)')
    //         .pause(1000)
    //         .waitForElementVisible('#select-category .select2-choice', 1000)
    //         .click('#select-category .select2-choice')
    //         .pause(1000)
    //         .click('ul li.ui-select-choices-row:nth-child(3)')
    //         .pause(1000)
    //         .end();
// },
    /*'Subject Category Test2': function(browser) {
        browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('#select-category .select2-choice', 1000)
            .click('#select-category .select2-choice')
            .pause(200)
            .click('ul li.ui-select-choices-row:nth-child(2)')
            .end();
    },
    'Subject Category Test3': function(browser) {
        browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('#select-category .select2-choice', 1000)
            .click('#select-category .select2-choice')
            .pause(200)
            .click('ul li.ui-select-choices-row:nth-child(3)')
            .end();
    }*/

    //  'Subject Testing Test': function(browser) {
    //     browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
    //         .waitForElementVisible('body', 1000)
    //         .waitForElementVisible('#select-sort .select2-choice', 1000)
    //         .click('#select-sort .select2-choice')
    //         .pause(200)
    //         .click('ul li.ui-select-choices-row:nth-child(1)')
    //         .pause(1000)
    //         .waitForElementVisible('#select-sort .select2-choice', 1000)
    //         .click('#select-sort .select2-choice')
    //         .pause(1000)
    //         .click('ul li.ui-select-choices-row:nth-child(2)')
    //         .pause(1000)
    //         .waitForElementVisible('#select-sort .select2-choice', 1000)
    //         .click('#select-sort .select2-choice')
    //         .pause(1000)
    //         .click('ul li.ui-select-choices-row:nth-child(3)')
    //         .pause(1000)
    //         .end();
    //
    // },
    'No Selection Library': function(browser) {
        browser.url('http://dev1.talentscreen.io/#/website-courses/grid')
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.nav>li:nth-child(1)', 1000)
            .click('.nav>li:nth-child(1)')
            .pause(200)
            .waitForElementVisible('subject-grid-display.item:nth-child(1)',1000)
            .pause(200)
            .end();
    }




};
