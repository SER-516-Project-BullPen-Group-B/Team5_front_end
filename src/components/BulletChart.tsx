import { ResponsiveBullet } from '@nivo/bullet'
import PropTypes from 'prop-types'

interface BulletChartProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    data: any;
    length: number;
}

const BulletChart:React.FC<BulletChartProps> = ({ data,length }) => {
   return (
        <div style={{height: 100*length}}>
            <ResponsiveBullet
                data={data}
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
    length:PropTypes.number.isRequired,
}

export default BulletChart;