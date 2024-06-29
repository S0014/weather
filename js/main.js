var search=document.getElementById('search')
var today=document.getElementById('today')
var datee=document.getElementById('datee')
var imgtoday=document.getElementById('imgtoday')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
let lat=pos.coords.latitude
let long=pos.coords.longitude

        console.log(pos.coords.latitude);

        console.log(long);
        weatherdata(`${lat},${long}`)

    })
}

async function weatherdata(ham){
    let x= await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${ham}&days=3&key=399892c72e564e99878153943242906`)
    let data= await x.json()
    console.log(data);
    displayToday(data)
    displayTom(data)
    displayAfterTom(data)
}
search.addEventListener('input',function(e){
    weatherdata(e.target.value)
})
function displayToday(data){
    console.log(data);
    console.log(data.current.last_updated);
    todaydate=data.current.last_updated
    let date=new Date(todaydate)
    const todayweek=date.toLocaleString('en-us',{weekday:'long'});
    console.log(todayweek);
    const todayday=date.getDate()
    console.log(todayday);
    const todaymonth=date.toLocaleString('en-us',{month:'long'})
console.log(todaymonth);
today.innerHTML=todayweek
datee.innerHTML=`${todayday} ${todaymonth}`
const cityname=data.location.name
city.innerHTML=cityname
const temp=data.current.temp_c
degree.innerHTML=temp
const con=data.current.condition.text
condi.innerHTML=con
const humi=data.current.humidity
hum.innerHTML=humi
const dir=data.current.wind_dir
dirr.innerHTML=dir
const speed=data.current.wind_kph
spe.innerHTML=speed
}

function displayTom({forecast}){
console.log(forecast);
tom.innerHTML=new Date(forecast.forecastday[1].date).toLocaleString('en-us',{weekday:'long'})
degreetom.innerHTML=forecast.forecastday[1].day.maxtemp_c
sdegree.innerHTML=forecast.forecastday[1].day.mintemp_c
teto.innerHTML=forecast.forecastday[1].day.condition.text



}


function displayAfterTom({forecast}){
    console.log(forecast);
    after.innerHTML=new Date(forecast.forecastday[2].date).toLocaleString('en-us',{weekday:'long'})
    afterdee.innerHTML=forecast.forecastday[2].day.maxtemp_c
    aftersm.innerHTML=forecast.forecastday[2].day.mintemp_c
    afterte.innerHTML=forecast.forecastday[2].day.condition.text
    
    
    
    }
    