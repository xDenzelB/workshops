export function renderParticipant(participant) {
    const participantsEl = document.createElement('div');
    const participantNameEl = document.createElement('p');
    const participantContactEl = document.createElement('p');

    participantsEl.classList.add('person');
    participantNameEl.classList.add('name-part');
    participantContactEl.classList.add('contact-part');
    
    participantNameEl.textContent = participant.name;
    participantContactEl.textContent = participant.contact;
    
    participantsEl.append(participantNameEl, participantContactEl);
    return participantsEl;
}