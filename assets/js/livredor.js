 let note = 0;
let etoiles = document.querySelectorAll('.etoile');

 
etoiles.forEach((etoile, id) => {
  etoile.addEventListener('click', (event) => {
    note = (id + 1);
    event.target.classList.remove('black');
    event.target.classList.add('gold');
  });
  etoile.addEventListener('mouseenter', (event) => {
    let cible = event.target.classList;
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

// js bouton pour soumettre les avis des clients



const formval = document.querySelector('.form_livredor');


formval.addEventListener('submit', function(event) {
  event.preventDefault();
  confirmationAvis();
  formval.reset();
}, true);

function confirmationAvis(){
  Swal.fire({
    text: 'Merci pour votre commentaire',
    confirmButtonText: 'A bientôt'
  });
}

