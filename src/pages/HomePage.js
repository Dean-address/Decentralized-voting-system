import Header from "../components/header";
import Voting from "../components/voting";

function HomePage() {
	const votings = [
		{ id: 1, title: 'Election 2024', description: 'Presidential Election Voting' },
		{ id: 2, title: 'Board Members', description: 'Board of Directors Voting' },
		{ id: 3, title: 'Community Budget', description: 'Community Budget Allocation Voting' }
	]
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
					{votings.map(vote => <Voting vote={vote} />)}
				</div>
			</section>
		</div>
	)

}

export default HomePage;