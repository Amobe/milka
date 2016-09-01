module.exports = {
    'Balance of milk': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-value', '0')
            .end();
    },

    'The input format of the money only allow alphabet': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['abcde', browser.Keys.ENTER])
            .assert.containsText('#balance-value', '0')
            .end();
    },

    'The input field is empty on start': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('input#money', '')
            .end();
    },

    'The input field will be cleared after press enter': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('input#money', '')
            .setValue('input#money', ['152', browser.Keys.ENTER])
            .assert.containsText('input#money', '')
            .end();
    },

    'The balance will decrease when spending the money': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['152', browser.Keys.ENTER])
            .assert.containsText('#balance-value', '-152')
            .end();
    },

    'The balance will increase when saving the money': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['152', browser.Keys.SHIFT + browser.Keys.ENTER])
            .assert.containsText('#balance-value', '152')
            .end();
    },

    'System will record the history for each time saving or spening the money ': function (browser) {
        browser
            .url('http://localhost:8081')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#balance-value', '0')
            .setValue('input#money', ['152', browser.Keys.ENTER])
            .assert.containsText('li.record:nth-child(1)', '-152')
            .setValue('input#money', ['58', browser.Keys.ENTER])
            .assert.containsText('li.record:nth-child(1)', '58')
            .assert.containsText('li.record:nth-child(2)', '-152')
            .end();
    },
}