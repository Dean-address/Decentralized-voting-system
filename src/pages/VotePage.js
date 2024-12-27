import { useLocation } from "react-router"
import ContestantCard from "../components/contestantCard"

function VotingPage() {
	const votingDetail = useLocation()

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow-md p-4 flex justify-between items-center">
				<img src="/logo.png" alt="Logo" className="h-10" />

			</header>

			<section className="p-8">

				<h2 className="text-2xl font-bold mb-4">{votingDetail.state.title}</h2>
				<p className="text-gray-700 mb-4">{votingDetail.state.description}</p>

				<p className="text-gray-500 mb-2">Start Date Time: {new Date(`${votingDetail.state.startTimeDate}`).toLocaleString()}</p>
				<p className="text-gray-500 mb-2">End  Date Time: {new Date(
					`${votingDetail.state.endTimeDate}`
				).toLocaleString()}</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
					{votingDetail.state.contestants.map((contestant, index) => (
						<ContestantCard contestant={contestant} />
					))
					}
				</div>

			</section>
		</div >
	)
}

export default VotingPage