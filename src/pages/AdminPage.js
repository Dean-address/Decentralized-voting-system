import { useState } from 'react';
import Header from '../components/header';
import ContestantField from '../components/contestantField';
function AdminPage() {

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startTimeDate, setStartTimeDate] = useState('');
	const [endTimeDate, setEndTimeDate] = useState('');
	const [contestants, setContestants] = useState([{ name: '', bio: '', logo: '' }]);
	let [contestantNum, setContestantNum] = useState(contestants.length);
	const [election, setElection] = useState([{
		title: title,
		description: description,
		startTimeDate: startTimeDate,
		endTimeDate: endTimeDate,
		contestants: contestants,
	}])


	function handleSubmit(e) {
		e.preventDefault()
		setTitle('')
		setDescription('')
		setElection([...election, {
			title: title,
			description: description,
			startTimeDate: startTimeDate,
			endTimeDate: endTimeDate,
			contestants: contestants
		}])
	}
	function handleContestantChange(index, field, value) {
		const updatedContestants = [...contestants];
		updatedContestants[index][field] = value;
		setContestants(updatedContestants);
	}
	function handleRemoveContestant(index) {
		const updatedContestants = contestants.filter((_, i) => i !== index);
		setContestants(updatedContestants);
	}
	function handleAddContestant() {
		setContestants([...contestants, { name: '', bio: '', logo: '' }]);
		console.log(contestants.length)
		setContestantNum(contestants.length)
	}
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<section className='p-8'>
				<h2 className="text-2xl font-bold mb-6">Create New Voting</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-gray-700">Title</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full p-2 border rounded-lg"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Description</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full p-2 border rounded-lg"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Start Date & Time</label>
						<input
							type="datetime-local"
							value={startTimeDate}
							onChange={(e) => setStartTimeDate(e.target.value)}
							className="w-full p-2 border rounded-lg"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">End Date & Time</label>
						<input
							type="datetime-local"
							value={endTimeDate}
							onChange={(e) => setEndTimeDate(e.target.value)}
							className="w-full p-2 border rounded-lg"
							required
						/>
					</div>
					<div>
						<h3 className="text-lg font-semibold">Contestants {contestantNum}</h3>
						{contestants.map((contestant, index, arr) => (
							<div key={index} className="space-y-2 border p-4 rounded-lg bg-white">
								<ContestantField contestant={contestant.name} labelName='Name' inputType='text' index={index} field='name' handleContestantChange={handleContestantChange} />
								<ContestantField contestant={contestant.bio} labelName='Bio' inputType='text' index={index} field='bio' handleContestantChange={handleContestantChange} />
								<ContestantField contestant={contestant.logo} labelName='Logo' inputType='file' index={index} field='logo' handleContestantChange={handleContestantChange} />

								{contestants.length > 1 && (
									<button
										type="button"
										onClick={() => handleRemoveContestant(index)}
										className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
									>
										Remove
									</button>
								)}
							</div>
						))}
						<button
							type="button"
							onClick={handleAddContestant}
							className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
						>
							Add Contestant
						</button>
					</div>
					<button
						type="submit"
						className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
					>
						Create Voting
					</button>
				</form>
			</section>

		</div>
	)
}
export default AdminPage