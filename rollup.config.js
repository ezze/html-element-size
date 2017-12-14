import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const { NODE_ENV } = process.env;

const globals = {};

const external = Object.keys(globals);

const babelOptions = {
    babelrc: false,
    presets: [
        ['env', { modules: false }]
    ],
    plugins: [
        'external-helpers'
    ],
    exclude: 'node_modules/**'
};

const plugins = [
    babel(babelOptions)
];

if (NODE_ENV === 'production') {
    plugins.push(uglify({}, minify));
}

export default {
    name: 'htmlElementSize',
    input: 'src/index.umd.js',
    output: {
        file: `dist/html-element-size${NODE_ENV === 'production' ? '.min' : ''}.js`,
        format: 'umd'
    },
    globals,
    external,
    plugins
};
