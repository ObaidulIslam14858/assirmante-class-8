// modal
document.addEventListener('DOMContentLoaded', function () {
  const openModalBTN = document.getElementById('openModalBTN')
  const myModal = document.getElementById('myModal')
  const closeModalBTN = document.getElementById('closeModalBTN')
  // open the modal
  openModalBTN.addEventListener('click', function () {
    myModal.style.display = 'block'
  })
  // clase the modal
  closeModalBTN.addEventListener('click', function () {
    myModal.style.display = 'none'
  })
  // close the modal if user click
  window.addEventListener('click', function (even) {
    if (even.target === myModal) {
      myModal.style.display = 'none'
    }
  })
})
// calculator
function appendToDisplay(value) {
  const display = document.getElementById('display')
  display.value += value
}

function clearDisplay() {
  const display = document.getElementById('display')
  display.value = ''
}
function deleteLast() {
  const display = document.getElementById('display')
  display.value = display.value.slice(0, -1)
}

function calcultorResult() {
  const display = document.getElementById('display')
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Er'
  }
}
