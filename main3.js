var challenges = {
    "EMP ": [
        "No electronic devices",
        "No using lights in the building",
        "No flashlights"
    ],
    "Candles and Glowsticks": [
        "Can still use all normal electronics except flashlights (including UV flashlight)"
    ],
    "Stubborn Cunts ”Anti vax life hax”": [
        "No going back to truck until you want to leave",
        "No sanity pills"
    ],
    "Im finna piss myself": [
        "No crucifix",
        "Always split up from one another"
    ],
    "PTFO (Play the fucking objective!!!)": [
        "Cannot leave until ALL objectives are done",
        "Or everyone is dead"
    ],
    "The NSA": [
        "One person must remain at the truck at all times",
        "It doesn’t have to be the same person the entire game"
    ],
    "Paul Blart": [
        "No strong flashlights",
        "If more than 2 people are playing",
        "Only 2 equipment per person (including flashlight)"
    ],
    "Paul Blart 2 Fat 2 Furious II": [
        "No strong flashlights",
        "Only 2 equipment per person (including flashlight)"
    ],
    "Paul Blart 3 Peas in a Pod": [
        "No strong flashlights",
        "Only 1 equipment per person (including flashlight)"
    ],
    "Schools Out, Ghosts In ": [
        "Highschool on the highest difficulty that is given to you first"
    ],
    "“With the Frizz, no way!!”": [
        "Highschool on the highest difficulty that is given to you first II",
        "Must stop hunt twice"
    ],
    "“Come at me ya pussy bitch!”": [
        "Must insult and attract the ghost during every hunt.",
        "Can’t hide, must run",
        "No jesus boi (Crucifix)"
    ],
    "The Security Guard": [
        "Only one person can have a flashlight, they are the security guard (not including UV)",
        "All other players can only refer to the guard as “pig”",
        "Other players can use candles"
    ],
    "Found Footage": [
        "1 person must stay in the van the whole time",
        "Only the person in the van can use the radio",
        "Every other player needs to wear a Go Pro",
        "The other players cannot return to the truck after they’ve entered",
        "Recommend bring equipment to the door of the building"
    ],
    "Trust Exercise": [
        "One person must stay in the truck and guide the “blind”",
        "One person in the “blind” group can communicate with the guide",
        "Everyone else is a mute"
    ],
    "Sacrifice! Sacrifice! Sacrifice!": [
        "Play the game normally until a hunt is happening",
        "When a hunt is happening one person must sacrifice themself to the ghost to keep the rest of the team alive"
    ],
    "The Offering": [
        "Once the room has been found only one person can stay inside the house and collect evidence",
        "The remaining players must remain outside until the person inside dies or finds all the evidence"
    ],
    "Only Starting Equipment": [
        "Don’t add ANYTHING before the game, good luck",
        "If you’re playing with more than 2 people, you may add 1 normal flashlight"
    ]
}

function new_challenge() {
    var num_challenges = Object.keys(challenges).length
    var random = Math.floor(Math.random() * num_challenges);

    return Object.keys(challenges)[random];
}

function present_challenge(chal) {
    var name = chal
    var desc = challenges[chal]

    document.getElementById("strat-name").innerHTML = name;

    $("ul").remove()

    var uList = document.createElement("ul")
    uList.classList.add("center-text")

    for (let i = 0; i < desc.length; i++) {
        const e = desc[i]
        let li = document.createElement("li")
        li.innerHTML = e
        uList.append(li)
    }
    
    $("#roulette").append(uList)
    $("#strat-intro").remove()
}

function button_press() {
    present_challenge(new_challenge());
}