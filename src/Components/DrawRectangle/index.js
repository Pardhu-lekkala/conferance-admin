import React, { Component } from "react";
import './rectangle.css';
import ResizableRect from 'react-resizable-rotatable-draggable'

class DrawRectangle extends Component{
        constructor() {
          super()
          this.state = {
            width: 100,
            height: 100,
            top: 100,
            left: 100,
            rotateAngle: 0
          }
        }
      
        handleResize = (style, isShiftKey, type) => {
          let { top, left, width, height } = style
          top = Math.round(top)
          left = Math.round(left)
          width = Math.round(width)
          height = Math.round(height)
          this.setState({
            top,
            left,
            width,
            height
          })
        }

        handleRotate = (rotateAngle) => {
            this.setState({
              rotateAngle
            })
          }
        
          handleDrag = (deltaX, deltaY) => {
            this.setState({
              left: this.state.left + deltaX,
              top: this.state.top + deltaY
            })
          }
    render(){
        const {width, top, left, height, rotateAngle} = this.state
        return(
            <div style={{height:this.height,width:this.width,backgroundColor:"pink"}}>
            <ResizableRect
            left={left}
            top={top}
            width={width}
            height={height}
            rotateAngle={rotateAngle}
            className="bck"
            zoomable='n, w, s, e, nw, ne, se, sw'
            onResize={this.handleResize}
            onDrag={this.handleDrag}
            />
      </div>
        )
    }
}
export default DrawRectangle;
