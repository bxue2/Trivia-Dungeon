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

//Gets all questions associated with setId
export const getQuestionsFromSet = (setId) => async (dispatch) => {

}

//Gets <num> random questions based on selected categories
export const getQuestionsFromCategories = (categories, num) => async (dispatch) => {

}

//Gets 30 random questions from entire dataset
export const getRandomQuestions = () => async (dispatch) => {
    const response = await fetch("/api/questions/random")
    const data = await response.json();
    if(!data.errors){
        dispatch(getQuestions(data))
    }
    return data;
}

export const goToNextQuestion = () => (dispatch) => {
    dispatch(nextQuestion());
}

export default function reducer(state=initialState, action) {
    switch (action.type){
        case GET_QUESTIONS:
            return action.payload
        case NEXT_QUESTION:
            let newQuestions = state.questions.slice(1);
            return newQuestions
        default:
            return state;
    }
}
