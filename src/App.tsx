
import './App.css';
import HeaderApp from './components/HeaderApp'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
			  <HeaderApp />
			  <main className="content">
				  <section className="section">
					  <div className="container-xl">
						  <AppRouter />
					  </div>
				  </section>
			  </main>
		  </BrowserRouter>
  );
}

export default App;
