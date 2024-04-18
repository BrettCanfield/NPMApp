document.getElementById("myBtn").addEventListener("click", getInfo)

function getInfo() {
    let input = document.getElementById("input").value
    axios.get("https://pokeapi.co/api/v2/pokemon/" + input)
    .then ( (response) => {
        console.log(response)
        document.getElementById("name").innerHTML = "Name: " + response.data.name
        document.getElementById("id").innerHTML = "Id: " + response.data.id
        document.getElementById("weight").innerHTML = "Weight: " + response.data.weight
        document.getElementById("height").innerHTML = "Height: " + response.data.height
    })
    .catch((err) => {
        console.log(err)
        document.getElementById("nope").innerHTML = err
    })
}