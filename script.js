const action_btn = document.getElementById('action_btn')
const counter = document.getElementById('counter')
let count = 1

function start_game() {
    setInterval(() => {
        count++
        counter.innerText = count
    }, 200)
}
action_btn.addEventListener('click', start_game)