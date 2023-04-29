import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      name: '北海道',
      data: [1, 2, 3],
    },
    {
      name: '山形県',
      data: [100, 4, 19]
    }
  ],
}

const Graph = () => {
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default Graph