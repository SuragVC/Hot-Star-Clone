let searchout = document.querySelector("#searchout")
let addvertise_Bar = document.querySelector("#addvertise_Bar")
let id;

let i = 0;
// ________________Array for showing in the advetisebar ↓__________________________
var arr_img = [{
        img_url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1652347262551_playofweb.jpg"
    },
    {
        img_url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1652959394992_rrr_web.jpg"
    },
    {
        img_url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1651492562825_restaurant.jpg"
    }, {
        img_url: "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg"
    }
]

// ___________________________Slideshow ↓______________________________________________
img_first = document.createElement("img")
img_first.src = arr_img[0].img_url
addvertise_Bar.append(img_first)
i++
time = setInterval(function() {
        if (i === arr_img.length) {
            i = 0;
        }
        addvertise_Bar.innerHTML = null
        let image = arr_img[i].img_url

        let img = document.createElement("img");
        img.src = image;
        addvertise_Bar.append(img);
        i++;
    }, 1800)
    // _______________________Debouncer ↓_________________________________________
function Debouncer(Search, delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function() {
        Search()
    }, delay)
}
// _______________________Search for movies ↓________________________________
async function Search() {
    input = document.querySelector("#search_input").value
    if (input == "") {
        searchout.innerHTML = null
    } else {
        const OMDB_url = `https://omdbapi.com/?apikey=a53ccf9b&s=${input}`
        try {
            let fetcher = await fetch(OMDB_url)
            let result = await fetcher.json()
            displayData(result.Search)
        } catch (err) {
            console.log("error")
            let error = document.createElement("p")
            error.innerText = "Search result not available"
            error.style.color = "red"
            searchout.append(error)
        }
    }
}
// _____________________Display Data on the Search bar ↓____________________________________
function displayData(datas) {
    searchout.innerHTML = null
    searchout_main = document.createElement("div")
    searchout_main.setAttribute("id", "searchout_main")

    datas.forEach(function(data) {
        let main_div = document.createElement("div")
        main_div.setAttribute("class", "inside_divs")

        let img = document.createElement("img")
        img.src = data.Poster
        img.alt = "Poster is not available"

        let name = document.createElement("h4")
        name.innerText = data.Title
        main_div.addEventListener("click", function() {
            SaveFile(data)
        })

        main_div.append(img, name)
        searchout_main.append(main_div)
    })
    searchout.append(searchout_main)
}
// ___________________Save file that clicked by the user ↓_______________________________________
function SaveFile(data) {
    let Arr = [];
    Arr.push(data)
    localStorage.setItem("Movie", JSON.stringify(Arr))
    window.location.href = "Result.html"
}