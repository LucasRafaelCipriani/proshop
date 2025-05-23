import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import MetaData from '../components/MetaData';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, isError, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {keyword ? (
        <>
          <MetaData title="Search Results" />
          <Link className="btn btn-light mb-4" to="/">
            Go Back
          </Link>
        </>
      ) : (
        <ProductCarousel />
      )}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {keyword ? <h1>Search Results</h1> : <h1>Latest Products</h1>}
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} key={product._id} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
