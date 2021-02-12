const action_btn = document.getElementById('action_btn')
const counter = document.getElementById('counter')
let count = 1

function start_game() {
    const btn_text = action_btn.innerText

    if (btn_text === 'start') {
        setInterval(() => {
            count++
            counter.innerText = count
        }, 200)
        action_btn.innerText = 'stop'
    } else if (btn_text === 'stop') {
        console.log('This is stop')
    }
}
action_btn.addEventListener('click', start_game)