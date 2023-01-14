import Item from '../Item/Item'
//modifca el array de productos
const ItemList = ({productsList}) =>{
    return(
        <>
            {productsList.map( producto => <Item key={producto.id} prod={producto}/>)}
        </>
    )
}

export default ItemList