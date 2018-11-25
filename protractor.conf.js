exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec2.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true
    }
};