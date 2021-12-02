import React from 'react';
import PropTypes from 'prop-types';

const Cardinfos = ({ icon, score, unity, types }) => {

	Cardinfos.propTypes = {
		icon: PropTypes.string,
		score: PropTypes.number,
		unity: PropTypes.string,
		types: PropTypes.string
	};
	return (
		<div className='Cardinfos'>
			<i className={icon} />
			<div>
				<span className='score'>{score}{unity}</span>
				<span className='types'>{types}</span>
			</div>
		</div>
	);
};

export default Cardinfos;