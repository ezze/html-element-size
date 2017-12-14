import babel from 'rollup-plugin-babel';

const config = {
    name: 'htmlElementSize',
    input: 'src/index.js',
    output: {
        file: 'dist/html-element-size.es.js',
        format: 'es'
    },
    external: [],
    plugins: [
        babel({
            babelrc: false,
            presets: [
                ['env', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        })
    ]
};

export default config;
