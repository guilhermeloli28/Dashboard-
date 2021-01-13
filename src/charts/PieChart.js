import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

function PieChart(props) {

    const titulo = 'Quantidade de cadastros primeiro semestre';

    const [dados, setDados] = useState([
        ['Mês','Quantidade'],
        ['Janeiro', 33],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 15],
        ['Maio', 80],
        ['Junho', 27]
    ]);

    useEffect(() => {
        function alterarDados() {
            const dadosGraficos = dados.map(linha => {

                if(Number.isInteger(linha[1])) {
                    linha[1] = Math.floor(Math.random() * 101);
                }

                return linha;
            });

            setDados(dadosGraficos);
        }

        setInterval(() => alterarDados(), 5000);

    }, [dados]);
    

    return (
        <div>
            <Chart
                width={'400px'}
                height={'300px'} 
                chartType={'PieChart'}
                data={dados}
                options={{
                  title: titulo,
                  is3D: props.is3D,
                  pieHole: props.pieHole
                }} />
        </div>
    );
}

export default PieChart;