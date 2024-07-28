import { Route, Routes } from "react-router-dom";
export const url = "/tg-admin-bot";
export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path={url + '/quiz'} element={<div>quiz</div>} />
				<Route path={url + '/login'} element={<div>login</div>} />
			</Routes>
		</div>
	)
}