 let note = 0;
let etoiles = document.querySelectorAll('.etoile');
 
etoiles.forEach((etoile, id) => {
  etoile.addEventListener('click', (elem) => {
    note = (id + 1);
    elem.target.classList.remove('black');
    elem.target.classList.add('gold');
  });
  etoile.addEventListener('mouseenter', (elem) => {
    let cible = elem.target.classList;
    cible.remove('grey');
    cible.remove('gold');
    cible.add('black');
     
    for (let i = 0; i < etoiles.length; i++) {
      let classes = etoiles[i].classList;
      if (i < id) {
        classes.add('gold');
        classes.remove('grey');
        classes.remove('black');
      }
      if (i > id) {
        classes.add('grey');
        classes.remove('black');
        classes.remove('gold');
      }
    }
  });
});