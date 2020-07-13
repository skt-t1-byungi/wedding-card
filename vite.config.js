// @ts-check
const preactRefresh = require('@prefresh/vite')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
    jsx: 'preact',
    plugins: [preactRefresh()],
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat'
    }
}

module.exports = config
