module.exports = {
    'Main test': function (browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .assert.containsText('#app', 'Hello Vue 2.0!')
            .end();
    }
}