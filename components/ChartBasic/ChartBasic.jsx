import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const ChartBasic = ({ xAxisTag, xAxisValues, yAxisTag, yAxisValues }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      xAxis: {
        type: 'category',
        data: xAxisValues,
        name: xAxisTag,
        nameLocation: 'middle',
        nameGap: 25,
      },
      yAxis: {
        type: 'value',
        name: yAxisTag,
        nameLocation: 'middle',
        nameGap: 30,
      },
      series: [
        {
          data: yAxisValues,
          type: 'line',
          smooth: true,
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [xAxisValues, yAxisValues, xAxisTag, yAxisTag]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default ChartBasic;
