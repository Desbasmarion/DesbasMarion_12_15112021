import React from 'react';
import PropTypes from 'prop-types';

/**
 * Cards informations component showing calories, protein, carbohydrates, lipids
 * @param { String } icon - font awsome icon for each categories
 * @param { Number } score - data fetched with API or mocked data
 * @param { String } unity - grams or kCal
 * @param { String } types - calories, protein, carbohydrates or lipids
 */
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