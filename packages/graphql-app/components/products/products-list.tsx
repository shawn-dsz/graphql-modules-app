// import Link from 'next/link';
import {
    GetProductsComponent,
    GetProductsProducts,
} from '../../lib/_generated-components';
import Link from 'next/link';

export const ProductsList = () => (
    <GetProductsComponent variables={{ id: '38904' }}>
        {({ loading, error, data: { getProducts } }) => {
            if (error) {
                <div>error</div>;
            }
            if (loading) {
                <div>Loading</div>;
            }

            return (
                <section>
                    <h1>Products list</h1>

                    <ul>
                        {getProducts &&
                            getProducts.products &&
                            getProducts.products.map(
                                (product: GetProductsProducts) => {
                                    return (
                                        <li key={`${product.id}`}>
                                            <Link
                                                href={`/product?id=${
                                                    product.id
                                                }`}
                                            >
                                                <a> {product.title}</a>
                                            </Link>
                                        </li>
                                    );
                                },
                            )}
                    </ul>
                </section>
            );
        }}
    </GetProductsComponent>
);
