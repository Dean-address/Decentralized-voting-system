function ContestantField({ contestant, inputType, labelName, handleContestantChange, index, field }) {
	console.log(contestant)

	return (
		<div>
			<label className="block text-gray-700">{labelName}</label>
			<input
				type={inputType}
				value={contestant}
				onChange={(e) =>
					handleContestantChange(index, field, e.target.value)
				}
				className="w-full p-2 border rounded-lg"
				required
			/>
		</div>
	)
}
export default ContestantField;