const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            targets: {
                'safari': '7',
                'ie': '9'
            }
        }
    ],
    '@babel/preset-react'
];

const commonPlugins = [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-pipeline-operator', {proposal: 'minimal'}],
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-transform-runtime'
];

module.exports = {
    'env': {

        'development': {
            presets,
            plugins: [
                ...commonPlugins,
                'transform-import-sync',
                'react-refresh/babel'
            ]
        },

        'test': {
            'presets': [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        },

        'production': {
            presets,
            plugins: [
                ...commonPlugins
            ]
        }

    }
};
