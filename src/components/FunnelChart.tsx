import { ResponsiveFunnel } from '@nivo/funnel'

import PropTypes from "prop-types";

interface FunnelChartProps {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    data: any;
    length:number;
}

const FunnelChart: React.FC<FunnelChartProps> = ({ data, length }) => {
    return (
            <div style={{height: length*50.7833}} >
                <ResponsiveFunnel
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    valueFormat=">-.4s"
                    colors={{ scheme: 'spectral' }}
                    borderWidth={20}
                    labelColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                3
                            ]
                        ]
                    }}
                    beforeSeparatorLength={100}
                    beforeSeparatorOffset={20}
                    afterSeparatorLength={100}
                    afterSeparatorOffset={20}
                    currentPartSizeExtension={10}
                    currentBorderWidth={40}
                    motionConfig="wobbly"
                />
            </div>
    )
}

FunnelChart.propTypes = {
    data: PropTypes.any.isRequired,
    length:PropTypes.number.isRequired
};

export default FunnelChart;