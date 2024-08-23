import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="BMW"/>
                <Item marca="Mercedes"/>
            </ul>
        </>
    )
}

export default List