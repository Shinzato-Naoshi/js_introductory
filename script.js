const $text_field = $('.text_field')
const $text_count = $('.text_count')
// console.log($text_count, $text_field)

$text_field.on('keyup', () => {
    const text = $text_field.val()
    // console.log(text)
    $text_count.text(text.length)
})

// まとめ
// テキストフィールドに対して情報が入力された時、keyupというイベントが発生する
// valは要素のvalue属性を取得するためのjQueryメソッド
// textは要素のテキスト情報を取得したり、変更したりすることのできるjQueryメソッド


// 素のJavaScriptの場合

// addEventListenerは単一ノードのみの指定になる為、idで取得する必要あり
// getElementsByClassNameで取得するとHTMLCollectionというオブジェクトになる。
// HTMLCollectionは複数ノードになり、addEventListenerはerrorになるので注意
// classで取得してやるやり方もあるかもしれない

// text_fieldとtext_countをclassではなくidにした場合
// const text_field = document.getElementById('text_field')
// const text_count = document.getElementById('text_count')
// console.log(text_field, text_count)

// text_field.addEventListener('keyup', function () {
//     const text = text_field.value
//     text_count.innerText = text.length
// })