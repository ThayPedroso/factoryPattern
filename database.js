function createDatabaseConnection() {
    function start() {
        console.log('> [database] Starting...')
        console.log('> [database] Connecting to Postgrees...')
        console.log('> [database] Running migrations...')
        console.log('> [database] Starting done!')
    }

    function stop() {
        console.log('> [database] Stopping...')
        console.log('> [database] Closing Postgrees connections...')
        console.log('> [database] Stopping done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createDatabaseConnection