let hScore = document.getElementById("h-score")
let gScore = document.getElementById("g-score")
let hTotal = 0
let gTotal = 0

// function Hadd1() {
//     hTotal += 1
//     hScore.innerText = hTotal
// }
// function Hadd2() {
//     hTotal += 2
//     hScore.innerText = hTotal
// }
// function Hadd3() {
//     hTotal += 3
//     hScore.innerText = hTotal
// }
// function Gadd1() {
//     gTotal += 1
//     gScore.innerText = gTotal
// }
// function Gadd2() {
//     gTotal += 2
//     gScore.innerText = gTotal
// }
// function Gadd3() {
//     gTotal += 3
//     gScore.innerText = gTotal
// }

document.addEventListener("click", (e) => {
    calculate(e)
})

function calculate(event) {
    if(event.target.id === "Hadd1") {
        hTotal += 1
        hScore.innerText = hTotal
    } 
    else if (event.target.id === "Hadd2") {
        hTotal += 2
        hScore.innerText = hTotal
    }
    else if (event.target.id === "Hadd3") {
        hTotal += 3
        hScore.innerText = hTotal
     }
    else if (event.target.id === "Gadd1") {
        gTotal += 1
        gScore.innerText = gTotal
     }
    else if (event.target.id === "Gadd2") {
        gTotal += 2
        gScore.innerText = gTotal
     }
    else if (event.target.id === "Gadd3") {
        gTotal += 3
        gScore.innerText = gTotal
     }
}