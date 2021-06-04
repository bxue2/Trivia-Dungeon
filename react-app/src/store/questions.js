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

export const getQuestionsFromSet = (setId) => async (dispatch) => {

}

export const getQuestionsFromCategories = (categories) => async (dispatch) => {

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
