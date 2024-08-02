import {useTelegram} from "../../hooks/useTelegram";

const QuizPage = () => {
    const {onToggleButton} = useTelegram();
    return (
        <>
            <h1>quiz page</h1>
            <button onClick={onToggleButton}>test</button>
        </>
    )
}
export default QuizPage;