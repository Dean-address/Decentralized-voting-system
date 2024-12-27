
function Header() {
	function connectWallet() {
		alert('Wallet connected')
	}
	return (
		<header className="bg-white shadow-md p-4 flex justify-between items-center">
			<h1 className="h-10">Logo</h1>
			<button
				onClick={connectWallet}
				className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
			>

				Connect Wallet
			</button>
		</header>
	)
}
export default Header;