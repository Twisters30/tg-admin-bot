import './App.css';
import HeaderApp from './components/HeaderApp'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useEffect} from "react";

// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {
	useEffect(() => {
		tg.ready();
	}, []);
	const closeApp = () => {
		tg.close()
	}
	return (
		<BrowserRouter>
			<HeaderApp/>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container
					  direction="row"
					  justifyContent="center"
					  alignItems="center">
					<section className="section">
						<div className="container-xl">
							<AppRouter/>
						</div>
					</section>
				</Grid>
			</Box>
		</BrowserRouter>
	);
}

export default App;
