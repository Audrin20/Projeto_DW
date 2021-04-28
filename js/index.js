const login = document.getElementById('formulario')
const user = document.getElementById('user')
const password = document.getElementById('password')

login.addEventListener('submit', e => {
    if (user.value == 'admin' && password.value == 'admin' || user.value == 'audrin' && password.value == 'audrin123'){
        alert('Access granted!')
    } else {
        e.preventDefault()
        alert('Usuário não autorizado!')
    }
})