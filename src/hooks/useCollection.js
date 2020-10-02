import React from 'react'
import { db } from '../firebase'

const useCollection  = (collection) => {
    const [docs, setDocs] = React.useState([])

    React.useEffect(() => {
        db.collection(collection).onSnapshot(snapshot => {
            let data = [];
            console.log(snapshot)
            snapshot.forEach(doc => {
                data.push({...doc.data()})
            });
            setDocs(data)
        })
    }, [collection])

    return { docs }
}

export default useCollection