// ===== WEATHER SECTION =====
document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('citySelect').value;
    const apiKey = 'e52ylmhCRzagWjtWMupd2MSlnmAHXTWot1zDoJih';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=e52ylmhCRzagWjtWMupd2MSlnmAHXTWot1zDoJih=metric`;

    fetch('https://api.nasa.gov/')
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const html = `
                <h4>${data.name}, ${data.sys.country}</h4>
                <img src="${icon}" alt="Weather icon">
                <p>${data.weather[0].description}</p>
                <p>🌡️ ${data.main.temp}°C | 💧 Humidity: ${data.main.humidity}%</p>
            `;
            document.getElementById('weatherResult').innerHTML = html;
        })
        .catch(() => {
            document.getElementById('weatherResult').innerHTML = `<p class="text-danger">Unable to fetch weather data.</p>`;
        });
}

// ===== NEWS SECTION =====
const newsApiKey = '4f3f3283fa7d9bc6ce0b9c7b6d1f7d24'; // Replace with your GNews API key
const newsUrl = `https://gnews.io/api/v4/search?q=Tigray&lang=en&country=et&max=6&apikey=${newsApiKey}`;

fetch('https://api.nasa.gov/')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('newsContainer');
        container.innerHTML = data.articles.map(article => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${article.image || 'https://via.placeholder.com/400x200'}" class="card-img-top" alt="News Image">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description || ''}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-outline-danger btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
    })
    .catch(() => {
        document.getElementById('newsContainer').innerHTML = `<p class="text-center text-danger">Unable to load news.</p>`;
    });

