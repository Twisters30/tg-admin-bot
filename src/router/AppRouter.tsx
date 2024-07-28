import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<div>quiz</div>} />
				<Route path="/login" element={<div>login</div>} />
			</Routes>
		</div>
	)
}