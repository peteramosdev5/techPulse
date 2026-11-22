const homeBut = document.getElementById('homeBut');
const aiBut = document.getElementById('aiBut');
const phoneBut = document.getElementById('phoneBut');
const startBut = document.getElementById('startBut');
const secBut = document.getElementById('secBut');
const usaBut = document.getElementById('usaBut');
const ukBut = document.getElementById('ukBut');
const allBut = document.getElementById('allBut');
const searchNow = document.getElementById('searchNow');
const newsList = document.getElementById('newsList');

const year = document.getElementById('year');
if (year) {
    year.textContent = new Date().getFullYear();
}

let filter = 'all';
let regionFilter = 'all';

const params = new URLSearchParams(window.location.search);
if (params.get('filter')) {
    filter = params.get('filter');
}

if (params.get('region')) {
    regionFilter = params.get('region');
}

homeBut.addEventListener('click', () => {
    filter = 'all';
    regionFilter = 'all';
    showNews();
});

aiBut.addEventListener('click', () => {
    filter = 'ai';
    showNews();
});

phoneBut.addEventListener('click', () => {
    filter = 'phones';
    showNews();
});

startBut.addEventListener('click', () => {
    filter = 'startups';
    showNews();
});

secBut.addEventListener('click', () => {
    filter = 'security';
    showNews();
});

usaBut.addEventListener('click', () => {
    regionFilter = 'usa';
    showNews();
});

ukBut.addEventListener('click', () => {
    regionFilter = 'uk';
    showNews();
});

allBut.addEventListener('click', () => {
    filter = 'all';
    regionFilter = 'all';
    showNews();
});

searchNow.addEventListener('input', () => {
    showNews();
});

function showNews() {
    newsList.innerHTML = '';
    
    const searchText = searchNow.value.trim().toLowerCase();
    news.forEach((item, index) => {
        if (filter !== 'all' && item.category.toLowerCase() !== filter) {
            return;
        }

        if (regionFilter !== 'all' && (item.region ||'all'). toLowerCase() !== regionFilter) {
            return;
        }

        if (searchText && !item.title.toLowerCase().includes (searchText)) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'news-tree';

        card.innerHTML =`
        <img src="${item.image}" alt="${item.title}"
        <h4>${item.title}</h4>
        `;
        card.style.cursor = 'pointer';
        card.onclick = () => {
        window.location.href = `article.html?id=${index}`;
    };
        newsList.appendChild(card);
    })
}

showNews();

