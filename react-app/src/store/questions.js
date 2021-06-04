const GET_QUESTIONS = "questions/GET_QUESTIONS";
const NEXT_QUESTION = "questions/NEXT_QUESTION";

const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    payload: questions
})

const nextQuestion = () => ({
    type: NEXT_QUESTION,
})

const initialState = { questions: []};

//In-place
const shuffleArray = (arr) => {
    let newArr = arr.slice();
    for(let i = newArr.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
    }
    return newArr;
}

//Gets all questions associated with setId
export const getQuestionsFromSet = (setId) => async (dispatch) => {

}

//Gets <num> random questions based on selected categories
export const getQuestionsFromCategories = (categories, num) => async (dispatch) => {

}

//Gets 30 random questions from entire dataset
export const getRandomQuestions = () => async (dispatch) => {
    const response = await fetch("/api/questions/random")
    let data = await response.json();
    let newData = shuffleArray(data.questions);
    if(!data.errors){
        dispatch(getQuestions(newData))
    }
    return newData;
}

export const goToNextQuestion = () => (dispatch) => {
    
    dispatch(nextQuestion());
}

export default function reducer(state=initialState, action) {
    switch (action.type){
        case GET_QUESTIONS:
            return {questions: action.payload}
        case NEXT_QUESTION:
            let newQuestions = state.questions.slice(1);
            return {questions: newQuestions}
        default:
            return state;
    }
}
