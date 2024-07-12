const items = [
    {
        title: 'Laco Roxo',
        description: 'Description of Laco Roxo.',
        image: 'lacoroxo.png'
    },
    {
        title: 'Laco1',
        description: 'Description of Laco 1.',
        image: 'laco1.png'
    },
    {
        title: 'Laco 2',
        description: 'Description of Laco 2.',
        image: 'laco2.png'
    },
    {
        title: 'Laco 3',
        description: 'Description of Laco 3.',
        image: 'laco3.png'
    },
    {
        title: 'Laco 4',
        description: 'Description of Laco 4.',
        image: 'laco4.png'
    },
    {
        title: 'Laco 5',
        description: 'Description of Laco 5.',
        image: 'laco5.png'
    }
];

let itemsLoaded = 0;
const itemsPerPage = 6; // 3 rows per load

function loadItems() {
    const catalog = document.getElementById('catalog');
    
    const start = itemsLoaded;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);

    pageItems.forEach(item => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description} <a href="https://wa.me/5544999846579">Contato: 44 999846579</a></p>
                    </div>
                </div>
            </div>
        `;
        catalog.innerHTML += card;
    });

    itemsLoaded += itemsPerPage;
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadItems();
    }
});

// Initial load
loadItems();
