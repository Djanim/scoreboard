let home = document.getElementById("home")
let guest = document.getElementById("away")
let homeSum = 0
let guestSum = 0
home.textContent = homeSum
guest.textContent = guestSum



function HomePlusOne() {
    
    let result = homeSum += 1
    console.log(result)
    home.textContent = result    
}

function HomePlusTwo() {
    
    let result = homeSum += 2
    console.log(result)
    home.textContent = result    
}
function HomePlusTree() {
    
    let result = homeSum += 3
    console.log(result)
    home.textContent = result    
}

function AwayPlusOne() {
    
    let result = guestSum += 1
    console.log(result)
    guest.textContent = result    
}

function AwayPlusTwo() {
    
    let result = guestSum += 2
    console.log(result)
    guest.textContent = result    
}
function AwayPlusTree() {
    
    let result = guestSum += 3
    console.log(result)
    guest.textContent = result    
}