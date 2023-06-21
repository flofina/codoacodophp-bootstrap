const descEstudiante = 0.8;
const descTrainee = 0.5;
const descJunior = 0.15;

const valorTicket = 200;
let valorTicketFinal = 0;
let totalAPagar = 0;

const resumen = document.getElementById("btnResumen").addEventListener("click", precioFinal);

function precioFinal(event) {
   
    let categoria = document.getElementById("categoria").value;
    if (categoria == "1") {
        valorTicketFinal = valorTicket - (valorTicket * descEstudiante);
    } else if (categoria == "2") {
        valorTicketFinal = valorTicket - (valorTicket * descTrainee);
    } else if (categoria == "3") {
        valorTicketFinal = valorTicket - (valorTicket * descJunior);
    } else {
        valorTicketFinal = valorTicket;
    };

    let cantidadTickets = document.getElementById("cantidad").value;
    cantidadTickets = parseInt(cantidadTickets);
    totalAPagar = cantidadTickets * valorTicketFinal;
    
    if (totalAPagar) { 
        event.preventDefault();
        const total = document.getElementById("total");
        total.setAttribute("value", `Total a Pagar: $${totalAPagar}`);
        total.innerHTML = total.getAttribute('value');
    };

};

const borrarDatos = document.getElementById("btnBorrar").addEventListener("click", borrar);
function borrar() {
   
    total.setAttribute("value", `Total a Pagar: $`);
    total.innerHTML = total.getAttribute('value');

};