const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () =>{
    console.log("button")
    sendApiRequest();
})

async function sendApiRequest(){
    let API_KEY = "byU8WSSagGX9BQLpV7jWb3iEdLNaBwGA26xSYwBU"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#title").innerHTML += data.title
    document.querySelector("#info").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}