module.exports = {
    settings: {
        runtime: {
            port: {{ rocPort }},
            serve: ['files', 'build/client'],
            favicon: 'files/roc.png'
        },
        build: {
            input: {
                web: 'client.js',
                node: 'server.js'
            }
        }
    }
};
