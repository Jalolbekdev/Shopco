import {
  DetailsTabs1,
  DetailsTabs2,
  DetailsTabs3,
} from "../components/DetailsPage";

export const DetailsItems = [
  {
    key: "1",
    label: "Product Details",
    children: <DetailsTabs1 />,
  },
  {
    key: "2",
    label: " Rating & Reviews",
    children: <DetailsTabs2 />,
  },
  {
    key: "3",
    label: "FAQs",
    children: <DetailsTabs3 />,
  },
];
