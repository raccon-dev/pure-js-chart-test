const root = document.querySelector('#chart');
const data = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13, 18];
const colors = ['green', 'yellow', 'red']


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

    let gradation = td.cloneNode();
    let gradwrapper = document.createElement('span')
    let gradationArrays = [0, ...data].sort((a, b) => a - b);

    gradationArrays = gradationArrays.filter((v, i) => gradationArrays.indexOf(v) === i)

    for (gradVal of gradationArrays) {
        let clss = gradwrapper.cloneNode()
        clss.style.position = 'absolute';
        clss.style.bottom = `${(gradVal * 20)}px`;
        clss.textContent = gradVal

        gradation.appendChild(clss)
    }




    gradation.style.position = `relative`
    gradation.style.width = `40px`
    gradation.style.height = `${(Math.max(...data)) * 20}px`



    tr.appendChild(gradation)


    for (let i = 0; i < data.length; i++) {

        let clone = td.cloneNode();
        clone.style.width = `40px`;
        clone.style.height = `${data[i] * 20}px`;
        clone.style.position = `relative`;

        let graphsValue = document.createElement('p');
        graphsValue.textContent = i;
        graphsValue.style.position = `absolute`;
        graphsValue.style.left = `calc( 50% - 8px)`;
        graphsValue.style.bottom = `-30px`;

        let graphs = document.createElement('div')
        graphs.style.height = `${data[i] * 20}px`;
        graphs.style.width = `40px`;


        const [backgroundColorValue, backgroundGradient] = handleChartColor(data[i])

        graphs.style.background = backgroundColorValue;
        graphs.style.background = backgroundGradient;
        graphs.style.position = `absolute`;
        graphs.style.left = `0`;
        graphs.style.bottom = `0`;
        clone.appendChild(graphs)
        clone.appendChild(graphsValue)
        tr.appendChild(clone)

    }

    tbody.appendChild(tr)
    table.appendChild(tbody)
    root.appendChild(table)
}
main()