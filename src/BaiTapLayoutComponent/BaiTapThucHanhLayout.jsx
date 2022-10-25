import React, { Component, Fragment } from 'react';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Grid from './Grid/Grid';
import Header from './Header/Header';

class BaiTapThucHanhLayout extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Carousel />
				<Grid />
				<Footer />
			</Fragment>
		);
	}
}

export default BaiTapThucHanhLayout;
