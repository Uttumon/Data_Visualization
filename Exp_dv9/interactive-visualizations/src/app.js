const mapContainer = document.getElementById('map');
const chartContainer = document.getElementById('chart');

let map;
let chart;

function initMap() {
    map = new google.maps.Map(mapContainer, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });

    const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Hello World!',
    });

    google.maps.event.addListener(marker, 'click', function() {
        updateChart();
    });
}

function initChart() {
    chart = new google.visualization.PieChart(chartContainer);
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 8],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 8],
    ]);

    const options = {
        title: 'My Daily Activities',
    };

    chart.draw(data, options);
}

function updateChart() {
    const newData = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', Math.random() * 10],
        ['Eat', Math.random() * 10],
        ['Commute', Math.random() * 10],
        ['Watch TV', Math.random() * 10],
        ['Sleep', Math.random() * 10],
    ]);

    chart.draw(newData, { title: 'Updated Daily Activities' });
}

function loadVisualization() {
    initMap();
    initChart();
}

window.onload = loadVisualization;