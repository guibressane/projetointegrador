const url = "http://localhost:3000";

const cadastroRegistration = () => {

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value.toLowerCase()
    const senha1 = document.getElementById("senha1").value
    const senha2 = document.getElementById("senha2").value

    if (senha1 != senha2) {
        alert("As senhas digitadas não coincidem")
    } else {
        const body = {
            name: nome,
            email,
            password: senha1
        }

        axios
            .post(`${url}/registrations`, body)
            .then(() => alert("Cadastro realizado com sucesso."))
            .catch((err) => {
                alert(err.response.data)
            });
    }
}

const qualidade = (estado) => quality = estado

const cadastroDonations = (a = quality) => {

    const produto = document.getElementById("produto").value
    const especificacao = document.getElementById("especificacao").value
    const retirada = document.getElementById("retirada").value
    const qualidade = a

    const body = {
        product: produto,
        specification: especificacao,
        pickup: retirada,
        quality: qualidade
    }

    axios
        .post(`${url}/donations`, body)
        .then(() => alert("Cadastro realizado com sucesso."))
        .catch((err) => {
            alert(err.response.data)
        });
}