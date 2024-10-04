const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		publicPath: process.env.NODE_ENV === 'production' ? '/filmoteka/' : '/',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	stats: 'errors-only', // Показувати тільки помилки при збірці
	infrastructureLogging: {
		level: 'error', // Показувати тільки помилки
	},
	plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
	devServer: {
		port: 1111,
		open: true,
		hot: true,
		liveReload: true,
		watchFiles: ['src/**/*.html'],
		client: {
			logging: 'warn', // Показувати попередження
			overlay: true, // Вимкнути оверлей
		},
	},
};

// Показуємо, що сервер запущено
console.log(`Dev Server is configured to run at http://localhost:1111`);
