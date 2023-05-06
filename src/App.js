import React from 'react';

import WebProvider from './component/store/webProvider';

import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import ScrollTop from './component/UI/ScrollTop';
import BoxPallete from './component/UI/pallete/BoxPallete';

function App() {
	return (
		<WebProvider>
			<Header />
			<Main />
			<Footer />
			<ScrollTop />
			<BoxPallete />
		</WebProvider>
	);
}

export default App;
