const arrow = document.querySelector('.fa-angle-double-down');
const adminMenu = document.querySelector('.admin-menu');
const dropDown = document.querySelector('.dropdown');
const navLinks = document.querySelectorAll('.sidebar ul li a span');

function handleDropDown() {
    let indicator = false;
    window.addEventListener('click', e => {
        if(adminMenu.contains(e.target)) {
                indicator = !indicator;
            if(indicator == true) {
                arrow.classList.add('rotate');
                dropDown.classList.add('show');      
            }

            else {
                arrow.classList.remove('rotate');
                dropDown.classList.remove('show');
            }
        }
        else {
            arrow.classList.remove('rotate');
            dropDown.classList.remove('show');
        }
    });
}

handleDropDown();