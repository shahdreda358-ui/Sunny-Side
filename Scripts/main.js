const registerForm = document.getElementById('registerForm');
const registerToast = document.getElementById('myToast');

if (registerForm && registerToast) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        bootstrap.Toast.getOrCreateInstance(registerToast, { autohide: false }).show();
    });
}