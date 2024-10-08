const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasnoMundo = (total.pessoas.Mundo / 1e9)
    const horas = parseInt(total.tempo_medio)
    const minutes = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConetcdas / pessoasNoMundo) *100) .toFixed(2)

    const paragrafo = document.createElement ('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 'Voce sabia que o mundo tem <span>${pessoasNoMundo} Bilhoes</span> de pessoaas e que aproximadamente <span>${pessoanConectadas}  bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformaçoesGlobais()