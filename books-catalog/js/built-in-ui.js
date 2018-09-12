/* Данный JS код */
const responseBook = new XMLHttpRequest(),
      content = document.querySelector('#content');

responseBook.addEventListener("load", onLoad);
responseBook.open("GET","https://neto-api.herokuapp.com/book/");
responseBook.send();

function onLoad() {
  let data = JSON.parse(responseBook.responseText);
  let str = '';
  data.forEach(function (book) {
    str += `<li data-title="${book.title}" data-author="${book.author.name}" data-info="${book.info}" data-price="${book.price}"><img src="${book.cover.small}"></li>`
  })
  content.innerHTML = str;
};
// Регулируем видимость карточки
function toggleCardVisible () {
 document.getElementById('content').classList.toggle('hidden');
 document.getElementById('card').classList.toggle('hidden');
}


document.getElementById('close').addEventListener('click', toggleCardVisible);

document.getElementById('content').addEventListener('click', (event) => {
    let target = null;
    if (event.target.tagName === 'LI') {
        target = event.target;
    }
    if (event.target.parentNode.tagName === 'LI') {
        target = event.target.parentNode;
    }

    if (target) {
      toggleCardVisible();
      document.getElementById('card-title').innerHTML = target.dataset.title;
      document.getElementById('card-author').innerHTML = target.dataset.author;
      document.getElementById('card-info').innerHTML = target.dataset.info;
      document.getElementById('card-price').innerHTML = target.dataset.price;
    }
});
