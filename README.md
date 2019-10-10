# NgxCharter

## Installation

npm install ngx-charter

## Usage

#### Template
```
<ngx-charter [options]="lineChart"></ngx-charter>
```

#### TS

```
lineChart = {
    type: 'line',
    data: {
      datasets: [10, 20, 30],
      labels: ['Label 1', 'Label 2', 'Label 3']
    },
    options: {

    }
  };
```

For the list of options, check the [official Chart.js documentation](https://www.chartjs.org/docs/latest/getting-started/).

