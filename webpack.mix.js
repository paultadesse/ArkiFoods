const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({ module: { rules: [{ test: /\.mp4$/i, use: 'file-loader' }] } })
    .js('resources/js/app.js', 'public/js')
    .vue(3)
    .alias({ "@": "resources/js" })
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss")
    ])
    .version();
