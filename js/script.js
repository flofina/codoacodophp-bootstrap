const descEstudiante = 0.8;
const descTrainee = 0.5;
const descJunior = 0.15;

const valorTicket = 200;
let valorTicketFinal = 0;
let totalAPagar = 0;

const resumen = document.getElementById("btnResumen").addEventListener("click", precioFinal);

function precioFinal() {

    let categoria = document.getElementById("categoria").value;
    if (categoria == "1") {
        valorTicketFinal = valorTicket - (valorTicket * descEstudiante);
    } else if (categoria == "2") {
        valorTicketFinal = valorTicket - (valorTicket * descTrainee);
    } else if (categoria == "3") {
        valorTicketFinal = valorTicket - (valorTicket * descJunior);
    } else {
        valorTicketFinal = valorTicket;
    }

    let cantidadTickets = document.getElementById("cantidad").value;
    cantidadTickets = parseInt(cantidadTickets);
    
    totalAPagar = cantidadTickets * valorTicketFinal;

    const total = document.getElementById("total");

    total.setAttribute("value", `Total a pagar: $${totalAPagar}`);

    total.innerHTML = total.getAttribute('value');

}