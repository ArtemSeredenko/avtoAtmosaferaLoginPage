// Получаем элементы модальных окон и кнопок
const loginModal = document.getElementById('loginModal')
const registerModal = document.getElementById('registerModal')
const loginBtn = document.getElementById('loginBtn')
const goToRegisterBtn = document.getElementById('goToRegister')
const goToLoginBtn = document.getElementById('goToLogin')
const closeButtons = document.querySelectorAll('.closeBtn')

// Функция для закрытия всех модальных окон
function closeAllModals() {
  loginModal.style.display = 'none'
  registerModal.style.display = 'none'
}

// Открытие модального окна входа
loginBtn.addEventListener('click', (event) => {
  event.stopPropagation() // Предотвращаем всплытие, чтобы клик не воспринимался как клик вне модального окна
  closeAllModals()
  loginModal.style.display = 'block'
})

// Открытие модального окна регистрации
goToRegisterBtn.addEventListener('click', (event) => {
  event.stopPropagation() // Аналогично предотвращаем всплытие
  closeAllModals()
  registerModal.style.display = 'block'
})

// Возврат к модальному окну входа
goToLoginBtn.addEventListener('click', (event) => {
  event.stopPropagation() // И здесь тоже предотвращаем всплытие
  closeAllModals()
  loginModal.style.display = 'block'
})

// Закрытие модального окна при клике на крестик
closeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation() // Предотвращаем всплытие, чтобы не активировать закрытие по клику вне модального окна
    closeAllModals()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  // Находим элемент иконки глаза
  const togglePasswordVisibility = document.querySelector('.form-icon-eye')

  // Добавляем обработчик события клика по иконке
  togglePasswordVisibility.addEventListener('click', function () {
    // Находим поле ввода пароля
    const passwordInput = document.getElementById('user-password')

    // Проверяем тип поля и изменяем его
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'
      // Можно добавить изменение иконки на "глаз закрыт", если есть такая иконка
    } else {
      passwordInput.type = 'password'
      // Можно добавить изменение иконки обратно на "глаз открыт"
    }
  })
})
