import React from 'react';

const Scrol = (props) => {
	return (
		<div style={{overflowY: 'scroll', height:'550px'}}>
		   { props.children }
		</div>
		)
}

export default Scrol;