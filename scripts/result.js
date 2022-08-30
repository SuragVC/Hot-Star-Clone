let movie_data = JSON.parse(localStorage.getItem("Movie"))
console.log(movie_data)
let result_append = document.querySelector("#display")

showingData()

function showingData() {
    movie_data.forEach(function(movie) {
        let main_div = document.createElement("div")
        main_div.setAttribute("id", "main")

        let img_div = document.createElement("div")
        let poster = document.createElement("img")
        poster.src = movie.Poster
        poster.alt = "Poster is not available"
        img_div.append(poster)

        let movie_details = document.createElement("div")
        let name = document.createElement("h2")
        name.innerText = movie.Title

        let type = document.createElement("p")
        type.innerText = `Type : ${movie.Type}`

        let year = document.createElement("p")
        year.innerText = `Year : ${ movie.Year}`

        movie_details.append(name, type, year)

        main_div.append(img_div, movie_details)
        result_append.append(main_div)
    })

}