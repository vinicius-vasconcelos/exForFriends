document.querySelector('.card')
  .addEventListener('mouseenter', event => {
    let el = event.target;
    
    let title = document.createElement('H2');
      title.appendChild(document.createTextNode(el.getAttribute('data-title')));
      title.classList.add('title-book');
    let author = document.createElement('P');
      author.appendChild(document.createTextNode(el.getAttribute('data-author')));
      author.classList.add('author-book');
    
    let divStatus = document.createElement('SMALL');
      divStatus.classList.add('read-status');
    let ico = document.createElement('DIV');
      ico.classList.add('ico-status');
    let icoP = document.createElement('P');

      if(el.getAttribute('data-isRead') == 'false') {
        icoP = document.createTextNode('Want to read ?');
        ico.classList.add('ico-status--want-read');
      } else {
        icoP = document.createTextNode('You already read !')
      }
      
    divStatus.appendChild(ico);
    divStatus.appendChild(icoP);

    let divInformation = document.createElement('DIV');
      divInformation.classList.add('card-information');
      divInformation.appendChild(title);
      divInformation.appendChild(author);
      divInformation.appendChild(divStatus);

    let divbutton = document.createElement('DIV');
      divbutton.classList.add('card-btn')
    let button = document.createElement('BUTTON');
      button.classList.add('card-btn--btn-primary');
      button.appendChild(document.createTextNode('See More'))
     
      divbutton.appendChild(button);


    let divBlack = document.createElement('DIV');
      divBlack.classList.add('card-hover');
      divBlack.appendChild(divInformation);
      divBlack.appendChild(divbutton);
     
    el.appendChild(divBlack);

    
    
    
     

     
  });

  document.querySelector('.card')
  .addEventListener('mouseleave', event => event.target.lastChild.remove());