document.addEventListener('DOMContentLoaded', async () => {
        // Fetches air quality data from the '/api/data' endpoint and converts it to JSON. 
    // The data is then mapped to extract labels (formatted dates) and values (air quality readings).
    const response = await fetch('/api/data');
    const data = await response.json();

    const labels = data.map(item => new Date(item.observationtimeutc).toLocaleString());
    const values = data.map(item => item.value);

    //fetches air quality data, formats it, and then uses Chart.js to create a line chart visualizing the data. 
    //The configuration object defines various parameters like the type of chart, data to be plotted, colors, and how the axes should be displayed.
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Observation Values',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute'
                    }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
