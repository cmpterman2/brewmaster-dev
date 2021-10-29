import React from 'react'
import Dimensions from 'react-dimensions'
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis, VictoryLegend, VictoryTheme} from "victory";
import { handleZoom, handleBrush } from "../store/actions/chartActions.js";
 
class Chart extends React.Component {

    handleZoom(domain) {
        this.props.dispatch(handleZoom(domain));
      }
    
     
    

  render() {
      return(
    <div>
    <VictoryChart width={this.props.containerWidth} height={350} scale={{ x: "time" }} 
    containerComponent={
      <VictoryZoomContainer responsive={false}
        zoomDimension="x"
        zoomDomain={this.props.chart.zoomDomain}
        onZoomDomainChange={this.handleZoom.bind(this)}
      />
    }
  >
    <VictoryLegend x={125} y={50}
      title="Legend"
      centerTitle
      orientation="horizontal"
      gutter={20}
      style={{ border: { stroke: "white" }, title: { fontSize: 20 } }}
      data={[
        { name: "One", symbol: { fill: "tomato", type: "star" } },
        { name: "Two", symbol: { fill: "orange" } },
        { name: "Three", symbol: { fill: "gold" } }
      ]}
    />
    <VictoryLine
      style={{
        data: { stroke: "tomato" }
      }}
      data={[
        { x: new Date(1982, 1, 1), y: 125 },
        { x: new Date(1987, 1, 1), y: 257 },
        { x: new Date(1993, 1, 1), y: 345 },
        { x: new Date(1997, 1, 1), y: 515 },
        { x: new Date(2001, 1, 1), y: 132 },
        { x: new Date(2005, 1, 1), y: 305 },
        { x: new Date(2011, 1, 1), y: 270 },
        { x: new Date(2015, 1, 1), y: 470 }
      ]}
    />

  </VictoryChart>

  <VictoryChart
    padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
    width={this.props.containerWidth} height={90} scale={{ x: "time" }}
    containerComponent={
      <VictoryBrushContainer responsive={true}
        brushDimension="x"
        brushDomain={this.props.chart.selectedDomain}
        onBrushDomainChange={this.props.onBrushDomainChange}
      />
    }
  >
    <VictoryAxis
      tickValues={[
        new Date(1985, 1, 1),
        new Date(1990, 1, 1),
        new Date(1995, 1, 1),
        new Date(2000, 1, 1),
        new Date(2005, 1, 1),
        new Date(2010, 1, 1)
      ]}
      tickFormat={(x) => new Date(x).getFullYear()}
    />
    <VictoryLine
      style={{
        data: { stroke: "tomato" }
      }}
      data={[
        { x: new Date(1982, 1, 1), y: 125 },
        { x: new Date(1987, 1, 1), y: 257 },
        { x: new Date(1993, 1, 1), y: 345 },
        { x: new Date(1997, 1, 1), y: 515 },
        { x: new Date(2001, 1, 1), y: 132 },
        { x: new Date(2005, 1, 1), y: 305 },
        { x: new Date(2011, 1, 1), y: 270 },
        { x: new Date(2015, 1, 1), y: 470 }
      ]}
    />
  </VictoryChart>
    </div>
      );
  }
}
 
export default Dimensions()(Chart)