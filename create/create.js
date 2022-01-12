import {
    createParticipant,
    getWorkshops,
    checkAuth,
    logout
} from '../fetch-utils.js';

const form = document.querySelector('.participant-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get('participant-name');
    const workshopID = data.get('workshop-id');
    const contact = data.get('contact');

    await createParticipant({
        name: name,
        contact: contact,
        workshop_id: workshopID
    });
    form.reset();
});

window.addEventListener('load', async() => {
    const selectEl = document.querySelector('select');
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const option = document.createElement('option');


        option.value = workshop.id;
        option.textContent = workshop.name;

        selectEl.append(option);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});