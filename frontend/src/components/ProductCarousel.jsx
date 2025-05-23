import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import Loader from './Loader';
import Message from './Message';

const ProductCarousel = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item
          key={product._id}
          as={Link}
          to={`/product/${product._id}`}
          className="text-center"
        >
          <Image src={product.image} alt={product.name} fluid />
          <Carousel.Caption className="carousel-caption">
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
