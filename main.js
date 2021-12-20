const repeat_wait = challenges.length - 5
let past_challenges = []
let chal_count = 1

function strat_count(change) {
    chal_count += change;
    if (chal_count <= 1) {
        chal_count = 1;
        $("#new-strat-button").text("New Strategy")
        return
    }
    else if (chal_count >= 4) {
        chal_count = 4;
    }
    $("#new-strat-button").text(`${chal_count} New Strategies`)
}

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

function get_challenge() {
    let loop = true
    let chal = new_challenge()
    while (loop) {
        loop = check_repeat(chal)
        chal = new_challenge()
    }
    return chal
}

function clear_challenge() {
    document.getElementById("strat-name").innerHTML = ""
    $("#roulette ul").remove()
}

function present_challenge(num) {
    let name = Object.keys(challenges)[num]
    let desc = challenges[name]

    let strat_title = document.getElementById("strat-name")
    if (strat_title.innerHTML.length > 0) {
        document.getElementById("strat-name").innerHTML += " + "
    }
    document.getElementById("strat-name").innerHTML += name

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
    clear_challenge()
    for (let i = 0; i < chal_count; i++) {
        present_challenge(get_challenge())
    }
}