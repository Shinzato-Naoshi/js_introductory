// タイトルの文字数チェック + 本文の文字数を制限する

// 要素情報取得
const $title = $('.title')
const $desc = $('.desc') // 追加
const $errors = $('.errors')
const $submit_btn = $('.submit_btn')

// サブミットボタンを無効に
$submit_btn.prop('disabled', true)

// keyupイベント発生時の処理
function validate() {
    let error_messages = [] // エラーメッセージを格納するための空の配列を定義。エラーメッセージが複数存在するため、配列を使用
    let title_length = $title.val().length // valはjQueryの「val」というメソッド。valメソッドはレシーバ要素のvalue属性の値を返すメソッド
    if (title_length < 1) error_messages.push('タイトルは必須です') // 配列に追加。pushメソッドは配列にデータを追加するためのメソッドで、レシーバの配列に引数で渡ってきた情報を追加
    if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします')　// 1行で書く場合、処理を行う「{}」は省略可能

    // 追加
    // 本文のkeyupイベント発生時の処理を同じ場所でまとめて書く
    let desc_length = $desc.val().length
    if (desc_length < 1) error_messages.push('本文は必須です')
    if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')
    // 追加

    if (error_messages.length > 0) {
        for (let cnt = 0; cnt < error_messages.length; cnt++) {
            $errors.append('<li>' + error_messages[cnt] + '</li>') // jQueryのappendメソッド。エラーメッセージを「$errors」の子要素として追加。「$errors」はul要素なので、li要素として追加
        }
        $submit_btn.prop('disabled', true)
    } else {
        $submit_btn.prop('disabled', false)
    }
}

// titleの場所でのkeyupイベント時に、作った関数validateを呼ぶ
$title.on('keyup', validate) // 追加

// descの場所でのkeyupイベント時に、作った関数validateを呼ぶ
$desc.on('keyup', validate) // 追加


// 削除
// 本文のkeyupイベント発生時の処理
// $desc.on('keyup', () => {
//     let error_messages = []
//     let desc_length = $desc.val().length
//     if (desc_length < 1) error_messages.push('本文は必須です')
//     if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')

//     if (error_messages.length > 0) {
//         for (let cnt = 0; cnt < error_messages.length; cnt++) {
//             $errors.append('<li>' + error_messages[cnt] + '</li>')
//         }
//         $submit_btn.prop('disabled', true)
//     } else {
//         $submit_btn.prop('disabled', false)
//     }
// })
// 削除


// JavaScript

// 要素取得
// const title = document.getElementsByClassName('title')
// const desc = document.getElementsByClassName('desc')
// const errors = document.getElementsByClassName('errors')
// const submit_btn = document.getElementsByClassName('submit_btn')

// // サブミットボタンを無効に
// for (let i = 0; i <submit_btn.length; i++) {
//     submit_btn[i].disabled = true

//     // keyupイベント
//     // for文の中に関数を書いているが外に出した方が良いかもしれない、この書き方でも動作はした
//     function validate() {
//         let error_messages = []
//         let title_length = title[0].value.length
//         if (title_length < 1) error_messages.push('タイトルは必須です')　// 1行で書く場合、処理を行う「{}」は省略可能
//         if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします')

//         // 追加
//         let desc_length = desc[0].value.length
//         if (desc_length < 1) error_messages.push('本文は必須です')
//         if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')
//         // 追加

//         if (error_messages.length > 0) {
//             for (let cnt = 0; cnt < error_messages.length; cnt++) {

//                 // エラー
//                 // errors[0].appendChild('<li>' + error_messages[cnt] + '</li>') // 文字列はノードではないのでそのままappendChildすることは出来ない。これでは「not of type 'Node'」とTypeエラーになる
//                 // errors[0].appendChild(document.createTextNode('<li>' + error_messages[cnt] + '</li>')) // テキストノードに変換する処理を挟む必要がある。だが、これだと<li>タグもテキストノードとしてそのまま表示される

//                 // 表示成功
//                 let li = document.createElement('li') // <li>タグを要素として作成
//                 li.appendChild(document.createTextNode(error_messages[cnt])) // document.createTextNodeでテキストノードに変換したものを作成した<li>タグに入れる
//                 errors[0].appendChild(li) // 要素errorsに<li>タグを表示
//                 console.log(error_messages[cnt])
//             }
//             submit_btn[i].disabled = true
//         } else {
//             submit_btn[i].disabled = false
//         }
//         // console.log(title_length)
//         // console.log(error_messages[0])
//     }
// }

// title[0].addEventListener('keyup', validate) // 追加

// desc[0].addEventListener('keyup', validate) // 追加


//  // 削除
//  // 本文のkeyupイベント
//     desc[0].addEventListener('keyup', () => {
//         let error_messages = []
//         let desc_length = desc[0].value.length
//         if (desc_length < 1) error_messages.push('本文は必須です')
//         if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')

