document.querySelector('a[data-toggle="toggle"]')
  .addEventListener('click', event => {
    alert('here')
    //event.preventDefault();
    //event.stopPropagation();
    //document.querySelector('.card').classList.toggle('flipped')
  });