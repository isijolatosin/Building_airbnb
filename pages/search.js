import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { MenuIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
	const [showList, setShowList] = React.useState(false);
	const [filteredSearchResult, setFilteredSearchResult] = React.useState([]);
	const router = useRouter();
	const { location, startDate, endDate, numberOfGuests } = router.query;

	React.useEffect(() => {
		let newArr = [];
		searchResults.filter((item, idx) => {
			if (numberOfGuests === '0') return;
			if (item.description.charAt(0) === numberOfGuests) {
				newArr.push(item);
			}
			// console.log(newArr);
		});
		setFilteredSearchResult(newArr);
	}, [numberOfGuests]);

	// console.log(filteredSearchResult);

	const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy'); // if you write M you will have the month in one digit number, MM you will have the month in 2 digit number, MMM you will have the month in 3 letters and MMMM you will have the month in full letter
	const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<div className="h-screen">
			<Header
				placeholder={`${location} | ${range} | ${numberOfGuests} ${
					numberOfGuests > 1 ? 'guests' : 'guest'
				}`}
			/>
			<div className="flex">
				<section className="relative flex-grow pt-14 px-4">
					<div>
						{numberOfGuests > 1 ? (
							<p className="text-xs text-red-500">
								300+ Stays {range} for {numberOfGuests} guests
							</p>
						) : (
							<p className="text-xs text-red-500">
								300+ Stays {range} for {numberOfGuests} guest
							</p>
						)}
						<h1 className="text-3xl font-semibold mt-2 mb-6">
							Stays in {location}
						</h1>
						<div
							className={
								showList
									? 'p-2 space-y-2 '
									: 'hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap  '
							}>
							<Button title="Cancellation Flexibility" />
							<Button title="Type of Place" />
							<Button title="Price" />
							<Button title="Rooms and Beds" />
							<Button title="More Filters" />
						</div>
					</div>
					<MenuIcon
						onClick={() => setShowList(!showList)}
						className="lg:hidden absolute right-0 top-0 h-8 cursor-pointer text-red-400 mr-4 mt-2"
					/>
				</section>
			</div>
			<div className="flex flex-col px-4 ">
				{numberOfGuests !== '0' &&
					filteredSearchResult.map((item, idx) => (
						<InfoCard
							key={idx}
							description={item.description}
							img={item.img}
							title={item.title}
							location={item.location}
							star={item.star}
							price={item.price}
							total={item.total}
						/>
					))}
				{numberOfGuests === '0' &&
					searchResults.map((item, idx) => (
						<InfoCard
							key={idx}
							description={item.description}
							img={item.img}
							title={item.title}
							location={item.location}
							star={item.star}
							price={item.price}
							total={item.total}
						/>
					))}
			</div>
			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch('https://jsonkeeper.com/b/5NPS').then(
		(res) => res.json()
	);
	return {
		props: {
			searchResults: searchResults,
		},
	};
}
