fis.match('{**/,*}.{jpg,jpeg,png,gif,js,css,less}', {
	useHash: true,
	release: '/$0'
});

fis.match('{**/,*}.less', {
	// fis-parser-less 插件进行解析
	parser: fis.plugin('less'),
	postprocessor:fis.plugin('autoprefixer',{
		"browsers": ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4", "ie >= 8", "firefox >= 15"],
		"cascade": true
	}),
	// .less 文件后缀构建后被改成 .css 文件
	rExt: '.css',
})
fis.match('*.html', {
		release: '/$0',
});
fis.match('*.html:less', {
  parser: fis.plugin('less'),
	postprocessor:fis.plugin('autoprefixer',{
		"browsers": ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4", "ie >= 8", "firefox >= 15"],
		"cascade": true
	}),
	// .less 文件后缀构建后被改成 .css 文件
	rExt: '.css',
});
fis.media('debug').match('*.{js,less,css,jpg,jpeg,png,gif}', {
	useHash: false,
	useSprite: false,
	optimizer: null,
	domain:null,
})
fis.set('project.ignore', [
  'bower_components/**',
  'node_modules/**',
  'package.json',
  'fis-conf.js',
  'README.md'
]);


/*
 * 资源合并
*/
fis.match('::packager', {
	packager: fis.plugin('deps-pack', {
		/*
		'/static/css/index.css': [
			'page/theme/widget/top/top.less',
			'page/theme/widget/banner/banner.less',
		]
		*/
	})
});