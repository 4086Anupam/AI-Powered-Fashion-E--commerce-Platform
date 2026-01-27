# E-Commerce Platform - Frontend Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Architecture](#architecture)
6. [Features](#features)
7. [User Roles](#user-roles)
8. [State Management](#state-management)
9. [API Configuration](#api-configuration)
10. [Routing](#routing)
11. [Components](#components)
12. [Type Definitions](#type-definitions)
13. [Theming](#theming)
14. [Utilities](#utilities)
15. [Environment Variables](#environment-variables)

---

## 🎯 Project Overview

This is a full-featured **E-Commerce Platform** frontend built with React and TypeScript. The platform supports three distinct user roles: **Customers**, **Sellers**, and **Admins**, each with their own dedicated interfaces and functionalities.

### Key Highlights
- Multi-vendor marketplace architecture
- Role-based access control
- Real-time cart and wishlist management
- Order tracking and management
- Seller dashboard with analytics
- Admin panel for platform management

---

## 🛠 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Library |
| **TypeScript** | 4.9.5 | Type Safety |
| **Redux Toolkit** | 2.10.1 | State Management |
| **React Router DOM** | 7.9.5 | Client-side Routing |
| **Material UI (MUI)** | 7.3.5 | UI Components |
| **Axios** | 1.13.2 | HTTP Client |
| **Formik** | 2.4.6 | Form Handling |
| **Yup** | 1.7.1 | Form Validation |
| **Recharts** | 3.3.0 | Data Visualization |
| **React Slick** | 0.31.0 | Carousel/Slider |
| **Day.js** | 1.11.19 | Date Manipulation |
| **Styled Components** | 6.1.19 | CSS-in-JS Styling |
| **Tailwind CSS** | - | Utility-first CSS |
| **Lucide React** | 0.553.0 | Icons |

---

## 📁 Project Structure

```
frontend/
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # Search engine directives
│
├── src/
│   ├── admin/                  # Admin module
│   │   ├── component/         # Admin-specific components
│   │   └── Pages/             # Admin pages
│   │       ├── Coupon/        # Coupon management
│   │       ├── DashBoard/     # Admin dashboard
│   │       ├── HomePage/      # Home page management
│   │       └── Sellers/       # Seller management
│   │
│   ├── customer/              # Customer module
│   │   ├── components/        # Customer-specific components
│   │   │   ├── Footer/        # Footer component
│   │   │   └── Navbar/        # Navigation bar
│   │   └── pages/             # Customer pages
│   │       ├── Accounts/      # User account management
│   │       ├── Auth/          # Authentication
│   │       ├── BecomeSeller/  # Seller registration
│   │       ├── Cart/          # Shopping cart
│   │       ├── CheckOut/      # Checkout process
│   │       ├── Home/          # Home page
│   │       ├── Product/       # Product listing
│   │       ├── ProductDetails/# Product detail view
│   │       ├── Review/        # Product reviews
│   │       └── WishList/      # Wishlist management
│   │
│   ├── seller/                # Seller module
│   │   ├── components/        # Seller-specific components
│   │   │   └── SellerDrawerList/
│   │   └── pages/             # Seller pages
│   │       ├── Accounts/      # Seller account
│   │       ├── Orders/        # Order management
│   │       ├── Payment/       # Payment management
│   │       ├── Products/      # Product management
│   │       ├── SellerDashboard/
│   │       └── sellerVerification/
│   │
│   ├── component/             # Shared components
│   │   ├── DrawerList.tsx     # Navigation drawer
│   │   └── ProfileFieldCard.tsx
│   │
│   ├── Config/                # Configuration
│   │   └── Api.ts             # Axios API configuration
│   │
│   ├── data/                  # Static data
│   │   ├── homeCategories.ts  # Home page categories
│   │   ├── category/          # Category data
│   │   ├── category1/         # Alternative categories
│   │   └── Filter/            # Filter options (brand, color, etc.)
│   │
│   ├── Routes/                # Route configurations
│   │   ├── AdminRoutes/       # Admin routes
│   │   └── SellerRouts/       # Seller routes
│   │
│   ├── State/                 # Redux state management
│   │   ├── Store.ts           # Redux store configuration
│   │   ├── AuthSlice.ts       # Authentication state
│   │   ├── fetchProduct.ts    # Product fetching utilities
│   │   ├── Admin/             # Admin-related slices
│   │   ├── Customer/          # Customer-related slices
│   │   └── Seller/            # Seller-related slices
│   │
│   ├── theme/                 # MUI theme configuration
│   │   └── customTheme.ts     # Custom theme settings
│   │
│   ├── type/                  # TypeScript type definitions
│   │   ├── AddressType.ts
│   │   ├── cartType.ts
│   │   ├── couponType.ts
│   │   ├── dealTypes.ts
│   │   ├── homeCategoryTypes.ts
│   │   ├── orderType.ts
│   │   ├── ProductTypes.ts
│   │   ├── SellerTypes.ts
│   │   ├── TransactionType.ts
│   │   ├── userType.ts
│   │   └── wishlistType.ts
│   │
│   ├── Util/                  # Utility functions
│   │   ├── sumCartItemSellingPrice.ts
│   │   └── uploadToCloudinary.ts
│   │
│   ├── App.tsx                # Main application component
│   ├── App.css                # Global styles
│   ├── index.tsx              # Application entry point
│   └── index.css              # Root styles
│
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- Backend API server running (default: `http://localhost:5454`)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_URL=http://localhost:5454
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App |

---

## 🏗 Architecture

### Application Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        App.tsx                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                   ThemeProvider                          ││
│  │  ┌───────────────────────────────────────────────────┐  ││
│  │  │                    Navbar                          │  ││
│  │  └───────────────────────────────────────────────────┘  ││
│  │  ┌───────────────────────────────────────────────────┐  ││
│  │  │                   Routes                           │  ││
│  │  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐  │  ││
│  │  │  │  Customer   │ │   Seller    │ │   Admin     │  │  ││
│  │  │  │   Pages     │ │   Pages     │ │   Pages     │  │  ││
│  │  │  └─────────────┘ └─────────────┘ └─────────────┘  │  ││
│  │  └───────────────────────────────────────────────────┘  ││
│  │  ┌───────────────────────────────────────────────────┐  ││
│  │  │                    Footer                          │  ││
│  │  └───────────────────────────────────────────────────┘  ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Data Flow (Redux)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Component  │────>│    Action    │────>│   Reducer    │
└──────────────┘     └──────────────┘     └──────────────┘
       ^                                         │
       │                                         v
       │                                  ┌──────────────┐
       └──────────────────────────────────│    Store     │
                                          └──────────────┘
```

---

## ✨ Features

### Customer Features
| Feature | Description |
|---------|-------------|
| 🏠 **Home Page** | Featured products, deals, and categories |
| 🔍 **Product Browsing** | Filter by category, price, brand, color |
| 📦 **Product Details** | Detailed view with images, reviews, specifications |
| 🛒 **Shopping Cart** | Add, update, remove items |
| ❤️ **Wishlist** | Save products for later |
| 💳 **Checkout** | Address selection, payment processing |
| 📋 **Order Tracking** | View order status and history |
| ⭐ **Reviews** | View and submit product reviews |
| 👤 **Account Management** | Profile, addresses, orders |

### Seller Features
| Feature | Description |
|---------|-------------|
| 📊 **Dashboard** | Sales analytics and insights |
| 📦 **Product Management** | Add, edit, delete products |
| 📋 **Order Management** | View and process orders |
| 💰 **Payment Tracking** | View transactions and earnings |
| ✅ **Verification** | Seller verification process |
| 👤 **Account Settings** | Business profile management |

### Admin Features
| Feature | Description |
|---------|-------------|
| 📊 **Admin Dashboard** | Platform-wide analytics |
| 🏷️ **Coupon Management** | Create and manage discount coupons |
| 🎯 **Deal Management** | Create promotional deals |
| 📂 **Category Management** | Manage product categories |
| 👥 **Seller Management** | Approve/manage sellers |
| 🏠 **Home Page Configuration** | Customize homepage layout |

---

## 👥 User Roles

### Role Hierarchy

```
┌─────────────────────────────────────────┐
│                 ADMIN                    │
│  - Full platform control                 │
│  - Seller management                     │
│  - Coupon/Deal management               │
└───────────────────┬─────────────────────┘
                    │
┌───────────────────┴─────────────────────┐
│                 SELLER                   │
│  - Product management                    │
│  - Order fulfillment                     │
│  - Earnings tracking                     │
└───────────────────┬─────────────────────┘
                    │
┌───────────────────┴─────────────────────┐
│               CUSTOMER                   │
│  - Browse products                       │
│  - Place orders                          │
│  - Write reviews                         │
└─────────────────────────────────────────┘
```

### Role Enumeration
```typescript
export enum UserRole {
  ROLE_CUSTOMER = "ROLE_CUSTOMER",
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_SELLER = "ROLE_SELLER",
}
```

---

## 📦 State Management

### Redux Store Structure

```typescript
const rootReducer = combineReducers({
  seller: sellerSlice,           // Seller profile and data
  sellerProduct: sellerProductSlice, // Seller's products
  product: productSlice,         // Product catalog
  auth: authSlice,               // Authentication state
  cart: cartSlice,               // Shopping cart
  order: orderSlice,             // Customer orders
  wishlist: wishlistSlice,       // Customer wishlist
  sellerOrder: sellerOrderSlice, // Seller's orders
  sellerTransaction: transactionSlice, // Seller transactions
  address: addressSlice,         // User addresses
  admin: homeCategorySlice,      // Admin data
  customer: homeSlice,           // Customer-specific data
  deal: dealsSlice,              // Promotional deals
});
```

### Slice Breakdown

| Slice | File | Purpose |
|-------|------|---------|
| `auth` | `AuthSlice.ts` | User authentication, login/signup, profile |
| `cart` | `CartSlice.ts` | Cart operations, item management |
| `order` | `orderSlice.ts` | Order creation and tracking |
| `product` | `ProductSlice.ts` | Product listing and filtering |
| `wishlist` | `wishlistSlice.ts` | Wishlist management |
| `address` | `addressSlice.ts` | Delivery addresses |
| `seller` | `sellerSlice.ts` | Seller profile |
| `sellerProduct` | `SellerProductSlice.ts` | Seller's product inventory |
| `sellerOrder` | `sellerOrderSlice.ts` | Seller order management |
| `admin` | `adminSlice.ts` | Admin operations |
| `deal` | `DealSlice.ts` | Promotional deals |

### Custom Hooks

```typescript
// Typed dispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed selector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## 🌐 API Configuration

### Base Configuration

```typescript
// src/Config/Api.ts
import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5454";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
```

### Authentication
JWT tokens are stored in `localStorage` and attached to API requests via the `Authorization` header:
```typescript
headers: {
  Authorization: `Bearer ${jwt}`,
}
```

---

## 🛣 Routing

### Main Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Homepage |
| `/products/:category` | `Product` | Product listing |
| `/product-details/:categoryId/:name/:productId` | `ProductDetails` | Product detail page |
| `/reviews/:productId` | `Review` | Product reviews |
| `/cart` | `Cart` | Shopping cart |
| `/checkout` | `CheckOut` | Checkout process |
| `/payment-success/:orderId` | `PaymentSuccess` | Payment confirmation |
| `/account/*` | `Account` | User account pages |
| `/wishlist` | `WishList` | User wishlist |
| `/login` | `Auth` | Authentication |
| `/become-seller` | `BecomeSeller` | Seller registration |
| `/verify-seller/:otp` | `VerifySeller` | Seller verification |
| `/seller/*` | `SellerDashboard` | Seller portal |
| `/admin/*` | `AdminDashboard` | Admin portal |

---

## 🧩 Components

### Shared Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navbar` | `customer/components/Navbar/` | Main navigation |
| `Footer` | `customer/components/Footer/` | Site footer |
| `DrawerList` | `component/` | Navigation drawer |
| `ProfileFieldCard` | `component/` | Profile field display |
| `CategorySheet` | `customer/components/Navbar/` | Category navigation |

### Customer Components
Located in `src/customer/pages/`:
- **Home** - Homepage with featured products and categories
- **Product** - Product listing with filters
- **ProductDetails** - Detailed product view
- **Cart** - Shopping cart management
- **CheckOut** - Multi-step checkout
- **Account** - User profile management
- **WishList** - Saved products

### Seller Components
Located in `src/seller/pages/`:
- **SellerDashboard** - Main seller interface
- **Products** - Product management
- **Orders** - Order processing
- **Payment** - Transaction history
- **Accounts** - Business settings

### Admin Components
Located in `src/admin/Pages/`:
- **AdminDashboard** - Main admin interface
- **Coupon** - Coupon management
- **HomePage** - Homepage configuration
- **Sellers** - Seller management

---

## 📝 Type Definitions

### Core Types

#### Product
```typescript
export interface Product {
  id?: number;
  title: string;
  description: string;
  mrpPrice: number;
  sellingPrice: number;
  discountPercent: number;
  quantity: number;
  color: string;
  images: string[];
  numRatings?: number;
  category?: Category;
  seller?: Seller;
  createdAt?: Date;
  Sizes: string;
}
```

#### User
```typescript
export interface User {
  id?: number;
  password?: string;
  email: string;
  fullName: string;
  mobile?: string;
  role: UserRole;
  addresses?: Address[];
}
```

#### Seller
```typescript
export interface Seller {
  id?: number;
  mobile: string;
  otp: string;
  GSTIN: string;
  pickupAddress: PickupAddress;
  bankDetails: BankDetails;
  sellerName: string;
  email: string;
  businessDetails: BusinessDetails;
  password: string;
  accountStatus?: string;
}
```

#### Address
```typescript
export interface Address {
  id?: number;
  name: string;
  mobile: string;
  pinCode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}
```

### All Type Files
- `AddressType.ts` - Address interfaces
- `cartType.ts` - Cart and cart item types
- `couponType.ts` - Coupon types
- `dealTypes.ts` - Deal/promotion types
- `homeCategoryTypes.ts` - Category display types
- `orderType.ts` - Order types
- `ProductTypes.ts` - Product and category types
- `SellerTypes.ts` - Seller-related types
- `TransactionType.ts` - Transaction types
- `userType.ts` - User and role types
- `wishlistType.ts` - Wishlist types

---

## 🎨 Theming

### Material UI Custom Theme

```typescript
// src/theme/customTheme.ts
import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0694bf",  // Primary brand color
    },
    secondary: {
      main: "#EAF0F1",  // Secondary color
    },
  },
});

export default customeTheme;
```

### Styling Approaches
1. **Material UI (MUI)** - Component library with built-in theming
2. **Tailwind CSS** - Utility-first CSS framework
3. **Styled Components** - CSS-in-JS for custom styles
4. **CSS Files** - Traditional CSS for global styles

---

## 🔧 Utilities

### Cart Utilities
```typescript
// src/Util/sumCartItemSellingPrice.ts
// Functions for calculating cart totals
```

### Cloud Upload
```typescript
// src/Util/uploadToCloudinary.ts
// Image upload functionality to Cloudinary
```

---

## 🌍 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `REACT_APP_API_URL` | `http://localhost:5454` | Backend API URL |

### Setting Up Environment Variables

1. Create a `.env` file in the project root
2. Add your environment variables:
   ```env
   REACT_APP_API_URL=https://your-api-url.com
   ```
3. Restart the development server

---

## 📚 Additional Resources

### Dependencies Documentation
- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Formik](https://formik.org/)
- [Recharts](https://recharts.org/)

### Development Guidelines
1. Follow TypeScript best practices
2. Use functional components with hooks
3. Keep components small and focused
4. Use Redux for global state, local state for UI
5. Follow the existing folder structure

---

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| API connection failed | Check if backend is running on correct port |
| Authentication errors | Clear localStorage and re-login |
| Build failures | Delete `node_modules` and reinstall |
| Type errors | Run `npm run build` to see detailed errors |

### Debug Mode
Enable Redux DevTools in your browser for state debugging.

---

## 📄 License

This project is private and part of a Final Year Project.

---

## 👨‍💻 Author

Final Year Project - E-Commerce Platform

---

*Documentation generated on January 28, 2026*
