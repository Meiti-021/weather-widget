const search = document.querySelector('input[type="search"]');
const tempVal = document.querySelector('.tempVal');
const humidityVal = document.querySelector('.humidityVal');
const windspeedVal = document.querySelector('.windspeedVal');
const desVal = document.querySelector('.desVal');
const searchButton = document.querySelector('button')
const cityName = document.querySelector('.cityName')
const form = document.querySelector('.form')



searchButton.addEventListener('click',searchFor);
search.addEventListener('focus',hoverEffect);


function hoverEffect(){
    form.style.height = "150px"
}



function searchFor() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=c1b2f2825bff3e7ed9388fe3fec2c1e1`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            form.style.height = '420px';
            tempVal.innerText = `${(data.main.temp - 273.15).toFixed(1)}C`;
            humidityVal.innerText = `${data.main.humidity}`;
            windspeedVal.innerText = `${data.wind.speed}`;
            desVal.innerText =`${data.weather[0].main}`;
            cityName.innerText =`${data.name}`;
        })
        .catch(()=>{
            alert('p;ease inter the correct name')
            tempVal.innerText = `not found`;
            humidityVal.innerText = `not found`;
            windspeedVal.innerText = `not found`;
            desVal.innerText =`not found`;
            cityName.innerText =`not found`;
        })
    
}