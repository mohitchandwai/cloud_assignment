// app.js

// Mock data
const manhwas = [
    {
        title: "Solo Leveling",
        genre: "Action, Adventure, Fantasy",
        description: "The story of a weak hunter who becomes the world's strongest solo player."
    },
    {
        title: "Tower of God",
        genre: "Action, Mystery, Fantasy",
        description: "A boy named Bam climbs a mysterious tower in search of his friend."
    },
    {
        title: "The God of High School",
        genre: "Action, Martial Arts, Supernatural",
        description: "A martial arts competition that will determine the strongest fighter."
    },
    {
        title: "Noblesse",
        genre: "Action, Supernatural, Vampire",
        description: "A vampire noble who wakes up after 820 years must adapt to the modern world."
    },
    {
        title: "Sweet Home",
        genre: "Horror, Thriller, Psychological",
        description: "A group of people fight to survive as monstrous creatures start appearing."
    }
];

// Function to display manhwa list
function displayManhwas() {
    const manhwaList = document.getElementById('manhwa-list');

    manhwas.forEach(manhwa => {
        const manhwaItem = document.createElement('div');
        manhwaItem.className = 'manhwa-item';

        const manhwaTitle = document.createElement('div');
        manhwaTitle.className = 'manhwa-title';
        manhwaTitle.textContent = manhwa.title;

        const manhwaGenre = document.createElement('div');
        manhwaGenre.className = 'manhwa-genre';
        manhwaGenre.textContent = `Genre: ${manhwa.genre}`;

        const manhwaDescription = document.createElement('div');
        manhwaDescription.className = 'manhwa-description';
        manhwaDescription.textContent = manhwa.description;

        manhwaItem.appendChild(manhwaTitle);
        manhwaItem.appendChild(manhwaGenre);
        manhwaItem.appendChild(manhwaDescription);

        manhwaList.appendChild(manhwaItem);
    });
}

// Initialize display on page load
window.onload = displayManhwas;
