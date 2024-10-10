import { getData } from './api';
import Champion from './champion';

const dataContainer = document.getElementById('data-container');

getData().then((data) => {
    const champions = Object.values(data).map((championData) => {
        return new Champion(championData);
    });

    const html = champions.map((champion) => {
        return `
            <div class="card">
                <img class="img" id="img" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg">
                <div class="main_info" id="main_info">
                    <h1 class="name">${champion.name}</h1>
                    <p class="name">${champion.title}</p>
                    <p class="description" id="description">${champion.blurb}</p>
                    <div class="stats" id="stats">
                        <p class="stat">Ataque: ${champion.attack}</p>
                        <p class="stat">Defensa: ${champion.defense}</p>
                        <p class="stat">Magia: ${champion.magic}</p>
                        <p class="stat">Dificultad: ${champion.difficulty}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    dataContainer.innerHTML = html;
}).catch((error) => {
    console.error(error);
    dataContainer.innerHTML = '<p>Error loading data</p>';
});
