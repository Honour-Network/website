import './common';

var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

const dataList1 = [
  {value: 728000000 * 0.55, name: 'Token Available For Sales'},
  {value: 728000000 * 0.025, name: 'Social Give Back'},
  {value: 728000000 * 0.1, name: 'Community & Industry Development'},
  {value: 728000000 * 0.105, name: 'Company Reserve'},
  {value: 728000000 * 0.22, name: 'Team, Founders, Advisors,\n Partners &Marketing Expenses'},
];
const option1 = {
  title: {
    text: 'The allocation of HNA tokens',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/> {c} ({d}%)',
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left',
  //   data: dataList1.map((item) => {
  //     return item.name;
  //   }),
  // },
  label: {
    show: false
  },
  series: [
    {
      name: 'The allocation of HNA tokens',
      type: 'pie',
      radius: '75%',
      center: ['50%', '60%'],
      data: dataList1,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
const dataList2 = [
  {value: 728000000 * 0.06, name: 'Develop MVP of FundTech Platform'},
  {value: 728000000 * 0.34, name: 'Continuous Development & Maintenance Of \nHonour Network FundTech Platform'},
  {value: 728000000 * 0.3, name: 'Operations, Administration & Accounting'},
  {value: 728000000 * 0.2, name: 'Sales & Marketing'},
  {value: 728000000 * 0.1, name: 'Legal & Compliance'},
];
const option2 = {
  title: {
    text: 'The proceed be used for',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/> {c} ({d}%)',
  },
  // legend: {
  //   orient: 'vertical',
  //   left: 'left',
  //   data: dataList2.map((item) => {
  //     return item.name;
  //   }),
  // },
  series: [
    {
      name: 'The proceed be used for',
      type: 'pie',
      radius: '75%',
      center: ['50%', '60%'],
      data: dataList2,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
const chart1 = echarts.init(document.getElementById('canvas1'), {}, {
  width: 700,
  height: 300,
  renderer: 'canvas',
  devicePixelRatio: 1,
});
chart1.setOption(option1);
const chart2 = echarts.init(document.getElementById('canvas2'), {}, {
  width: 700,
  height: 300,
  renderer: 'canvas',
  devicePixelRatio: 1,
});
chart2.setOption(option2);

