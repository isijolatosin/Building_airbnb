import Head from 'next/head';
import Banner from '../components/Banner';
import FooterContainer from '../components/FooterContainer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardData }) {
	return (
		<div className="">
			<Head>
				<title>AirBnB by oluwatosin_isijola</title>
				<link rel="icon" href="/vercel.svg" />
			</Head>

			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
					{/* <pre>{JSON.stringify(exploreData, null, 2)}</pre> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map((item, idx) => (
							<SmallCard
								key={idx}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-x-scroll scrollbar scrollbar-thumb-gray-100 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-3 -ml-3 pb-[30px]">
						{cardData.map((item, idx) => (
							<MediumCard key={idx} img={item.img} title={item.title} />
						))}
					</div>
				</section>
				<section>
					<LargeCard
						img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
						title="The Greatest Outdoors"
						description="Wishlists curated by Airbnb."
						buttonText="Get Inspired"
					/>
				</section>
			</main>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 bg-gray-100 py-14 px-32 items-center">
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
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then((res) =>
		res.json()
	);

	const cardData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) =>
		res.json()
	);
	return {
		props: {
			exploreData,
			cardData,
		},
	};
}
