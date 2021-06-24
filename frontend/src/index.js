import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { hideLoading, parseRequestUrl, showLoading } from './utils.js';
import Error404Screen from './screens/Error404Screen.js';
import CartScreen from './screens/CartScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import Header from './components/Header.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceorderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';
import ProductListScreen from './screens/ProductListScreen.js';
import ProductEditScreen from './screens/ProductEditScreen.js';
import OrderListScreen from './screens/OrderListScreen.js';

const routes = {
	'/': HomeScreen,
	'/product/:id/edit': ProductEditScreen,
	'/product/:id': ProductScreen,
	'/order/:id': OrderScreen,
	'/cart/:id': CartScreen,
	'/cart': CartScreen,
	'/signin': SigninScreen,
	'/register': RegisterScreen,
	'/profile': ProfileScreen,
	'/shipping': ShippingScreen,
	'/payment': PaymentScreen,
	'/placeorder': PlaceOrderScreen,
	'/dashboard': DashboardScreen,
	'/productlist': ProductListScreen,
	'/orderlist': OrderListScreen
};

const router = async () => {
	showLoading();
	const request = parseRequestUrl();

	const parseUrl =
		(request.resource ? `/${request.resource}` : '/') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	console.log(request);
	const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
	const header = document.getElementById('header-container');
	header.innerHTML = await Header.render();
	await Header.after_render();
	const main = document.getElementById('main-container');
	main.innerHTML = await screen.render();
	if (screen.after_render) await screen.after_render();
	hideLoading();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
