import './common';
import { isMobile } from './common/utils'

var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

const dataList1 = [
  {value: 728000000 * 0.55, name: 'Token Available For Sales'},
  {value: 728000000 * 0.2, name: 'Community Fund\n For Development'},
  {value: 728000000 * 0.03, name: 'Company Reserve'},
  {value: 728000000 * 0.22, name: 'Team, Founders, Advisors,\n Partners & Marketing Expenses'},
];
const dataListMobile1 = [
  {value: 728000000 * 0.55, name: 'Token \nAvailable\n For Sales'},
  {value: 728000000 * 0.2, name: 'Community\n Fund For\n Development'},
  {value: 728000000 * 0.03, name: 'Company\n Reserve'},
  {value: 728000000 * 0.22, name: 'Team, Founders,\n Advisors, Partners\n & Marketing\n Expenses'},
];
const option1 = {
  title: {
    text: 'The allocation of HNA tokens',
    x: 'center',
    textStyle: {
      fontSize: isMobile() ? '26' : '20',
      color: '#ff5c3c'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/> {c} ({d}%)',
    textStyle: {
      fontSize: isMobile() ? '24' : '18',
    }
  },
  label: {
    show: false
  },
  series: [
    {
      name: 'The allocation of HNA tokens',
      type: 'pie',
      radius: '75%',
      center: ['50%', '60%'],
      data: isMobile() ? dataListMobile1 : dataList1,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: isMobile() ? '22' : '18',
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: isMobile() ? '22' : '18',
            fontWeight: 'bolder'
          }
        }
      },
    },
  ],
};
const dataList2 = [
  {value: 728000000 * 0.06, name: 'Develop MVP of \nFundTech Platform'},
  {value: 728000000 * 0.34, name: 'Continuous Development \n& Maintenance Of\n Honour Network\n FundTech Platform'},
  {value: 728000000 * 0.3, name: 'Operations, Administration\n & Accounting'},
  {value: 728000000 * 0.2, name: 'Sales & Marketing'},
  {value: 728000000 * 0.1, name: 'Legal & Compliance'},
];
const dataListMobile2 = [
  {value: 728000000 * 0.06, name: 'Develop MVP of \nFundTech Platform'},
  {value: 728000000 * 0.34, name: 'Continuous\n Development &\n Maintenance \nOf Honour\n Network \nFundTech\n Platform'},
  {value: 728000000 * 0.3, name: 'Operations, \nAdministration\n & Accounting'},
  {value: 728000000 * 0.2, name: 'Sales & \nMarketing'},
  {value: 728000000 * 0.1, name: 'Legal & \nCompliance'},
];
const option2 = {
  title: {
    text: 'The proceed be used for',
    x: 'center',
    textStyle: {
      fontSize: isMobile() ? '26' : '20',
      color: '#ff5c3c'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/> {c} ({d}%)',
    textStyle: {
      fontSize: isMobile() ? '24' : '18',
    }
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
      data: isMobile() ? dataListMobile2 : dataList2,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: isMobile() ? '22' : '18',
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: isMobile() ? '22' : '18',
            fontWeight: 'bolder'
          }
        }
      },
    },
  ],
};
const chart1 = echarts.init(document.getElementById('canvas1'), {}, {
  width: isMobile() ? 700 : 950,
  height: 450,
  renderer: 'canvas',
  devicePixelRatio: 1,
});
chart1.setOption(option1);
const chart2 = echarts.init(document.getElementById('canvas2'), {}, {
  width: isMobile() ? 700 : 950,
  height: 450,
  renderer: 'canvas',
  devicePixelRatio: 1,
});
chart2.setOption(option2);

