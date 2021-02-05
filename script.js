const time_el = document.getElementById('time_el')
console.log(new Date())
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())

setInterval(function() {
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()
    time_el.innerText = hour + ':' + min + ':' + sec
}, 1000)