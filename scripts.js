const items = [
    {
        title: 'Laco Roxo',
        description: 'Description of Laco Roxo.',
        image: 'lacoroxo.png'
    },
    {
        title: 'Laco 1',
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
    },
    {
        title: 'Laco 6',
        description: 'Description of Laco 6.',
        image: 'laco6.png'
    },
    {
        title: 'Laco 7',
        description: 'Description of Laco 7.',
        image: 'laco7.png'
    },
    {
        title: 'Laco 8',
        description: 'Description of Laco 8.',
        image: 'laco8.png'
    },
    {
        title: 'Laco 9',
        description: 'Description of Laco 9.',
        image: 'laco9.png'
    },
    {
        title: 'Laco 10',
        description: 'Description of Laco 10.',
        image: 'laco10.png'
    },
    {
        title: 'Laco 11',
        description: 'Description of Laco 11.',
        image: 'laco11.png'
    },
    {
        title: 'Laco 12',
        description: 'Description of Laco 12.',
        image: 'laco12.png'
    },
    {
        title: 'Laco 13',
        description: 'Description of Laco 13.',
        image: 'laco13.png'
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
                        <div class="star-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
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
