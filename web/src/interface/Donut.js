/**
 * Created by Arie M. Prasetyo on 2020-01-19
 */
import React, {Component} from 'react';
import * as d3 from 'd3';
import styles from './Donut.css';

export class Donut extends Component {
	constructor(props) {
		super(props);

		this.dim = {
			w: 60,
			h: 60,
			t: '30, 30'
		};

		// my color scheme
		this.red = 'rgb(191, 73, 4)';
		this.yellow = 'rgb(242, 200, 75)';
		this.green = 'rgb(72, 115, 52)';
		this.blue = 'rgb(56, 82, 115)';

		this.state = {
			lineData: null
		};
	}
	
	componentDidMount() {
		const {value} = this.props;
		this.draw(value);
	}
	
	draw(value) {
    let arcBg = d3.arc()
    .innerRadius(20)
    .outerRadius(30)
    .startAngle(0)
    .endAngle(4 * (Math.PI / 2));

    let arc = d3.arc()
    .innerRadius(21)
    .outerRadius(29)
    .startAngle(0)
		.endAngle(((value * 4) / 10) * (Math.PI / 2));

		let fillColor;
		if (value < 5) fillColor = this.red;
		else if (value < 6) fillColor = this.yellow;
		else if (value < 8) fillColor = this.green;
		else  fillColor = this.blue;
		
		this.setState({
      arcData: arc(),
			arcBgData: arcBg(),
			fillColor
    });
  }

	render() {
		const {className, textClassName, value} = this.props;
		const {arcData, arcBgData, fillColor} = this.state;

		return (
			<div class={`${styles.Donut} ${className || ''}`}>

				<svg xmlns="http://www.w3.org/2000/svg"
					width={this.dim.w}
					height={this.dim.h}>
					<g transform={`translate(${this.dim.t})`}>
            <path
							d={arcBgData}
              fill={'rgba(255, 255, 255, 0.8)'}
							strokeWidth={0}
						/>
            <path
							d={arcData}
              fill={fillColor}
							strokeWidth={0}
						/>
					</g>
				</svg>

				<div className={`${styles.text} ${textClassName || ''}`}>
					{`${value * 10}%`}
				</div>
			</div>
		);
	}
}

export default Donut;