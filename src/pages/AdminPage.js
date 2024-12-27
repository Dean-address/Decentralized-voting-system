import { useState } from 'react';
import Header from '../components/header';
function AdminPage() {
	const [logo, setLogo] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startTimeDate, setStartTimeDate] = useState('');
	const [endTimeDate, setEndTimeDate] = useState('');


	function handleSubmit(e) {
		e.preventDefault()
		setTitle('')
		setDescription('')
	}
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<section className="p-8">
				<h2 className="text-2xl font-bold mb-6">Create New Voting</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-gray-700">Logo</label>
						<input
							type="file"
							alt='voting logo'
							value={logo}
							onChange={(e) => setLogo(e.target.value)}
							className="w-full p-2 border rounded-lg"
							placeholder="Enter voting title"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Title</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full p-2 border rounded-lg"
							placeholder="Enter voting title"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700">Description</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full p-2 border rounded-lg"
							placeholder="Enter voting description"
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