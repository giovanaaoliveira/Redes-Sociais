async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    const res= await fetch(url)
    const dados= await res.json()
    const nomeDasRedes= Object.keys(dados)
    const quantidadeDeUsuarios= Object.values(dados)

  

    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('grafico-container').appendChild(grafico)
    Plotly.newplot(grafico, data)

}

quantidadeDeUsuarios()