import React from 'react';

function FooterContainer({ title, data }) {
	return (
		<div>
			<div className="space-y-4 text-sm text-gray-800">
				<h5 className="font-bold">{title.toUpperCase()}</h5>
				{data.map((item, idx) => (
					<p key={idx}>{item}</p>
				))}
			</div>
		</div>
	);
}

export default FooterContainer;
