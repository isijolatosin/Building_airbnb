import React from 'react';
import FooterContainer from './FooterContainer';

function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-20 bg-gray-100 py-14 px-24 items-center">
			<FooterContainer
				title="About"
				data={[
					'How Airbnb works',
					'Newsroom',
					'Investors',
					'Airbnb Plus',
					'Airbnb Luxe',
				]}
			/>
			<FooterContainer
				title="Community"
				data={[
					'Accessibility',
					'This is not a real site',
					'Its a pretty awesome clone',
					'Referrals accepted',
					"Let's clone together",
				]}
			/>
			<FooterContainer
				title="Host"
				data={[
					'React Doc',
					'Presents',
					'Zero to Full Stack Dev',
					'Component UI',
					'Start using now',
				]}
			/>
			<FooterContainer
				title="Support"
				data={[
					'Help Center',
					'Trust & Safety',
					'Say Hi Youtube',
					'Easter Eggs',
					'For the Win',
				]}
			/>
		</div>
	);
}

export default Footer;
