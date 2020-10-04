import React from 'react'
import { db } from '../firebase'
import { GET_STAGES } from './constants'
import { GlobalDispatchContext } from './context'
import data from '../tasks'

const useCollection = () => {
    const dispatch = React.useContext(GlobalDispatchContext)

    React.useEffect(() => {
        // db.collection(collection).onSnapshot(snapshot => {
        //     let data = [];
        //     snapshot.forEach(doc => {
        //         data.push({...doc.data()})
        //     });
        //     console.log(data)
        //     dispatch({
        //         type:GET_STAGES,
        //         payload: {
        //             todo: [data[0].todo],
        //             progress: [data[0].progress],
        //             done: [data[0].done]
        //         }
        //     }) 
        // })
        // dispatch({
        //     type: GET_STAGES,
        //     payload: {
        //         todo: data.todo,
        //         progress: data.progress,
        //         done: data.done
        //     }
        // })
    }, [])
}

export default useCollection