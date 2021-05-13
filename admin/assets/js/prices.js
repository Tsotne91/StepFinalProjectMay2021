// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelectorAll('.edit');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = "block";
    });
});
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const plusModal = document.getElementById("plusModal");

// Get the button that opens the modal
const plusBtn = document.querySelector('.plus-cont');

// Get the <span> element that closes the modal
const plusSpan = document.getElementsByClassName("plusClose")[0];

// When the user clicks on the button, open the modal
plusBtn.onclick = function() {
  plusModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
plusSpan.onclick = function() {
  plusModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == plusModal) {
    plusModal.style.display = "none";
  }
}


const deleteModal = document.getElementById("deleteModal");

// Get the button that opens the modal
const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach(button => {
  button.addEventListener('click', () => {
      deleteModal.style.display = "block";
  });
});

// Get the <span> element that closes the modal
const deleteSpan = document.getElementsByClassName("deleteClose")[0];

// When the user clicks on the button, open the modal
deleteBtn.onclick = function() {
  deleteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
deleteSpan.onclick = function() {
  deleteModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deleteModal) {
    deleteModal.style.display = "none";
  }
}