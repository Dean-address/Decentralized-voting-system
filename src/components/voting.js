import { useNavigate } from "react-router";

function Voting({ vote }) {

	const navigate = useNavigate()
	const goToVoteDetail = (vote) => {
		navigate(`/voting/${vote.id}`, { state: vote })
	}
	return (
		<div key={vote.id} className="p-4 border rounded-lg shadow-sm bg-white">
			<h3 className="text-xl font-semibold">{vote.title}</h3>
			<p className="text-gray-600 mt-2">{vote.description}</p>
			<p className="text-gray-600 mt-2">Number of Contestants {vote.contestants.length}</p>

			<button onClick={(() => goToVoteDetail(vote))} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
				Vote Now
			</button>
		</div>
	)
}
export default Voting;