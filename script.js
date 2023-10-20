const rads = document.querySelectorAll('.rad:not(#bestaetigung)');
const botschaft = document.getElementById('botschaft');
const container = document.getElementById('container');
const kryptex = document.querySelector('.kryptex');

rads.forEach(rad => {
    let buchstabeElement = rad.querySelector('.current');
    let buchstabeIndex = buchstabeElement.innerText.charCodeAt(0) - 65;
    let updateBuchstaben = () => {
        buchstabeElement.innerText = String.fromCharCode(buchstabeIndex + 65);
        rad.querySelector('.prev').innerText = String.fromCharCode((buchstabeIndex - 1 + 26) % 26 + 65);
        rad.querySelector('.next').innerText = String.fromCharCode((buchstabeIndex + 1) % 26 + 65);
    };

    rad.querySelector('.unten').addEventListener('click', () => {
        buchstabeIndex = (buchstabeIndex + 1) % 26;
        updateBuchstaben();
    });

    rad.querySelector('.oben').addEventListener('click', () => {
        buchstabeIndex = (buchstabeIndex - 1 + 26) % 26;
        updateBuchstaben();
    });
});

document.getElementById('bestaetigung').addEventListener('click', checkKombination);

function checkKombination() {
    const kombination = Array.from(rads).map(rad => rad.querySelector('.current').innerText).join('');
    if (kombination === 'CHAOS') {
        kryptex.style.display = 'none';
        botschaft.style.display = 'block';
    }
}
