import { useEffect, useState } from 'react';

// export const fetchData = async(url) => {
// 	//Recovery data
// 	const res = await fetch(url);
// 	const answer = await res.json();
// 	return answer;
// };

const fetchData = (url) => {
	const [data, setData] = useState({});
	const [isDataLoading, setDataLoading] = useState(false);
	const [error, setError] = useState(false);
	
	useEffect(() => {

		if (!url) return;
		
		setDataLoading(true);

		async function fetchFonction() {
			setDataLoading(true);
			try {
				const response = await fetch(url);
				const { data } = await response.json();
				setData(data.data);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setDataLoading(false);
			}
		}
		fetchFonction();
	}, [url]);

	return { data, isDataLoading, error };
};

export default fetchData;
