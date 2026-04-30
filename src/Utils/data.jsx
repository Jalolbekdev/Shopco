import {
  VersaceIcon,
  ZaraIcon,
  PradaIcon,
  CelvinkIcon,
  Guccicon,
  ApplepayIcon,
  GooglepayIcon,
  MastercardIcon,
  PaypalIcon,
  VizaIcon,
  LeftArrowIcon
} from "../assets/icons";

import {
  DetailsTabs1,
  DetailsTabs2,
  DetailsTabs3,
} from "../components/DetailsPage";


export const ShopSidebarCategoryItems=[
    {
        title:"T-shirts",
        icon:<LeftArrowIcon/>
    },
    {
        title:"Shorts",
        icon:<LeftArrowIcon/>
    },
    {
        title:"Shirts",
        icon:<LeftArrowIcon/>
    },
    {
        title:"Hoodie",
        icon:<LeftArrowIcon/>
    },
    {
        title:"Jeans",
        icon:<LeftArrowIcon/>
    },

]

export const ShopSidebarSizeItem=[
    {
        size:"XX-Small"
    },
    {
        size:"X-Small"
    },
    {
        size:"Small"
    },
    {
        size:"Medium"
    },
    {
        size:"Large"
    },
    {
        size:"X-Large"
    },
    {
        size:"XX-Large"
    },
    {
        size:"3X-Large"
    }
]
export const BannerBrendsItem = [
  {
    id: 1,
    icon: <VersaceIcon />,
  },
  {
    id: 2,

    icon: <ZaraIcon />,
  },
  {
    id: 3,

    icon: <Guccicon />,
  },
  {
    id: 4,
    icon: <PradaIcon />,
  },
  {
    id: 5,
    icon: <CelvinkIcon />,
  },
];
export const BannerProductItem=[
    {
        num:"200+",
        title:"International Brands"
    },
    {
        num:"2,000+",
        title:"High-Quality Products"   
    },
    {
        num:"30,000+",
        title:"Happy Customers"
    },


]

export const DetailsBottomContents=[
    {
        id:1,
        title:"Material composition",
        subtitle:"100% Cotton"
    },
    {
        id:2,
        title:"Care instructions",
        subtitle:"Machine wash warm, tumble dry"
    },
    {
        id:3,
        title:"Fit type",
        subtitle:"Classic Fit"
    },
    {
        id:4,
        title:"Pattern",
        subtitle:"Solid"
    }
]

  export const DetailsFaq = [
  {
    key: '1',
    label: 'What is the material of the t-shirt?',
    children: "Provide details about the fabric type (e.g., cotton, polyester, blend), weight, and any specific features.",
  },
  {
    key: '2',
    label: "What are the care instructions for the t-shirt?",
    children: "Outline recommended washing, drying, and ironing methods to maintain quality and longevity.",
  },
  {
    key: '3',
    label: 'What is the design or print on the t-shirt made of?',
    children: "Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.",
  },
  {
    key: '4',
    label: 'Is the t-shirt unisex or designed for specific genders?',
    children: "Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.",
  },
];


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

export const FooterItems = [
  {
    id: 1,
    title: "Company",
     subtitle:"About", 
     subtitletwo:"Fetures", 
     subtitlethree:"Works",
     subtitlefour:"Career"
  },
  {
    id: 2,
    title: "HELP",
     subtitle:"Customer Support", 
     subtitletwo:"Delivery Details", 
     subtitlethree:"Terms & Conditions",
     subtitlefour:"Privacy Policy"
  },
  {
    id: 3,
    title: "FAQ",
     subtitle:"Account", 
     subtitletwo:"Manage Deliveries", 
     subtitlethree:"Orders",
     subtitlefour:"Payments"
  },
  {
    id: 4,
    title: "RESOURCES ",
     subtitle:"Free Books", 
     subtitletwo:"Development Tutorial", 
     subtitlethree:"How to-Blog",
     subtitlefour:"Youtube Playlist"
  }
]



export const FooterPayItems = [
  {
    id: 1,
    icon: <VizaIcon />,
  },
  {
    id: 2,
    icon: <MastercardIcon />,
  },
  {
    id: 3,
    icon: <PaypalIcon />,
  },
  {
    id: 4,
    icon: <ApplepayIcon />,
  },
  {
    id: 5,
    icon: <GooglepayIcon />,
  },
];