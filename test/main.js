module.exports = {
    'Balance of milk': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-title', '餘額')
            .assert.containsText('#balance-value', '0')
            .end();
    },

    'Spent money not allow alphabet': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-title', '餘額')
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['abcde', browser.Keys.ENTER])
            .assert.containsText('#balance-value', '0')
            .end();
    },

    'Spent money to buy the milk': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-title', '餘額')
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['152', browser.Keys.ENTER])
            .assert.containsText('#balance-value', '-152')
            .assert.containsText('input#money', '')
            .end();
    },

    'Save money to buy the milk': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-title', '餘額')
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['152', browser.Keys.SHIFT + browser.Keys.ENTER])
            .assert.containsText('#balance-value', '152')
            .assert.containsText('input#money', '')
            .end();
    },
}