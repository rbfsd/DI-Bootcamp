
const nameInput = document.getElementById('name')
nameInput.addEventListener('input', function() {
    const inputValue = nameInput.value
    const pattern = /^[A-Za-z]*$/
    if (!pattern.test(inputValue)) {
        nameInput.setCustomValidity('Only characters are allowed')
    } else {
        nameInput.setCustomValidity('')
    }
})
