import style from "./stock.module.css";
const stock = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

// 分类组件
const ProductCategoryRow = ({ category }) => {
    return (
        <>
            <tr>
                <td colSpan={2}>{category}</td>
            </tr>
        </>
    );
}

// 每一行显示的库存信息的组件
const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name : <span style={{ color: "#f20" }}>{product.name}</span>;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        </>
    );
}

// 根据用户输入显示和筛选的组件
const ProductTable = ({ products }) => {
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category} />
            );
        }

        rows.push(
            <ProductRow product={product} key={product.name} />
        );

        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

// 搜索组件
const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="searching" />
            <label className={style.lb}>
                <input type="checkbox" />{''}
                仅展示有库存商品
            </label>
        </form>
    );
}


// 库存筛选组件
const FilterableProductTable = () => {
    return (
        <>
            <div className={style.stock}>
                <SearchBar />
                <ProductTable products={stock} />
            </div>
        </>
    );
}


export default FilterableProductTable;