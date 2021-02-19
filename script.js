// submitButtonを無効にする/常時
// const $submit_btn = $('.submit_btn') //要素取得

// $submit_btn.prop('disabled', true) // buttonの無効化/常時

// まとめ
// button要素のdisabledは、button要素を無効にするための属性
// propは、引数の数によって挙動が異なる
//      $要素.prop(属性名) // 属性の値を取得(第一引数のみ)
//      $要素.prop(属性名, 値) // 属性に値を設定(第一引数に第二引数の値を設定)


// JavaScriptで書く

// const submit_btn = document.getElementsByClassName('submit_btn')
// console.log(submit_btn)
// for (let i = 0; i < submit_btn.length; i++) {
//     submit_btn[i].disabled = true // buttonの無効化 => 要素.disabled = true
//     console.log(submit_btn[i])
// }


// submitButtonを無効にする/未入力時のみ

// const $submit_btn = $('.submit_btn')
// const $text_field = $('.text_field')

// $submit_btn.prop('disabled', true)

// $text_field.on('keyup', () => {
//     const text_count = $text_field.val().length
//     if (text_count >= 1) {
//         $submit_btn.prop('disabled', false)
//     } else {
//         $submit_btn.prop('disabled', true)
//     }
// })


// JavaScriptで書く

// const submit_btn = document.getElementsByClassName('submit_btn')
// const text_field = document.getElementsByClassName('text_field')
// console.log(submit_btn)
// console.log(text_field)
// for (let i = 0; i < submit_btn.length; i++) {
//     // const text_count = text_field[0].value.length // addEventListenerの外で定義したがaddEventListener内では認識されていないみたい,addEventListener内に書く
//     submit_btn[i].disabled = true
//     text_field[0].addEventListener('keyup', () => {
//         const text_count = text_field[0].value.length // addEventListenerの関数内で定義
//         if (text_count >= 1) {
//             submit_btn[i].disabled = false
//         }
//         else {
//             submit_btn[i].disabled = true
//         }
//         console.log(text_field[0].value.length)
//         console.log(text_count)
//     })
// }


// サブミット時の処理を追加する
// サブミットが行われた時に、ポップアップを出してテキストフィールドの内容を消す
// jQuery

const $form = $('form')
const $submit_btn = $('.submit_btn')
const $text_field = $('.text_field')

$submit_btn.prop('disabled', true)

$text_field.on('keyup', () => {
    const text_count = $text_field.val().length
    if (text_count >= 1) {
        $submit_btn.prop('disabled', false)
    } else {
        $submit_btn.prop('disabled', true)
    }
})

$form.on('submit', (e) => { // サブミット時にはsubmitというイベントが発生、イベントオブジェクトを受け取るように引数「e」を設定
    e.preventDefault() // preventDefaultメソッド => イベントが発生した要素に紐づくブラウザの持つ機能がキャンセルされる。サブミットの中断、データ送信が行われない
    alert($text_field.val()+"が送信されました")
    $text_field.val('') // テキストフィールドの中身を空にする
    $submit_btn.prop('disabled', true) // テキストフィールドが空になってもサブミットボタンが無効化しなかった為、追加
})


// まとめ
// propはHTMLの属性の取得や設定ができるjQueryメソッド => 第一引数に属性名、第二引数に設定値（必須ではない）を渡して使用
// propに第一引数のみを渡して実行した場合、属性の設定値が取得できる
// フォームのサブミットが行われた場合、submitというイベントが発生する
// イベントオブジェクトが持つpreventDefaultメソッドは、要素に紐づくブラウザの持つ機能をキャンセルできる
// フォームのサブミットイベント発生時に実行される関数の中で、「e.preventDefault()」を実行するとデータの送信が行われなくなる



// JavaScriptで書く

// const form = document.getElementsByTagName('form')
// const submit_btn = document.getElementsByClassName('submit_btn')
// const text_field = document.getElementsByClassName('text_field')
// console.log(form)
// console.log(submit_btn)
// console.log(text_field)
// for (let i = 0; i < submit_btn.length; i++) {
//     submit_btn[i].disabled = true
//     text_field[0].addEventListener('keyup', () => {
//         const text_count = text_field[0].value.length
//         if (text_count >= 1) {
//             submit_btn[i].disabled = false
//         } else {
//             submit_btn[i].disabled = true
//         }
//     })
// }

// form[0].addEventListener('submit', (e) => {
//     e.preventDefault()
//     alert(text_field.value + 'が送信されました')
//     text_field[0].value = ''
// })
