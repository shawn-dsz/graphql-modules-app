import App from '../components/App';
import { Product } from '../components/product/product';

export default () => (
    <App>
        <div className="content__section">
            <h1>Example GraphQL</h1>

            <h2>React client</h2>
            <p>
                Example with Batched/non-batched queries and non SSR option. On
                this demonstration page the first product is rendered with SSR.
                The second is rendered in the main client call and the third is
                debatched so not in the main client call.
            </p>
            <p>
                When you came from the 'products' page everything is retrieved
                from the cache so nothing is retrieved. For the demonstration
                effect just reload this page.
            </p>

            <Product id="9200000100377941" ssr={true} />

            <Product id="9200000097694517" ssr={false} />

            {/* debatch non ssr test, by default everything is batched but easy to debatch when you expect the server to be slow */}
            <Product
                id="9200000095214306"
                ssr={false}
                context={{ important: true }}
            />

            <p>
                <i>
                    This application is using the free open api of{' '}
                    <a href="https://bol.com">bol.com</a> at the moment for the
                    products part. Some other parts will have mocked data so
                    without a key you can still play arround.
                </i>
            </p>
        </div>
    </App>
);
