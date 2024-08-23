import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="BMW" ano_lancamento={1983} />
                <Item marca="Mercedes" ano_lancamento={1977} />
                <Item />
            </ul>
        </>
    )
}

export default List