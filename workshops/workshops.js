import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const participantEl = document.querySelector('.participant-list');

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

function displayWorkshops(workshop) {
    participantEl.textContent = '';

    for (let person of workshop) {
        const personEl = document.createElement('div');
        const nameEl = document.createElement('h2');
        const workshopEl = document.createElement('div');

        workshopEl.classList.add('workshops');
        personEl.classList.add('participant');

        nameEl.textContent = person.name;
    }
}


window.addEventListener('load', async() => {
    const workshop = await getWorkshops();

    displayWorkshops(workshop);
});