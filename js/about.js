const ctx = document.getElementById("chart");

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const data = {
    labels: labels,
    datasets: [{
        data: [0, 0, 0, 0, 0, 3, 4, 4, 7, 6, 9, 14],
        fill: false,
        borderColor: '#ecc900',
        tension: 0.1
    }]
}
const config = {
    type:'line',
    data: data
}

const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true,
                ticks: {
                    color:'#dcdcdc'
                },
                grid: {
                    color:'#dcdcdc'
                }
            },
            x: {
                stacked:true,
                ticks: {
                    color:'#dcdcdc'
                },
                grid: {
                    color:'#dcdcdc'
                }
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
