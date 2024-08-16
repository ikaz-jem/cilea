import ncNanoId from "../utils/ncNanoId";
//icons 
import { UserIcon,FaceFrownIcon,KeyIcon } from "@heroicons/react/24/outline";




export const MEGAMENU_TEMPLATES = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/page-collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/page-collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/page-search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-my-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const OTHER_PAGE_CHILD = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Demo 1",
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Home Demo 2",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/page-collection",
        name: "Category page 1",
      },
      {
        id: ncNanoId(),
        href: "/page-collection-2",
        name: "Category page 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
      {
        id: ncNanoId(),
        href: "/product-detail-2",
        name: "Product detail 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

const AccountLinks = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Profile",
    LinkIcon:UserIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Mes Options De Paiement",
    LinkIcon:FaceFrownIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Mes Adresses",
    LinkIcon:FaceFrownIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Mes Mensurations",
    LinkIcon:FaceFrownIcon
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Gérer Mon Compte",
    LinkIcon:KeyIcon
  },

];
const AvantagesLinks = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Mes Coupons",
    LinkIcon:UserIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Mes Point",
    LinkIcon:FaceFrownIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Mes reductions",
    LinkIcon:FaceFrownIcon
  },

  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Wallet",
    LinkIcon:KeyIcon
  },

];
const OrdersLinks = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Historique",
    LinkIcon:UserIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Commandes Expidie",
    LinkIcon:FaceFrownIcon
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "En cours de traitment",
    LinkIcon:FaceFrownIcon
  },

  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Non Paye",
    LinkIcon:KeyIcon
  },

];

export const DashboardMenuLinks = [
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Account",
    type: "dropDown",
    children: AccountLinks,
    LinkIcon:false,

  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Mes Avantages",
    type: "dropDown",
    children: AvantagesLinks,
    LinkIcon:false,

  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Mes Commandes",
    type: "dropDown",
    children: OrdersLinks,
    LinkIcon:false,

  },
  {
    id: ncNanoId(),
    href: "/page-collection-2",
    name: "Autres Services",
    LinkIcon:false,
  },

  {
    id: ncNanoId(),
    href: "/page-collection-2",
    name: "Politiques",
    LinkIcon:false,
  },


];
