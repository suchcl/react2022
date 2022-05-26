import style from "./product.module.css";
const products = [
    {
        title: "Cabbage",
        id: 1,
        isFruit: false
    },
    {
        title: "Garlic",
        id: 2,
        isFruit: false
    },
    {
        title: "Apple",
        id: 3,
        isFruit: true
    },
    {
        title: "Pen",
        id: 4,
        isFruit: false
    }
];


const Products = () => {
    const ListItems = products.map(product =>
        <li
            key={product.id}
            style={{ color: product.isFruit ? "green" : "red" }}>
            {product.title}
        </li>
    );
    return (
        <ul className={style.product}>
            {ListItems}
        </ul>
    )
}
export default Products;