import DetailsTabs1 from "../Pages/DetailsPage/DetailsTabs1";
import DetailsTabs2 from "../Pages/DetailsPage/DetailsTabs2";
import DetailsTabs3 from "../Pages/DetailsPage/DetailsTabs3";

export const DetailsItems = [
  {
    key: '1',
    label: 'Product Details',
    children: <DetailsTabs1/>,
  },
  {
    key: '2',
    label: ' Rating & Reviews',
    children: <DetailsTabs2/>,
  },
  {
    key: '3',
    label: 'FAQs',
    children: <DetailsTabs3/>,
  },
];