//         if (error_messages.length > 0) {
//             for (let cnt = 0; cnt < error_messages.length; cnt++) {
//                 let li = document.createElement('li')
//                 li.appendChild(document.createTextNode(error_messages[cnt]))
//                 errors[0].appendChild(li)
//             }
//             submit_btn[0].disabled = true
//         } else {
//             submit_btn[0].disabled =false
//         }
//     })
//  // 削除



// 元のコード文
// タイトルの文字数チェック + 本文の文字数を制限する

// 要素情報取得
// const $title = $('.title')
// const $desc = $('.desc') // 追加
// const $errors = $('.errors')
// const $submit_btn = $('.submit_btn')

// // サブミットボタンを無効に
// $submit_btn.prop('disabled', true)

// // keyupイベント発生時の処理
// $title.on('keyup', () => {
//     let error_messages = [] // エラーメッセージを格納するための空の配列を定義。エラーメッセージが複数存在するため、配列を使用
//     let title_length = $title.val().length // valはjQueryの「val」というメソッド。valメソッドはレシーバ要素のvalue属性の値を返すメソッド
//     if (title_length < 1) error_messages.push('タイトルは必須です') // 配列に追加。pushメソッドは配列にデータを追加するためのメソッドで、レシーバの配列に引数で渡ってきた情報を追加
//     if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします')　// 1行で書く場合、処理を行う「{}」は省略可能
//     if (error_messages.length > 0) {
//         for (let cnt = 0; cnt < error_messages.length; cnt++) {
//             $errors.append('<li>' + error_messages[cnt] + '</li>') // jQueryのappendメソッド。エラーメッセージを「$errors」の子要素として追加。「$errors」はul要素なので、li要素として追加
//         }
//         $submit_btn.prop('disabled', true)
//     } else {
//         $submit_btn.prop('disabled', false)
//     }
// })

// // 本文のkeyupイベント発生時の処理
// $desc.on('keyup', () => {
//     let error_messages = []
//     let desc_length = $desc.val().length
//     if (desc_length < 1) error_messages.push('本文は必須です')
//     if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')

//     if (error_messages.length > 0) {
//         for (let cnt = 0; cnt < error_messages.length; cnt++) {
//             $errors.append('<li>' + error_messages[cnt] + '</li>')
//         }
//         $submit_btn.prop('disabled', true)
//     } else {
//         $submit_btn.prop('disabled', false)
//     }
// })


// JavaScript

// 要素取得
// const title = document.getElementsByClassName('title')
// const desc = document.getElementsByClassName('desc')
// const errors = document.getElementsByClassName('errors')
// const submit_btn = document.getElementsByClassName('submit_btn')

// // サブミットボタンを無効に
// for (let i = 0; i <submit_btn.length; i++) {
//     submit_btn[i].disabled = true

//     // keyupイベント
//     title[0].addEventListener('keyup', () => {
//         let error_messages = []
//         let title_length = title[0].value.length
//         if (title_length < 1) error_messages.push('タイトルは必須です')　// 1行で書く場合、処理を行う「{}」は省略可能
//         if (title_length > 10) error_messages.push('タイトルは10文字以内でお願いします')
//         if (error_messages.length > 0) {
//             for (let cnt = 0; cnt < error_messages.length; cnt++) {

//                 // エラー
//                 // errors[0].appendChild('<li>' + error_messages[cnt] + '</li>') // 文字列はノードではないのでそのままappendChildすることは出来ない。これでは「not of type 'Node'」とTypeエラーになる
//                 // errors[0].appendChild(document.createTextNode('<li>' + error_messages[cnt] + '</li>')) // テキストノードに変換する処理を挟む必要がある。だが、これだと<li>タグもテキストノードとしてそのまま表示される

//                 // 表示成功
//                 let li = document.createElement('li') // <li>タグを要素として作成
//                 li.appendChild(document.createTextNode(error_messages[cnt])) // document.createTextNodeでテキストノードに変換したものを作成した<li>タグに入れる
//                 errors[0].appendChild(li) // 要素errorsに<li>タグを表示
//                 console.log(error_messages[cnt])
//             }
//             submit_btn[i].disabled = true
//         } else {
//             submit_btn[i].disabled = false
//         }
//         // console.log(title_length)
//         // console.log(error_messages[0])
//     })

//     // 本文のkeyupイベント
//     desc[0].addEventListener('keyup', () => {
//         let error_messages = []
//         let desc_length = desc[0].value.length
//         if (desc_length < 1) error_messages.push('本文は必須です')
//         if (desc_length > 25) error_messages.push('本文は25文字以内でお願いします')

//         if (error_messages.length > 0) {
//             for (let cnt = 0; cnt < error_messages.length; cnt++) {
//                 let li = document.createElement('li')
//                 li.appendChild(document.createTextNode(error_messages[cnt]))
//                 errors[0].appendChild(li)
//             }
//             submit_btn[0].disabled = true
//         } else {
//             submit_btn[0].disabled =false
//         }
//     })
// }



    // 1、2どちらの書き方でも表示は出来た

    // 書き方-1
    // error_messages.push('タイトルは必須です')
    // errors[0].innerText = error_messages[0]

    // 書き方-2
    // let text = document.createTextNode('タイトルは必須です')
    // errors[0].appendChild(text)