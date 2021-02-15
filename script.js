const btn = $('#btn')
btn.on('click', () => {
    alert('button click(jQuery)')
})

// 素のJavaScriptで書いた場合
// const btn = document.getElementById('btn')
// btn.addEventListener('click', () => {
//     alert('button click(js)')
// })