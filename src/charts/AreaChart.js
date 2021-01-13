import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

function AreaChart(props) {

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

        const intervalId = setInterval(() => alterarDados(), 5000);

        return () => {
            clearInterval(intervalId);
        }

    }, [dados]);

    return (
        <div>
            <Chart
                width={'400px'}
                height={'300px'} 
                chartType={'AreaChart'}
                data={dados}
                options={{
                    title: titulo,
                    hAxis: { title: 'Mês' },
                    vAxis: { title: 'Quantidade' },
                    animation: { duration: 1000, easing: 'out', startup: true }
                }} />
        </div>
    );
}

export default AreaChart;