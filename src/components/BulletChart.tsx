import { ResponsiveBullet } from '@nivo/bullet'


const BulletChart = ({ data }) => {
   return (
        <div style={{height: 500}} className="mt-10">
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

export default BulletChart;