

export const x = 'Hi';



export default function printMe() {
  console.log('I get called from print.js!');
}
function renderCurrentWeather(event){
  fetch(`https://api.weatherbit.io/v2.0/current?city=Dublin&key=1f24e84b47534e8d88983eb98695ba2d&include=minutely`)
  .then(res => {
    return res.json()
  })
  .then(forecast => {
    const temp = forecast.data[0];
    console.log(temp);
    document.querySelector('.middle_box').firstElementChild.innerHTML = 'Current weather'
    const roundTemp = Math.round(temp.temp)
    document.querySelector('.temp').innerHTML = `${roundTemp}°C`;
    const iconCode = temp.weather.icon
    const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
    document.querySelector('.icon').innerHTML = `<img src=${iconUrl}>`;
    document.querySelector('.top_box').style.height = '5em'


  })
}
export {renderCurrentWeather} ;

function handleSubmit(event) {
  event.preventDefault()
  const cityName = document.getElementById('trip_destination').value;

  fetch(`http://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=bibikovaolga`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('.destination_name').firstElementChild.innerHTML = `${data.geonames[0].name} , ${data.geonames[0].countryName}`;
      document.querySelector('.latandlng').innerHTML = `latitude: ${data.geonames[0].lat} , longitude: ${data.geonames[0].lng}`;
      document.querySelector('.latandlng').style.fontSize = '13px';
      document.querySelector('.latandlng').style.height = '35px';
    })


  const showPerPage = 15;
  fetch(`https://pixabay.com/api/?key=21787565-074c0b7471b83585de5909f2a&q=${cityName}&per_page=${showPerPage}&orientation=horizontal&image_type=photo`)
    .then(res => {
      return res.json()
    })
    .then(result => {
      const cities = result.hits;
      console.log(cities);
      const randomInt = Math.floor(Math.random() * showPerPage);
      console.log(randomInt)
      const imageUrl = result.hits[randomInt].webformatURL;
      document.getElementById('city-image').src = imageUrl
    })


  fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=1f24e84b47534e8d88983eb98695ba2d&include=minutely`)
    .then(res => {
      return res.json()
    })
    .then(forecast => {
      const temp = forecast.data[0];
      console.log(temp);
      document.querySelector('.middle_box').firstElementChild.innerHTML = 'Current weather'
      const roundTemp = Math.round(temp.temp)
      document.querySelector('.temp').innerHTML = `${roundTemp}°C`;
      const iconCode = temp.weather.icon
      const iconUrl = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
      document.querySelector('.icon').innerHTML = `<img src=${iconUrl}>`;
      document.querySelector('.top_box').style.height = '10em'


    })
  const dateI2 = document.getElementById("departure_date").value;




  const dateI1 = Date();

  const destinationTime = document.querySelector('.destination_time')
  const date1 = new Date(dateI1);
  const date2 = new Date(dateI2);
  const time_difference = date2.getTime() - date1.getTime();
  const result = Math.round(time_difference / (1000 * 60 * 60 * 24) + 1);

  if (result < 0) {
    alert('Please enter the right date')
  }
  if (result === 0) {
    destinationTime.innerHTML = `Your trip is today`
  }
  if (result === 1) {
    destinationTime.innerHTML = `Your trip is ${result} day away`
  }
  if (result > 1) {
    destinationTime.innerHTML = `Your trip is ${result} days away`
  }
  return console.log(result)

}

export { handleSubmit }



function buttonMouseOver() {
  const searchButton = document.getElementById('generate');
  const printBtn = document.getElementById('save');
  searchButton.style.boxShadow = "0px 0px 4px 7px rgb(0 150 136 / 23%)";
  searchButton.style.transition = "box-shadow ease-in 0.2s";
  printBtn.style.boxShadow = "0px 0px 4px 7px rgb(0 150 136 / 23%)";
  printBtn.style.transition = "box-shadow ease-in 0.2s";
}
export { buttonMouseOver }

function buttonMouseOut() {
  const searchButton = document.getElementById('generate');
  const printBtn = document.getElementById('save');
  searchButton.style.boxShadow = "0px 0px 4px 7px rgb(0 150 136 / 1%)";
  searchButton.style.transition = "box-shadow ease-in 0.2s";
  printBtn.style.boxShadow = "0px 0px 4px 7px rgb(0 150 136 / 1%)";
  printBtn.style.transition = "box-shadow ease-in 0.2s";
}
export { buttonMouseOut }