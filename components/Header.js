import React from 'react';
import Image from 'next/image';
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Calendar } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({ placeholder }) {
	const [searchInput, setSearchInput] = React.useState('');
	const [numberOfGuests, setNumberOfGuests] = React.useState('0');
	const [startDate, setStartDate] = React.useState(new Date());
	const [endDate, setEndDate] = React.useState(new Date());
	const router = useRouter();
	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	const handleSelect = (ranges) => {
		// console.log(ranges);
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const Search = () => {
		searchInput &&
			router.push({
				pathname: './search',
				query: {
					location: searchInput,
					startDate: startDate.toISOString(),
					endDate: endDate.toISOString(),
					numberOfGuests: numberOfGuests,
				},
			});
		setSearchInput('');
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center">
			<div
				onClick={() => router.push('./')}
				className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
					layout="fill"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
				<input
					className="pl-5 bg-transparent outline-none flex-grow text-md text-gray-600 placeholder-gray-300 "
					type="text"
					value={searchInput}
					onChange={handleChange}
					placeholder={placeholder || 'Start your search'}
				/>
				<SearchIcon
					onClick={Search}
					className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer sm:mx-2 "
				/>
			</div>
			<div className="flex space-x-4 items-center justify-end text-gray-500">
				<p className="hidden md:inline-flex md:text-base cursor-pointer">
					Become a host
				</p>
				<GlobeAltIcon className="h-6" />
				<div className="flex border-2 rounded-full p-2 space-x-2">
					<MenuIcon className="h-6" />
					<UserCircleIcon className="h-6" />
				</div>
			</div>
			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>
					{/* This is for selecting just a date */}
					{/* <Calendar date={new Date()} />   */}
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">
							Number of Guests
						</h2>
						<UsersIcon className="h-5" />
						<input
							value={numberOfGuests}
							onChange={(e) => setNumberOfGuests(e.target.value)}
							type="number"
							min={1} //this controls users' input not less than one
							className="w-12 pl-2 outline-none text-lg text-red-400"
						/>
					</div>
					<div className="flex">
						<button
							onClick={() => setSearchInput('')}
							className="flex-grow text-gray-500">
							Cancel
						</button>
						<button onClick={Search} className="flex-grow text-red-400">
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
