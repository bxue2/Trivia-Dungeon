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
    const response = await fetch(`/api/questions/set/${setId}`)
    let data = await response.json();
    let newData = shuffleArray(data.questions);
    if(!data.errors){
        dispatch(getQuestions(newData))
    }
    return newData;
}

//Gets <num> random questions based on query
// Possible queries: category, difficulty
export const getQuestionsFromQueries = (queries={}, num=30) => async (dispatch) => {
    let queryString = `?num=${num}&`
    for(let key in queries){
        queryString = `${queryString}${key}=${queries[key]}&;`;
    }
    const response = await fetch(`/api/questions/random${queryString.slice(0, -1)}`)
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
