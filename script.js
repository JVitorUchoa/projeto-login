document.addEventListener("DOMContentLoaded", function() {
    const loginRadio = document.getElementById("login");
    const cadastroRadio = document.getElementById("cadastro");
    const caixaLogin = document.getElementById("caixa-login");
    const caixaCadastro = document.getElementById("caixa-cadastro");

    function toggleForms() {
        if (loginRadio.checked) {
            caixaLogin.style.display = "block";
            caixaCadastro.style.display = "none";
        } else if (cadastroRadio.checked) {
            caixaLogin.style.display = "none";
            caixaCadastro.style.display = "block";
        }
    }

    toggleForms();

    loginRadio.addEventListener("change", toggleForms);
    cadastroRadio.addEventListener("change", toggleForms);
});
