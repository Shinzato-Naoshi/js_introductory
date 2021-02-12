const action_btn = document.getElementById('action_btn')
const counter = document.getElementById('counter')
let count = 0
let interval_id

function start_game() {
    const btn_text = action_btn.innerText

    if (btn_text === 'start') {
        interval_id = setInterval(() => {
            count++
            counter.innerText = count
        }, 200)
        action_btn.innerText = 'stop'
    } else if (btn_text === 'stop') {
        clearInterval(interval_id)
        action_btn.innerText = 'start'
        count = 0
        counter.innerText = count
    }
}
action_btn.addEventListener('click', start_game)