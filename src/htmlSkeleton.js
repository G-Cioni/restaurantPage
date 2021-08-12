import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

export function htmlSkeleton() {
	console.log('html skeleton');
	const content = document.getElementById('content');

	const header = document.createElement('header');
	content.appendChild(header);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'ĐЯ/NK$';
	header.appendChild(restaurantName);

	const homeTab = document.createElement('button');
	homeTab.classList.add('tab');
	homeTab.textContent = 'Home';
	homeTab.addEventListener('click', () => createHome());
	header.appendChild(homeTab);

	const menuTab = document.createElement('button');
	menuTab.classList.add('tab');
	menuTab.textContent = 'Menu';
	menuTab.addEventListener('click', () => createMenu());
	header.appendChild(menuTab);

	const contactTab = document.createElement('button');
	contactTab.classList.add('tab');
	contactTab.textContent = 'Contact';
	contactTab.addEventListener('click', () => createContact());
	header.appendChild(contactTab);

	const main = document.createElement('main');
	content.appendChild(main);

	const footer = document.createElement('footer');
	footer.textContent = 'Copyright © 2021 gianlucacioni';
	content.appendChild(footer);
}
