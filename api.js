const BASE_URL = "https://dragonball-api.com/api/"; // Replace with your actual API URL
// const BASE_URL = "https://dragonball-api.com/api/characters?page=1&limit=5"; // Replace with your actual API URL

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const getLocalStorage = (key) => {
    if (window.localStorage) {
        return window.localStorage.getItem(key);
    } else {
        console.error("Local Storage is not supported in this browser.");
        return null;
    }
}

const setLocalStorage = (key, value) => {
    if (window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        console.error("Local Storage is not supported in this browser.");
    }
};

const createCard = (container, body, personajes) => {
    const obj = getLocalStorage("selected");
    console.log(JSON.parse(obj));
    personajes.forEach(( personaje ) => {
        const card = document.createElement("div");
        card.onclick = () => {
            card.classList.remove("card");
            card.classList.add("active");
            setLocalStorage("selected", personaje);
            // Add any additional functionality you want on card click
        };

        if (personaje.name === getLocalStorage("selected")) {
            card.classList.add("active");
        } else {
            card.classList.add("card");
        }

    
        const img = document.createElement("img");
        img.src = personaje.image;
        img.alt = "Goku";
        img.style.objectFit = "contain";
        img.style.width = "200px";
        img.style.height = "200px";
    
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
    
        const cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = personaje.name;
    
        const cardDesc = document.createElement("div");
        cardDesc.classList.add("card-desc");
        cardDesc.textContent = personaje.description;
    
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDesc);
    
        card.appendChild(img);
        card.appendChild(cardContent);
    
        container.appendChild(card);
    });

    body.appendChild(container);

    // return `
    //     <div class="card">
    //         <img src="https://upload.wikimedia.org/wikipedia/en/0/01/Goku_anime.png" alt="Goku">
    //         <div class="card-content">
    //             <div class="card-title">Goku</div>
    //             <div class="card-desc">El protagonista principal, guerrero saiyajin con un corazón puro y una sed infinita por mejorar.</div>
    //         </div>
    //     </div>
    // `;
}

window.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("main");
    const body = document.querySelector("body");
    const url = `${BASE_URL}characters?page=1&limit=10`
    const { items } = await getData(url);
    // console.log(data);

    createCard(container, body, items);
    // container.innerHTML = createCard(body);

});