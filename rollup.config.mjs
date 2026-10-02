import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/ha-plooum-multi-status-card.js',
  output: {
    file: 'ha-plooum-multi-status-card.js',
    format: 'iife',
    name: 'HaPlooumMultiStatusCard',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};