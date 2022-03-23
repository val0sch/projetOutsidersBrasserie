const iform = document.querySelector("#validation");
iform.addEventListener("submit", function(event) {
    event.preventDefault();
    window.history.back();
    reservationOk();
}, true);


function reservationOk(){
  Swal.fire({
    title: 'Merci !',
    text: 'Votre réservation à été effectuée',
    icon: 'succes',
    confirmButtonText: 'Merci.'
  });
}