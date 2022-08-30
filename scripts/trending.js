// const TMDB_url = "https://api.themoviedb.org/3/trending/all/day?api_key=54bf1da997fbe6bb894191a681fd13b7"

let display = document.querySelector("#display")
Fetch_Url()

async function Fetch_Url() {
    let url = "https://api.themoviedb.org/3/trending/all/day?api_key=54bf1da997fbe6bb894191a681fd13b7"
    let fetcher = await fetch(url)
    let data = await fetcher.json()
    displayData(data.results)
}

function displayData(movies) {
    console.log(movies)
    movies.forEach(({ title, original_name, release_date, poster_path }) => {
        console.log(title, original_name, release_date, poster_path)

        let main_div = document.createElement("div")

        let img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w300//${poster_path}`

        let name = document.createElement("h3")

        if (title == undefined) {
            name.innerText = original_name
        } else {
            name.innerText = title
        }
        let release = document.createElement("p")
        if (release_date == undefined) {
            release.innerText = ""
        } else {
            release.innerText = release_date
        }

        main_div.append(img, name, release)
        display.append(main_div)
    })
}