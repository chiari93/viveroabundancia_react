import { useState, useEffect } from 'react'
import {getProductById} from '../../productsInfo'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
    setLoading(true)
    const docRef = doc(db, 'items', itemId)
    getDoc(docRef)
    .then(response =>{
        const data = response.data()
        const productsAdapted = {id: response.id, ...data}
        setProducts(productsAdapted)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(()=>{
        setLoading(false)
    })
}, [itemId])

return(
    <div className='ItemDetailContainer'>
        <ItemDetail {...product} />
    </div>
)
}

/*     useEffect(() => {
        getProductById (itemId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
} 
 */
export default ItemDetailContainer;