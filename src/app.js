
window.onload = function() {

        const myForm = document.getElementById("myForm");

        myForm.addEventListener("submit", e => {
            e.preventDefault();
            //console.log("submit evitado");
        

        const form = e.target;
        const {card,cvc,
            amount,
            firstname,
            lastname,
            city,
            postalcode,
            inlineFormSelectPref,
            message } = form;
        const Card = /^[0-9]{13}$/;
        const Cvc = /^[0-9]{4}$/;
        const Amount = /^[0-9]+$/;
        const Firstname = /^[a-zA-Z]+$/;
        const Lastname = /^[a-zA-Z]+$/;
        const City = /^[a-zA-Z]+$/;
        const Postalcode = /^[0-9]{7}$/;
        const Message = /^[a-zA-Z0-9.!#-_]+$/;    
        if (Card.test(card.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("card").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#card").classList.remove("alert-danger");
            document.getElementById("card").classList.add("is-valid");
        }
        if (Cvc.test(cvc.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("cvc").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#cvc").classList.remove("alert-danger");
            document.getElementById("cvc").classList.add("is-valid");
        }
        if (Amount.test(amount.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("amount").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#amount").classList.remove("alert-danger");
            document.getElementById("amount").classList.add("is-valid");
        }
        if (Firstname.test(firstname.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("firstname").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#firstname").classList.remove("alert-danger");
            document.getElementById("firstname").classList.add("is-valid");
        }
        if (Lastname.test(lastname.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("lastname").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#lastname").classList.remove("alert-danger");
            document.getElementById("lastname").classList.add("is-valid");
        }
        if (Lastname.test(lastname.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("lastname").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#lastname").classList.remove("alert-danger");
            document.getElementById("lastname").classList.add("is-valid");
        }
        if (City.test(city.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("city").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#city").classList.remove("alert-danger");
            document.getElementById("city").classList.add("is-valid");
        }
        if (Postalcode.test(postalcode.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("postalcode").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#postalcode").classList.remove("alert-danger");
            document.getElementById("postalcode").classList.add("is-valid");
        }
        if (Message.test(message.value) !== true) {
            document.querySelector("#alert").classList.remove("d-none");
            document.getElementById("message").classList.add("alert-danger");
        } else {
            document.querySelector("#alert").classList.add("d-none");
            document.querySelector("#message").classList.remove("alert-danger");
            document.getElementById("message").classList.add("is-valid");
        }
    });
};
    


