let search_ = document.getElementById("search_")
let result = document.getElementById("result")
function fetch_(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_.value}&appid=80833273c463c38708fb4d1a53789f37`)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
        result.innerHTML += `<p>Feels like ${data.main.temp}<sup>o</sup>C in ${(search_.value).toUpperCase()}</p>
        <p>and there is ${(data.weather[0].description).toUpperCase()}</p>
        `
    })
}