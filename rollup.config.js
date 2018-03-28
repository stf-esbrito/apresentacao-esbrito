export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/apresentacao.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'apresentacao',
    globals: {
      '@angular/core': 'ng.core',
    }
  }