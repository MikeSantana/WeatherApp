const input = document.getElementById("search-name");
const form = document.getElementById("form-weather");
const list = document.getElementById("cities");
const apiKey = "4d8fb5b93d4af21d66a2948710284366";


form.addEventListener("submit", e => {
    e.preventDefault();

    var inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    
    fetch (url)
        .then(response =>{ 
            return response.json();
        })
        .then(data => {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;
            const boxContent = `<h2 class="city-name" > <span>${data.name}</span> <sub class="country">${data.sys.country}</sub> </h2> <div > <span class="City-temp">${Math.round(data.main.temp)}</span><sup class="celcius">°c</sup> <figure><img class="city-icon" src="${icon}" alt="${data.weather[0]["description"]}"></figure> </div>`;
            const li = document.createElement("li");
            li.classList.add("city");
            list.appendChild(li);
            li.innerHTML = boxContent;
        })
    })