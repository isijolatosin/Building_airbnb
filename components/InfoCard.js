import Image from 'next/image';
import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({ img, location, description, price, title, star, total }) {
	return (
		<div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-500 ease-out first:border-t">
			<div className="relative h-42 w-40 md:h-52 md:w-80 flex-shrink-0">
				<Image
					className="rounded-2xl"
					src={img}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col pl-5 flex-grow">
				<div className="flex justify-between">
					<p className="text-gray-600">{location}</p>
					<HeartIcon className="h-7 text-red-400 cursor-pointer" />
				</div>
				<h4 className="text-xl">{title}</h4>
				<div className="border-b w-10 pt-2" />
				<p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
				<div className="flex justify-between items-end pt-5">
					<p className="flex items-center">
						<StarIcon className="h-5 text-red-400" />
						{star}
					</p>
					<div>
						<p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoCard;
