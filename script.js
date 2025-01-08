document.getElementById("pay-btn").addEventListener("click", function () {
    // Simulação de pagamento (substitua por integração real)
    const paymentSuccess = confirm("Deseja acessar o conteúdo Premium?");

    if (paymentSuccess) {
        document.getElementById("premium-content").classList.remove("hidden");
        alert("Pagamento efetuado com sucesso! Acesse o conteúdo Premium.");
    } else {
        alert("Pagamento cancelado.");
    }
});
