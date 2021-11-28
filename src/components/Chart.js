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
        data: { stroke: "gold", strokeWidth: .75 }
      }}
      data={this.props.targetData}
    />
    {/* <VictoryLine
      style={{
        data: { stroke: "orange" }
      }}
      data={this.props.airData}
    /> */}
    <VictoryLine
      //interpolation="step"
      style={{
        data: { stroke: "tomato", strokeWidth: .75 }
      }}
      data={this.props.fermData}
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
      // tickValues={[
      //   new Date(1985, 1, 1),
      //   new Date(1990, 1, 1),
      //   new Date(1995, 1, 1),
      //   new Date(2000, 1, 1),
      //   new Date(2005, 1, 1),
      //   new Date(2010, 1, 1)
      // ]}
      // tickFormat={(x) => new Date(x).getFullYear()}
    />
    <VictoryLine
      style={{
        data: { stroke: "tomato" }
      }}
      data={this.props.fermData}
    />
  </VictoryChart>
    </div>
      );
  }
}
 
export default Dimensions()(Chart)