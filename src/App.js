import './App.css';
import asset from './asset.json'

// CIP25 Metadata Standard
// https://cips.cardano.org/cips/cip25/
// Shows array as a viable option for image src
// So this means we should have an array check in place and not assume image?

function App() {

	// verify if array or image
	function verify(image) {
		if (image.isArray) {
			return image.join('');
		}
		else {
			return image
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={verify(asset['721']['<policy_id>']['<asset_name>']['image'])} alt="on-chain image" />
				
			</header>
		</div>
	);
}

export default App;
