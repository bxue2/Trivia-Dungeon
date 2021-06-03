import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

const QuestionList = () => {
    const user = useSelector(state => state.session.user);

    let questionRows = (
        <div className='loading-questions'>
            Loading...
        </div>
    )

    const getQuestions = async () => {
        const response = await fetch(`/api/questions/user/${user.id}`)
        const data = await response.json()
        if(data.errors){
            questionRows = (
                <div className='loading-failed'>
                    Error occured while fetching data...
                </div>
            )
        } else{
            console.log(data)
            // questionRows = (
            //     <>
            //         {data.map((question, idx) => {
            //             return (
            //                 <QuestionListRow question={question} key={idx}/>
            //             )
            //         })
            //         }
            //     </>
            // )
        }
    }

    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <div className='question-list-container'>
            <h1>Submitted Questions</h1>
            {questionRows}
        </div>
    )
}

export default QuestionList;
