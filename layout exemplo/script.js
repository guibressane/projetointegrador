const url = "http://localhost:3000";

let array = []

const formatar = () => {
    let html = ""
    array.map((item) => {
        html += `<div class="comments" style="padding:20px 10px; border-bottom:2px solid #aaa">
    <p class="col-9">${item.comment}</p>
    <div class="col-3">    
    </div>    
    <audio preload="none" id="audio${item.id}">                
      <source src="${url}/comments/play/${item.id}" type="audio/wav">
    </audio>
    <button type="button" class="btn btn-primary" style="float: right; margin-top: -30px" 
    onclick="ouvir(${item.id})"><i class="fas fa-volume-up"></i></button>  
  </div>`;
    })

    document.getElementById("comentarios").innerHTML = html
}

const lista = async () => {
    const res = await axios.get(`${url}/comments`)
    array = res.data
    formatar()
}

const cadastro = () => {
    const formulario = document.getElementById("meuForm")
    formData = new FormData(formulario)
    const body = { comment: formData.get("comment") }
    
    axios
    .post(`${url}/comments`, body)
    .then((res) => {
      array.unshift(res.data);
      formatar();
    })
    .catch((err) => {
        alert(err.response.data)
    });
}

const ouvir = id => document.getElementById(`audio${id}`).play()

lista()