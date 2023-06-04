import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../productsInfo'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

    const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const {categoryId} = useParams()


/*     const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams() */

/*     useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [categoryId])

    return (
        <ItemList products={products}/>
)
}} */


    useEffect(()=>{
    setLoading(true)
    const collectionRef = categoryId
    ?query(collection(db, 'items'), where('categoryId', '==', categoryId))
    :collection(db, 'items')

    getDocs(collectionRef)
        .then(response =>{
            console.log(response)
            const productsAdapted = response.docs.map (doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])

    return (
        <ItemList products={products}/>
)
} 
 

export default ItemListContainer