/* <div id="content">
        <header>
            <h1>Restaurant Name</h1>
            <button class="tab">Home</button>
            <button class="tab">Menu</button>
            <button class="tab">Contact</button>
        </header>
        <main>
            <h2>Welcome to</h2>
            <h1>Restaurant Name</h1>
            <h3>Opening Hours</h3>
            <div class="open-hours">Mon - Fri: 19:00 - 23:00</div>
            <div class="open-hours">Sat - Sun: 13:00 - 24:00</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit totam praesentium eos nostrum labore voluptate ipsa voluptatem magni vero. Corrupti, optio neque repellat itaque corporis temporibus quidem quasi dolores repudiandae?</p>
            <button class="button" id="home-menu-btn">Menu</button>
            </main>
        <footer>
            Copyright © 2021 gianlucacioni
        </footer> */

export function createHome() {
	const main = document.querySelector('main');

	const welcome = document.createElement('h2');
	welcome.id = 'welcome';
	welcome.textContent = 'Welcome to';
	main.appendChild(welcome);

	const restaurantName = document.createElement('h1');
	restaurantName.textContent = 'Restaurant Name';
	main.appendChild(restaurantName);

	const hours1 = document.createElement('h3');
	hours1.textContent = 'Mon - Fri: 19:00 - 23:00';
	main.appendChild(hours1);

	const hours2 = document.createElement('h3');
	hours2.textContent = 'Sat - Sun: 13:00 - 24:00';
	main.appendChild(hours2);

	const paragraph = document.createElement('p');
	paragraph.textContent =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit totam praesentium eos nostrum labore voluptate ipsa voluptatem magni vero. Corrupti, optio neque repellat itaque corporis temporibus quidem quasi dolores repudiandae?';
	main.appendChild(paragraph);

	const menuBtn = document.createElement('button');
	menuBtn.textContent = 'Menu';
	main.appendChild(menuBtn);
}
