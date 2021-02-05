const action_btn = document.getElementById('action_btn')
const counter = document.getElementById('counter')
let count = 1

action_btn.addEventListener('click', () => {
    setInterval(() => {
        count++
        counter.innerText = count
    }, 200)
})