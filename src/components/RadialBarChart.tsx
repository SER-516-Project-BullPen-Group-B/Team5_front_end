import { ResponsiveRadialBar } from '@nivo/radial-bar'

const MyResponsiveRadialBar = ({ data /* see data tab */ }) => {
    return (
        <div style={{height: 700}}>
        <ResponsiveRadialBar
            data={data}
            valueFormat=">-.2f"
            padding={0.4}
            maxValue = {100}
            colors = {{ scheme:'set1' }}
            cornerRadius={2}
            endAngle ={360}
            margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
            radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
            circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        />
        </div>
    )
}

export default MyResponsiveRadialBar;