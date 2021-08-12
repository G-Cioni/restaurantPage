export function htmlSkeleton() {
	const content = document.getElementById('content');

	const header = document.createElement('header');
	content.appendChild(header);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'ĐЯ/NK$';
	header.appendChild(restaurantName);

	const homeTab = document.createElement('button');
	homeTab.classList.add('tab');
	homeTab.textContent = 'Home';
	header.appendChild(homeTab);

	const menuTab = document.createElement('button');
	menuTab.classList.add('tab');
	menuTab.textContent = 'Menu';
	header.appendChild(menuTab);

	const contactTab = document.createElement('button');
	contactTab.classList.add('tab');
	contactTab.textContent = 'Contact';
	header.appendChild(contactTab);

	const main = document.createElement('main');
	content.appendChild(main);

	const footer = document.createElement('footer');
	footer.textContent = 'Copyright © 2021 gianlucacioni';
	content.appendChild(footer);
}
