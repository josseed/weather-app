const optsWeather = {
    direction: {
        alias: 'd',
        desc: 'Direction of a city for obtain the weather',
        demand: true
    }
}

const argv = require('yargs')
    .command('weather', 'show all tasks', optsWeather)
    .help()
    .argv;



module.exports = {
    argv
}