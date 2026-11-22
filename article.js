const articleBox = document.getElementById('articleBox');
const id = new URLSearchParams(window.location.search).get('id');
const trendingList = document.getElementById('trendingList');
const item = news[id];
const trending = news.filter((_, i) => i !=id).slice(0, 3);

if (!item) {
    articleBox.innerHTML = "<h2>Article not Found</h2>";
} else {
    document.title = item.title + " - TechPulse";
    articleBox.innerHTML = `
    <h1 class="article-title">${item.title}</h1>
    <img src="${item.image}" class="article-image" alt="${item.title}">
    <p class="article-body">${item.body}</p>
    <a href="index.html" class="back-bottom"> Back to Home</a>
    `;
    trendingList.innerHTML = trending.map((t) => {
        const realIndex = news.indexOf(t);
        return `
        <div class="trending-item" onclick="window.location.href='article.html?id=${realIndex}'">
        <img src="${t.image}">
        <h4>${t.title}</h4>
        </div>
        `;
    }).join('');

}