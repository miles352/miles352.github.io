const animals = [
    {
        name: "Jack and Annie",
        img: "Assets/jack_and_annie.jpg",
        alt: "Yellow and Gray Kittens",
        gender: "Male and Female",
        breed: "Brother and sister mix",
        age: "6 weeks",
        description: "Jack and Annie are playful and adorable!"
    },
    {
        name: "Cocoa",
        img: "Assets/cocoa.jpg",
        alt: "Brown Dog",
        gender: "Female",
        breed: "Labrador",
        age: "20 weeks",
        description: "Cocoa is sweet as pie and loves to give kisses."
    },
    {
        name: "Sam",
        img: "Assets/sam.jpg",
        alt: "Tabby Cat",
        gender: "Male",
        breed: "Orange Mix",
        age: "3 years",
        description: "Sam is a calm kitty who is great with children and other animals, but not with dogs."
    },
    {
        name: "Roscoe",
        img: "Assets/rosco.jpg",
        alt: "Light Brown Dog",
        gender: "Male",
        breed: "Corgi/Chihuahua mix",
        age: "8 years",
        description: "Roscoe is an older, house trained dog whose owner had to surrender him. He is ready for a home!"
    },
    {
        name: "Sheldon",
        img: "Assets/sheldon.jpg",
        alt: "Box Turtle in some leaves",
        gender: "Male",
        breed: "Box Turtle",
        age: "1 year",
        description: "Sheldon likes to sit in the sun, and doesn't bite!"
    },
    {
        name: "Jellybean",
        img: "Assets/jellybean.jpg",
        alt: "Sleepy Gray cat",
        gender: "Female",
        breed: "Gray Tabby",
        age: "2 years",
        description: "Jellybean was found in a storm drain, but loves people."
    },
    {
        name: "Greyson",
        img: "Assets/greyson.jpg",
        alt: "Gray and White Cat",
        gender: "Male",
        breed: "Gray Mix",
        age: "10 weeks",
        description: "Greyson is high energy and high cuddles!"
    }
];

const animalGrid = document.getElementById("animal-grid");

animals.forEach(animal => {
    animalGrid.innerHTML += `
    <div class="animal">
        <img src="${animal.img}" alt="${animal.alt}">
        <h3>${animal.name}</h3>
        <hr>
        <div class="info-bar">
            <span>${animal.gender}</span>
            <span>${animal.breed}</span>
            <span>${animal.age} old</span>
        </div>
        <hr>
        <p class="animal-description">
            ${animal.description}
        </p>
	</div>
    `
});

let loaded = false;


var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true && loaded === false) {
		const money = document.getElementById("money");
		const total = 192287;

		money.textContent = 0;
		let animate = setInterval(() => {
			let newMoney = parseInt(money.textContent.replace(",", "")) + 1000;
			if (newMoney >= total) {
				clearInterval(animate);
				loaded = true;
			}
			if (newMoney > 999) {
				newMoney = newMoney.toString();
				newMoney = newMoney.slice(0, newMoney.length - 3) + "," + newMoney.slice(newMoney.length - 3, newMoney.length);

			}
			money.textContent = newMoney;
		}, 1);
	}
}, { threshold: [1] });

observer.observe(document.querySelector("#donate-stats"));
