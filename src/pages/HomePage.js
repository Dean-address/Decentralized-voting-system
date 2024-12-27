import Header from "../components/header";
import Voting from "../components/voting";

function HomePage() {

	const electionList = [
		{
			id: 1,
			title: "Student Council Election 2024",
			description: "Vote for your next student council leaders!",
			startTimeDate: "2024-01-10T09:00",
			endTimeDate: "2024-01-10T17:00",
			contestants: [
				{
					img: "https://example.com/images/john_doe.jpg",
					name: "John Doe",
					bio: "A passionate leader dedicated to improving student life."
				},
				{
					img: "https://example.com/images/jane_smith.jpg",
					name: "Jane Smith",
					bio: "Advocate for better academic resources and inclusion."
				}
			]
		},
		{
			id: 2,
			title: "Community Leader Election",
			description: "Choose the next community representative.",
			startTimeDate: "2024-02-15T10:00",
			endTimeDate: "2024-02-15T18:00",
			contestants: [
				{
					img: "https://example.com/images/alex_taylor.jpg",
					name: "Alex Taylor",
					bio: "Focused on sustainable development in the community."
				},
				{
					img: "https://example.com/images/emily_brown.jpg",
					name: "Emily Brown",
					bio: "Dedicated to creating opportunities for youth and families."
				},
				{
					img: "https://example.com/images/chris_jones.jpg",
					name: "Chris Jones",
					bio: "Experienced leader with a vision for economic growth."
				}
			]
		}
	];



	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<section className="text-center py-16 bg-blue-50">
				<h1 className="text-4xl font-bold text-gray-800">Welcome to QuickNode Voting App</h1>
				<p className="text-lg text-gray-600 mt-4">Decentralized voting made simple and secure.</p>
			</section>

			<section className="p-8">
				<h2 className="text-2xl font-bold mb-6">Available Votings</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{electionList.map((election, index) => <Voting vote={election} key={index} />)}
				</div>
			</section>
		</div>
	)

}

export default HomePage;