import { listenerCount, umask } from 'process';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let but = document.createElement('button');
    but.textContent = 'Удали меня';
    but.addEventListener('click', remove);
    document.body.append(but);
}

function remove(e) {
    e.target.parentNode.removeChild(e.target);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.addEventListener(
            'mouseover',
            (event) => (event.target.title = event.target.textContent),
        );
        ul.appendChild(li);
    }
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.addEventListener('click', (event) => {
        let text = toString(event.target.textContent);
        if (!text.endsWith('/')) {
            event.target.textContent =
                event.target.textContent + ' ' + event.target.href;
            return;
        }
    });
    document.body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    ul.appendChild(addLi());
    let but = document.createElement('button');
    but.textContent = 'Добавить пункт';
    but.addEventListener('click', (event) => {
        ul.appendChild(addLi());
    });
    document.body.append(ul);
    document.body.append(but);
}

function addLi() {
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    li.addEventListener('click', (event) => {
        li.textContent += '!';
    });
    return li;
}
