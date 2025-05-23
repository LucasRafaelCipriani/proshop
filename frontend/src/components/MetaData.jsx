import { Title, Meta } from 'react-head';

const MetaData = ({
  title = 'Welcome to ProShop',
  description = 'We sell the best products for cheap',
  keywords = 'electronics, buy electronics, cheap electronics',
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content={keywords} />
    </>
  );
};

export default MetaData;
