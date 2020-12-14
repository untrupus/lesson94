exports.config = {
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'http://localhost:3000',
            show: true,
            windowSize: '1200x900'
        }
    },
    include: {
        I: './steps_file.js'
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/createArtist.js', './step_definitions/createAlbum.js', './step_definitions/createTrack.js', './step_definitions/addToHistory.js']
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        }
    },
    name: 'lesson94'
}