export function renderParticipant(participant) {
    const participantsEl = document.createElement('p');

    participantsEl.classList.add('person');
    participantsEl.textContent = participant.name;

    return participantsEl;
}