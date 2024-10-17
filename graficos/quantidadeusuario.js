import { getCSS, TickConfig } from "./common"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    const res= await fetch(url)
    const dados= await res.json()
    const nomeDasRedes= Object.keys(dados)
    const quantidadeDeUsuarios= Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y:quantidadeDeUsuarios,
            type: 'bar' ,
            marker: {
                color: getCSS('--primary-color')

            }

        }
    ]
  
    const laytout ={
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: ('--bg-color'),
        title:{
            text: 'Rede Social com mais usuarios',
            x: 0,

            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: TickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary-color')

            }
        }
    },
    yaxis: {
        tickfont: TickConfig,
        title: {
            text: 'Biloes de usuarios ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}

    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('grafico-container').appendChild(grafico)
    Plotly.newplot(grafico, data, layout)

}

quantidadeDeUsuariosPorRede()