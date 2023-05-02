import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Graph = ({population, year}) => {
  const options = {
  title: {
    text: '総人口推移グラフ',
  },
  xAxis: {
    title: {
      text: "年度"
    },
    categories: year
  },
  yAxis: {
    title: {
      text: "人口数"
    },
  },
  series: population
}

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default Graph