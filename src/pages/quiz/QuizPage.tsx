import {useTelegram} from "../../hooks/useTelegram";
import QuizForm from "../../components/forms/quiz-form/QuizForm";

const QuizPage = () => {
    const {onToggleButton} = useTelegram();
    return (
        <>
            <h1>quiz page</h1>
            <button onClick={onToggleButton}>test</button>
            <QuizForm></QuizForm>
        </>
    )
}
export default QuizPage;