let todos = document.querySelectorAll('li.todo-item');

todos.forEach(item => {

    item.addEventListener('click', event => {
       let clickedItem = event.target;

       
       if (clickedItem.tagName !== 'LI') {
            clickedItem = event.target.parentElement;

       }

       if (event.target.tagName === 'A') {
        clickedItem.remove();

   }

       let checkbox = clickedItem.querySelector('input');
       let label = clickedItem.querySelector('label');


       if(checkbox.checked) {
            checkbox.checked = false;
            label.style.textDecoration = '';
       } else {
            checkbox.checked= true;
            label.style.textDecoration = 'line-through'
       }
    })
});
