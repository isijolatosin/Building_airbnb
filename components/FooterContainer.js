import React from 'react';

function FooterContainer({ title, data }) {
	return (
		<div>
			<div className="text-gray-600 space-y-4 text-sm text-gray-800">
				<h5 className="font-bold">{title.toUpperCase()}</h5>
				{data.map((item) => (
					<p>{item}</p>
				))}
			</div>
		</div>
	);
}

export default FooterContainer;
