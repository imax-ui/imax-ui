const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  title: 'imax-ui',
  description: 'A UI Components Library',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/about/' }
    ],
    sidebar: [
      '/about/',
      '/layout/',
      '/icon/',
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../../src'),
        'packages': resolve('../../packages'),
        'test': resolve('../../test')
      }
    }
  },
	markdown: {
		anchor: {
			permalink: true
		},
		toc: {
			includeLevel: [1, 2]
		},
		config: md => {
			// 使用更多 markdown-it 插件！
			// md.use(require('markdown-it-task-lists'))
			// .use(require('markdown-it-imsize'), { autofill: true })
		}
	},
}