import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import QuizPage from "../pages/quiz/QuizPage";
export const url = "/tg-admin-bot";
export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path={url + '/quiz'} element={<QuizPage />}/>
				<Route path={url + '/login'} element={<LoginPage />} />
			</Routes>
		</div>
	)
}