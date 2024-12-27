function ContestantCard({ contestant }) {
	return (

		<div
			className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
		>
			<img
				src={contestant.logo}
				alt={`${contestant.name}'s logo`}
				className="w-24 h-24 rounded-full object-cover mb-4"
			/>
			<h3 className="text-lg font-semibold">{contestant.name}</h3>
			<p className="text-gray-600 text-sm text-center">{contestant.bio}</p>
			<button

				className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
			>
				Vote
			</button>
		</div>

	);
}

export default ContestantCard;
