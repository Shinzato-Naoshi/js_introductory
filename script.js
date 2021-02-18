// console.log($('input'))
// console.log($('input[type="radio"]'))
$('input[type="radio"]').on('change', (e) => {
    // console.log($('input[type="radio"]'))
    // console.log(e)
    // console.log(e.currentTarget)
    const text = $(e.currentTarget).next().text()
    $('.fruits').text(text)
})


// javascriptで書く
// 結果:素のJavaScriptで書くとfor文やif文を使う形になると思われる
// この場合if文だと1つ1つ書く形になる為、for文の方が汎用性は高そう
// またHTMLCollection等での要素の取得は、複数ノードで情報が多い為かfor文を使った後でないとaddEventListenerが走らない

// for文を使って同じ事をやってみる
// const radio = document.getElementsByTagName('input') // HTMLCollectionでの取得
// // const radio = document.getElementsByName('fruits') // NodeListでの取得、HTMLCollectionとの違いはあまり感じられない、複数ノード
// const fruit = document.getElementsByClassName('fruits')[0] // 表示する側のpタグの要素の取得
// console.log(radio)
// console.log(document.getElementsByName('fruits'))
// console.log(fruit)
// for (let i = 0; i < radio.length; i++) {
//     radio[i].addEventListener('change', (e) => {
//         fruit.innerText = radio[i].nextElementSibling.innerText
//         console.log(radio[i])
//     })
// }



// formタグを使う場合の要素取得方法
// if文
// const fruits = document.baskets.fruits // formタグの場合はタグ内のname=""の名前を連結させて要素が取れる
// const fruit = document.getElementsByClassName('fruits')[0] // 表示する側のpタグの要素の取得
// console.log(fruits)
// console.log(fruit)
// console.log(document.baskets.fruits[0].nextElementSibling.innerText)
// // console.log(radio[0].nextElementSibling.innerText)
// document.baskets.addEventListener('change', (e) => {
//     if (fruits[0].checked === true) {
//         fruit.innerText = fruits[0].nextElementSibling.innerText
//     } else if (fruits[1].checked === true) {
//         fruit.innerText = fruits[1].nextElementSibling.innerText
//     } else {
//         fruit.innerText = fruits[2].nextElementSibling.innerText
//     }
//     console.log(document.baskets.fruits.value)
// })
// radio[0].addEventListener('change', (e) => {
//     console.log(document.getElementsByClassName('fruits'))
//     document.getElementsByClassName('fruits')[0].innerText = radio[0].nextElementSibling.innerText
// })
