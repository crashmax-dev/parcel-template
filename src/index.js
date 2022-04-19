const app = document.querySelector('#app')
const todo = requestTodo()

async function bootstrap() {
  // рендерим таблицу
  const { table, body } = renderTable([
    'user id',
    'id',
    'title',
    'completed',
    'action'
  ])

  // объявляем функции в текущей области видимости
  async function fetchTodo() {
    const data = await todo()
    addTodo(body, data)
  }

  // создаем кнопки для получения todo
  const button = document.createElement('button')
  button.textContent = 'Add'
  button.addEventListener('click', () => fetchTodo())

  // здесь мы вставляем наши элементы
  app.appendChild(table)
  app.appendChild(button)

  // получаем одну todo
  fetchTodo()
}

bootstrap()

// функция для получения todo
function requestTodo(page) {
  let currentPage = page ?? 1

  return async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${currentPage}`)
    const data = await res.json()
    currentPage++
    return data
  }
}

// функция для рендера таблицы
function renderTable(titles) {
  const table = document.createElement('table')
  const header = document.createElement('thead')
  const body = document.createElement('tbody')
  const tr = document.createElement('tr')

  for (const title of titles) {
    const th = document.createElement('th')
    th.textContent = title
    tr.appendChild(th)
  }

  header.appendChild(tr)
  table.appendChild(header)
  table.appendChild(body)

  return {
    table,
    body
  }
}

// функция для добавления todo в body таблицы
function addTodo(body, data) {
  const tr = document.createElement('tr')

  for (const value of Object.values(data)) {
    const th = document.createElement('th')
    th.textContent = value
    tr.appendChild(th)
  }

  // fix -> const todo = requestTodo(0)
  if (!tr.children.length) {
    return
  }

  const thButton = document.createElement('th')
  const button = document.createElement('button')
  button.textContent = 'Delete'
  button.addEventListener('click', () => tr.remove())
  thButton.appendChild(button)
  tr.appendChild(thButton)

  body.appendChild(tr)
}
