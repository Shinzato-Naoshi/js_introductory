const fruits = ['リンゴ', 'モモ', 'バナナ']
const ul = document.getElementById('fruit_list')

for(let cnt = 0; cnt < fruits.length; cnt++) {
    const li = document.createElement('li')
    const text = document.createTextNode(fruits[cnt])
    li.appendChild(text)
    ul.appendChild(li)
}