const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader, // Спочатку, щоб витягнути CSS у файл
					'css-loader',
					'sass-loader',
				],
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
	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
		new MiniCssExtractPlugin({ filename: 'styles.css' }),
	],
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
