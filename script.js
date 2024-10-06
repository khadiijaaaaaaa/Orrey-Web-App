const planets = [
    {
        name: 'Earth',
        video: 'planets/earth.mp4',
        description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. Its surface is 71% water, mostly in oceans, and it has a nitrogen-oxygen atmosphere that supports life.'
    },
    {
        name: 'Mars',
        video: 'planets/mars.mp4',
        description: 'Mars is the fourth planet from the Sun, often called the Red Planet due to iron oxide on its surface. It has a thin atmosphere and has been a focal point of space exploration for signs of ancient life.'
    },
    {
        name: 'Jupiter',
        video: 'planets/jupiter.mp4',
        description: 'Jupiter is the largest planet in the Solar System, composed mainly of hydrogen and helium. Its most famous feature is the Great Red Spot, a giant storm, and it has a large number of moons, including Ganymede.'
    },
    {
        name: 'Saturn',
        video: 'planets/saturn.mp4',
        description: 'Saturn is the sixth planet from the Sun, known for its prominent ring system made of ice and rock particles. It also has many moons, the most notable being Titan, which has an atmosphere and lakes of methane.'
    },
    {
        name: 'Uranus',
        video: 'planets/uranus.mp4',
        description: 'Uranus is unique for its tilted axis, causing extreme seasons. It has a blue-green color due to methane in its atmosphere and has faint rings and numerous moons.'
    },
    {
        name: 'Neptune',
        video: 'planets/neptune.mp4',
        description: 'Neptune is the eighth planet from the Sun, known for its deep blue color and powerful winds. It has faint rings and moons, including Triton, which orbits in the opposite direction of Neptune’s rotation.'
    }
];

let currentPlanetIndex = 0;

function showPlanet(planetName) {
    // Ensure case-insensitive comparison and find the planet
    const planetInfo = planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());

    // Update the video source (inside the <source> tag)
    const videoElement = document.getElementById('planet-video');
    videoElement.src = planetInfo.video;

    // Reload the video to reflect the new source
    videoElement.parentElement.load();  // Reloads the video with the updated source

    // Update the planet name and description
    document.getElementById('planet-name').textContent = planetInfo.name;
    document.getElementById('planet-description').textContent = planetInfo.description;
}

function nextPlanet() {
    // Increment the planet index and ensure it wraps around at the end of the array
    currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
    
    // Show the next planet by name
    showPlanet(planets[currentPlanetIndex].name);
}

// Initially load the first planet's details (Earth) when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showPlanet(planets[currentPlanetIndex].name);
});
