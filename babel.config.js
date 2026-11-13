module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@nuxt/babel-preset-app', {
                corejs: { version: 3 }
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        '@babel/plugin-transform-runtime'
    ]
};
