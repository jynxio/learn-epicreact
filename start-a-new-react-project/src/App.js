import { useState } from "react";

const PRODUCTS = [
    { category: "Fruits",     price: "$1", stocked: true,  name: "Apple"        },
    { category: "Fruits",     price: "$1", stocked: true,  name: "Dragonfruit"  },
    { category: "Fruits",     price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true,  name: "Spinach"      },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"      },
    { category: "Vegetables", price: "$1", stocked: true,  name: "Peas"         }
];

function ProductCategoryRow( { category } ) {

    return (
        <tr>
            <th colSpan = "2" >
                { category }
            </th>
        </tr>
    );

}

function ProductRow( { product } ) {

    const name = product.stocked
        ? product.name
        : (
            <span style = { { color: "red" } } >
                { product.name }
            </span>
        );

    return (
        <tr>
            <td>{ name }</td>
            <td>{ product.price }</td>
        </tr>
    );

}

function ProductTable( { products, filter_text, in_stock_only } ) {

    const rows = [];
    let last_category;

    products.forEach( product => {

        if ( product.name.toLowerCase().indexOf( filter_text.toLowerCase() ) === - 1 ) return;

        if ( in_stock_only && ! product.stocked ) return;

        if ( product.category !== last_category ) {

            rows.push(
                <ProductCategoryRow
                    key = { product.category }
                    category = { product.category }
                />
            );

        }

        rows.push(
            <ProductRow
                key = { product.name }
                product = { product }
            />
        );

        last_category = product.category;

    } );

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{ rows }</tbody>
        </table>
    );

}

function SearchBar( { filter_text, in_stock_only, onFilterTextChange, onInStockOnlyChange } ) {

    return (
        <form>
            <input
                type = "text"
                value = { filter_text }
                placeholder = "Search..."
                onChange = { event => onFilterTextChange( event.target.value ) }
            />
            <label>
                <input
                    type = "checkbox"
                    checked = { in_stock_only }
                    onChange = { event => onInStockOnlyChange( event.target.checked ) }
                />
                { " " }
                Only show products in stock
            </label>
        </form>
    );

}

function FilterableProductTable( { products } ) {

    const [ filter_text, setFilterText ] = useState( "" );
    const [ in_stock_only, setInStockOnly ] = useState( false );

    return (
        <div>
            <SearchBar
                filter_text = { filter_text }
                in_stock_only = { in_stock_only }
                onFilterTextChange = { setFilterText }
                onInStockOnlyChange = { setInStockOnly }
            />
            <ProductTable
                products = { products }
                filter_text = { filter_text }
                in_stock_only = { in_stock_only }
            />
        </div>
    );

}

function App() {

    return <FilterableProductTable products = { PRODUCTS } />

}

export default App;
