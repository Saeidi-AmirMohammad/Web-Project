$(document).ready(function () {
    var linechart = document.getElementById('line-chart');
    var myChart = new Chart(linechart, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [12, 16, 3, 5, 10, 7, 20],
                backgroundColor: 'transparent',
                pointBackgroundColor: 'White'
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var barchart = document.getElementById('bar-chart');
    var myChart = new Chart(barchart, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [12, 16, 3, 5, 10, 7, 20],
                borderColor: 'white',
                borderWidth: '1.5'
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var line2chart = document.getElementById('line2-chart');
    var myChart = new Chart(line2chart, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [12, 16, 3, 5, 10, 7, 20],
                backgroundColor: 'transparent',
                pointBackgroundColor: 'White'
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var bar2chart = document.getElementById('bar2-chart');
    var myChart = new Chart(bar2chart, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', '', ''],
            datasets: [{
                data: [12, 16, 3, 5, 10, 7, 20],
                borderColor: 'white',
                borderWidth: '1.5'
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var online = document.getElementById('online');
    var myChart = new Chart(online, {
        type: 'line',
        data: {
            labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه'],
            datasets: [{
                data: [120, 106, 30, 55, 100, 70, 210],
                borderColor: '#777',
                pointBackgroundColor: '#111',
                borderWidth: '2'
            }]
        },
        options: {

            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    $('#sidebar').on('hidden.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main').removeClass('col-md-9'),
                $('#main').removeClass('col-lg-10'),
                $('#main').addClass('col-12')
        }
    })

    $('#sidebar').on('show.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main').addClass('col-md-9'),
                $('#main').addClass('col-lg-10')
        }
    })
});



