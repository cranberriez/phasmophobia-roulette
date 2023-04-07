const challenges = gameModes
const repeat_wait = challenges.length - 5
let past_challenges = []
let last_chal = null;

$(function() {
    $("#chal-history").on('click', 'li', function() {
        let index = $(this).data('index')
        go_to_challenge(index, $(this))
    })
})

function go_to_challenge(index, item) {
    item.remove();
    present_challenge(index, true)
}

function new_challenge() {
    let len = Object.keys(challenges).length
    return Math.floor(Math.random() * len)
}

function get_challenge() {
    let chal = new_challenge()
    if (check_repeat(chal)) {
        return get_challenge()
    } else {
        return chal
    }
}

function clear_challenge() {
    document.getElementById("strat-name").innerHTML = ""
    $("#strat-intro").remove()
}

function add_to_history(index) {
    // Create a new list item with a data attribute of "index"
    const newItem = $("<li>").text(challenges[index].name).attr("data-index", index);

    // Append the new item to the top of the list
    $("#chal-history").prepend(newItem);

    // Check if the list has a length of 5
    if ($("#chal-history li").length > 10) {
        // If the list has a length of 5, remove the last item
        $("#chal-history li:last-child").remove();
    }
}
function present_challenge(index, goto = false) {
    let challenge = challenges[index]
    let name = challenge.name
    let desc = challenge.description

    if (last_chal !== null)
        add_to_history(last_chal)

    last_chal = index

    $("#strat-name").text(name)
    $("#strat-desc ").text(desc)
    $("#strat-intro").remove()
}

function check_repeat(index) {
    if (past_challenges.includes(index)) {
        return true
    }
    else {
        if (past_challenges.length >= repeat_wait) {
            past_challenges.pop()
        }

        past_challenges.unshift(index)
        return false
    }
}

function button_press() {
    clear_challenge()
    present_challenge(get_challenge())
}