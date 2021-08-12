import { htmlSkeleton } from './htmlSkeleton';
import { clearHtml } from './clearHtml';
export function createMenu() {
	clearHtml();
	htmlSkeleton();
	const footer = document.querySelector('footer');
	footer.style.marginTop = '3em';

	const main = document.querySelector('main');
	const title = document.createElement('h1');
	title.id = 'title';
	title.textContent = 'Menu';
	main.appendChild(title);

	subMenuFactory('Wine');
	menuItemFactory('Wine', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory(
		'Wine',
		'Morellino di Scanzano',
		'Red wine from Tuscany',
		'8€'
	);
	menuItemFactory(
		'Wine',
		'Canonau',
		'Red wine from SardegniaRed wine from SardegniaRed wine from SardegniaRed wine from SardegniaRed wine from Sardegnia',
		'7€'
	);
	menuItemFactory('Wine', 'Shiraz', 'Red wine', '7€');

	subMenuFactory('Cocktails');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Cocktails', 'Chianti', 'Red wine from Tuscany', '7€');

	subMenuFactory('Beers');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
	menuItemFactory('Beers', 'Chianti', 'Red wine from Tuscany', '7€');
}

function menuItemFactory(subMenu, item, description, price) {
	const main = document.getElementById(subMenu);

	const card = document.createElement('div');
	card.classList.add('menu-card');

	const itemDiv = document.createElement('h3');
	itemDiv.textContent = item;
	itemDiv.classList.add('menu-card-item');
	card.appendChild(itemDiv);

	const descDiv = document.createElement('p');
	descDiv.textContent = description;
	descDiv.classList.add('menu-card-item');
	card.appendChild(descDiv);

	const priceDiv = document.createElement('h3');
	priceDiv.textContent = price;
	priceDiv.classList.add('menu-card-item');
	card.appendChild(priceDiv);

	main.appendChild(card);
}

function subMenuFactory(subMenuName) {
	const main = document.querySelector('main');
	const list = document.createElement('div');
	const subMenu = document.createElement('div');
	subMenu.classList.add('sub-menu');
	list.classList.add('list');
	list.id = subMenuName;
	const title = document.createElement('h2');
	title.textContent = subMenuName;
	title.classList.add('menu-title');
	subMenu.appendChild(title);
	subMenu.appendChild(list);
	main.appendChild(subMenu);
}
