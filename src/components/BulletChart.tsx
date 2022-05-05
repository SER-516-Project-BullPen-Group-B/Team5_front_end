import { ResponsiveBullet } from '@nivo/bullet'
import PropTypes from 'prop-types'

interface BulletChartProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    data: any;
}

const BulletChart:React.FC<BulletChartProps> = ({ data }) => {
    data = JSON.parse(data);
   return (
        <div style={{height: 100*data.length}}>
            <ResponsiveBullet
                data={data}
                maxValue={'auto'}
                margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
                spacing={46}
                rangeColors = {'seq:blues'}
                measureColors = {'seq:red_yellow_green'}
                markerColors = {'seq:red_yellow_green'}
                titleAlign="start"
                titleOffsetX={-70}
                measureSize={0.2}
            />
        </div>
   )
}

BulletChart.propTypes = {
    data:PropTypes.any.isRequired,
}

export default BulletChart;