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
        let li = document.createElement('li')
        console.log(li)
        if (count % 3 === 0) {
            var text = document.createTextNode('カウント:' + count + '結果: 成功')
        } else {
            var text = document.createTextNode('カウント:' + count + '結果: 失敗')
        }
        li.appendChild(text)
        console.log(text)
        results.appendChild(li)
        console.log(li)
        count = 1
        counter.innerText = count
    }
}
action_btn.addEventListener('click', start_game)