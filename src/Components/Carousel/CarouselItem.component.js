import React from 'react';

import './Carousel.styles.css';

export default function CarouselItem({ children, width }) {
	return (
		<div className="carousel-item" style={{ width: 'width' }}>
			{children}
		</div>
	);
}
