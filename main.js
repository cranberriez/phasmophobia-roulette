const repeat_wait = challenges.length
let past_challenges = []

function rand_difficulty() {
    let difficulties = ["Easy","Intermediate","Professional","NIGHTMARE"]

    let len = difficulties.length
    let random = Math.floor(Math.random() * len)

    return difficulties[random]
}

function rand_player() {
    let players = ["Red", "Blue", "Green", "Purple"]

    let len = players.length
    let random = Math.floor(Math.random() * len)

    return players[random]
}

function rand_map() {
    let maps=[{name:"Willow Street House",size:"tiny"},{name:"Tanglewood Street House",size:"tiny"},{name:"Edgefield Street House",size:"small"},{name:"Ridgeview Street House",size:"small"},{name:"Grafton Farmhouse",size:"small"},{name:"Bleasdale Farmhouse",size:"medium"},{name:"Maple Lodge Campsite",size:"medium"},{name:"High School",size:"large"},{name:"Prison",size:"large"},{name:"Asylum",size:"massive"}]
    
    let len = maps.length
    let random = Math.floor(Math.random() * len)

    return maps[random]
}

function check_special(text) {
    if (text.includes("special") || text.includes("one person"))
        return true
}

function new_challenge() {
    let len = Object.keys(challenges).length
    let random = Math.floor(Math.random() * len)

    return random
}

function new_li(text, classes = []) {
    let li = document.createElement("li")
    li.innerHTML = text
    for (let i = 0; i < classes.length; i++) {
        li.classList.add(classes[i])
    }

    return li
}

function present_challenge(num) {
    let name = Object.keys(challenges)[num]
    let desc = challenges[name]

    document.getElementById("strat-name").innerHTML = name

    $("ul").remove()

    let uList = document.createElement("ul")
    uList.classList.add("center-text")

    let special_player = false
    for (let i = 0; i < desc.length; i++) {
        const e = desc[i]
        if (check_special(e))
            special_player = true
        let li = new_li(e)
        uList.append(li)
    }

    if (special_player) {
        let li = document.createElement("li")
        li.classList.add("special-player")
        let player = rand_player()
        li.classList.add(player.toLowerCase())
        li.innerHTML = `<br/>Special Player: ${player}`
        uList.append(li)
    }
    
    $("#roulette").append(uList)
    $("#strat-intro").remove()
}

function check_repeat(chal) {
    if (past_challenges.includes(chal)) {
        return true
    }
    else {
        if (past_challenges.length >= repeat_wait) {
            past_challenges.pop()
        }

        past_challenges.unshift(chal)
        return false
    }
}

function button_press() {
    let loop = true
    let chal = new_challenge()
    while (loop) {
        chal = new_challenge()
        loop = check_repeat(chal)
    }

    present_challenge(chal)
}