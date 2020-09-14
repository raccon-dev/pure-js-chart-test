const root = document.querySelector('#chart');
const data = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13, 18];

const handleChartColor = (value) => {
    if (value <= 5 || value == 0) {
        return [' rgb(2,0,28)', 'linear-gradient(101deg, rgba(2,0,28,1) 0%, rgba(78,218,53,1) 0%, rgba(145,231,223,1) 100%)']
    } else if (value > 5 && value <= 10) {
        return ['rgb(2,0,28)', 'linear-gradient(101deg, rgba(2,0,28,1) 0%, rgba(198,218,53,1) 0%, rgba(231,174,145,1) 100%)']
    } else if (value > 10) {
        return [' rgb(2,0,28)', 'linear-gradient(101deg, rgba(2,0,28,1) 0%, rgba(218,53,53,1) 0%, rgba(231,145,177,1) 100%)']
    }
}

const main = () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const td = document.createElement('td');
    const tr = document.createElement('tr');

    let chartValueBody = td.cloneNode();
    let chartValue = document.createElement('span')
    let chartValuesList = [0, ...data].sort((a, b) => a - b);

    chartValuesList = chartValuesList.filter((v, i) => chartValuesList.indexOf(v) === i)

    for (chartSelfValue of chartValuesList) {
        let cloneChartValue = chartValue.cloneNode()
        cloneChartValue.style.position = 'absolute';
        cloneChartValue.style.bottom = `${(chartSelfValue * 20)}px`;
        cloneChartValue.textContent = chartSelfValue

        chartValueBody.appendChild(cloneChartValue)
    }

    chartValueBody.style.position = `relative`
    chartValueBody.style.width = `40px`
    chartValueBody.style.height = `${(Math.max(...data)) * 20}px`


    tr.appendChild(chartValueBody)


    for (let i = 0; i < data.length; i++) {

        let cloneChart = td.cloneNode();
        cloneChart.style.width = `40px`;
        cloneChart.style.height = `${data[i] * 20}px`;
        cloneChart.style.position = `relative`;

        let chartIndex = document.createElement('p');
        chartIndex.textContent = i;
        chartIndex.style.position = `absolute`;
        chartIndex.style.left = `calc( 50% - 8px)`;
        chartIndex.style.bottom = `-30px`;

        let chart = document.createElement('div')
        chart.style.height = `${data[i] * 20}px`;
        chart.style.width = `40px`;


        const [backgroundColorValue, backgroundGradient] = handleChartColor(data[i])

        chart.style.background = backgroundColorValue;
        chart.style.background = backgroundGradient;
        chart.style.position = `absolute`;
        chart.style.left = `0`;
        chart.style.bottom = `0`;
        cloneChart.appendChild(chart)
        cloneChart.appendChild(chartIndex)
        tr.appendChild(cloneChart)

    }

    tbody.appendChild(tr)
    table.appendChild(tbody)
    root.appendChild(table)
}


window.addEventListener('DOMContentLoaded', () => {
    main()
});
