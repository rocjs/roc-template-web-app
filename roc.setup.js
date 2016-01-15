const defaultPrompt = require('roc').defaultPrompt;

const prompt =
    defaultPrompt.concat([{
        type: 'input',
        name: 'roc-port',
        message: 'What\'s the port for the application?',
        default: 3000
    }]);

module.exports = {
    prompt: prompt
}
