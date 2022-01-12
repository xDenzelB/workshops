import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';
import { renderParticipant } from '../render-utils.js';

checkAuth();

const participantEl = document.querySelector('.workshop-list');

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

function displayWorkshops(workshop) {
    participantEl.textContent = '';

    for (let workshops of workshop) {
        const personEl = document.createElement('div');
        const nameEl = document.createElement('h2');
        const workshopEl = document.createElement('div');

        workshopEl.classList.add('workshops');
        personEl.classList.add('participant');

        nameEl.textContent = workshops.name;

        for (let participant of workshops.participants) {
            const peopleEl = renderParticipant(participant);

            peopleEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);

                const updateParticipant = await getWorkshops();

                displayWorkshops(updateParticipant);
            });
            personEl.append(peopleEl);
        }
        workshopEl.append(nameEl, personEl);
        participantEl.append(workshopEl);
    }
}


window.addEventListener('load', async() => {
    const workshop = await getWorkshops();

    displayWorkshops(workshop);
});