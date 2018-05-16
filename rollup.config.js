import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/index.js',
        format: 'umd'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        commonJs(),
        nodeResolve()
    ]
};
