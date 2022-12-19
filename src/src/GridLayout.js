import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import Button from "@mui/material/Button";
import Bbb from "./Bbb";
import FetchBox from "./components/FetchBox";

const ReactGridLayout = WidthProvider(RGL);
const xxx = 3;
const a = false;


export default class BasicLayout extends React.PureComponent {

  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12
  };
  
  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }


  
  generateLayout() {
    const p = this.props;
    return _.map(new Array(this.props.items), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <React.Fragment>
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >

      </ReactGridLayout>
      </React.Fragment>
    );
  }
}