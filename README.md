# E-Commerce Platform - Documentation


---

# 📌 Project Overview

The **AI-Powered Fashion E-Commerce Platform** is an intelligent online shopping application designed to enhance the customer shopping experience using Artificial Intelligence.

The platform provides personalized fashion recommendations based on user preferences, shopping behavior, and current fashion trends. It also includes advanced AI features such as virtual try-on, skin tone–based outfit suggestions, and sentiment analysis of customer reviews to improve user engagement and product insights.

The system helps users discover suitable fashion products more efficiently while enabling businesses to understand customer preferences, predict product demand, and improve overall sales performance.

The application is built using a modern full-stack architecture with a responsive frontend, secure backend APIs, and AI-driven recommendation systems for smart decision-making.

---



# 🛠️ Tech Stack

```text
Frontend
│
├── React.js
│   └── # User interface development
│
└── TypeScript
    └── # Type-safe frontend development

Backend
│
└── Java Spring Boot
    └── # REST API & business logic

Database
│
└── MySQL
    └── # Relational database management

Additional Technologies
│
├── JWT Authentication
│   └── # Secure user authentication & authorization
│
├── Spring Security
│   └── # Role-based access control & API security
│
├── Maven
│   └── # Dependency management & build tool
│
├── REST APIs
│   └── # Communication between frontend & backend
│
├── Git & GitHub
│   └── # Version control & collaboration
│
└── AI Integration
    └── # AI-powered 


```

# 📂 Backend Project Structure

```text
Backend/
│
├── src/
│   │
│   ├── main/
│   │   │
│   │   ├── java/com/taskmanagement/
│   │   │   │
│   │   │   ├── config/              
│   │   │   │   └── # Security & application configuration
│   │   │   │
│   │   │   ├── controller/          
│   │   │   │   └── # REST API controllers
│   │   │   │
│   │   │   ├── dto/                 
│   │   │   │   └── # Request & Response DTOs
│   │   │   │
│   │   │   ├── entities/            
│   │   │   │   └── # JPA entity classes
│   │   │   │
│   │   │   ├── enums/               
│   │   │   │   └── # Enum definitions
│   │   │   │
│   │   │   ├── exception/           
│   │   │   │   └── # Global exception handling
│   │   │   │
│   │   │   ├── repository/          
│   │   │   │   └── # JPA repositories
│   │   │   │
│   │   │   ├── security/            
│   │   │   │   └── # JWT & Spring Security logic
│   │   │   │
│   │   │   ├── service/             
│   │   │   │   └── # Service interfaces
│   │   │   │
│   │   │   ├── service/impl/        
│   │   │   │   └── # Service implementations
│   │   │   │
│   │   │   ├── util/                
│   │   │   │   └── # Utility/helper classes
│   │   │   │
│   │   │   └── TaskManagementApplication.java
│   │   │
│   │   └── resources/
│   │       │
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       ├── application-prod.properties
│   │       └── static/
│   │
│   └── test/
│       └── java/com/taskmanagement/
│
├── target/                          
│   └── # Compiled build files
│
├── Dockerfile                       
│   └── # Docker image configuration
│
├── docker-compose.yml               
│   └── # Multi-container setup
│
├── pom.xml                          
│   └── # Maven dependencies & build configuration
│
├── .gitignore                       
│   └── # Git ignored files
│
├── mvnw                             
│   └── # Maven wrapper
│
├── mvnw.cmd                         
│   └── # Maven wrapper for Windows
│
└── README.md                        
    └── # Project documentation
```



---

## 🏗 Architecture

# 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │      Frontend         │
                    │   React + TypeScript  │
                    └──────────┬────────────┘
                               │
                               │ HTTP Requests / REST APIs
                               ▼
                    ┌───────────────────────┐
                    │   Spring Boot Backend │
                    │   REST API Layer      │
                    └──────────┬────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
┌───────────────┐    ┌────────────────┐    ┌────────────────┐
│ Authentication│    │ Business Logic │    │ AI Services    │
│ & Security    │    │ Service Layer  │    │ Recommendation │
│ JWT + Spring  │    │                │    │ & Analysis     │
│ Security      │    │                │    │                │
└──────┬────────┘    └────────┬───────┘    └────────┬───────┘
       │                      │                     │
       └──────────────┬───────┴─────────────────────┘
                      │
                      ▼
            ┌───────────────────┐
            │ Repository Layer  │
            │ Spring Data JPA   │
            └─────────┬─────────┘
                      │
                      ▼
            ┌───────────────────┐
            │     MySQL DB      │
            │ User & Product    │
            │ Data Storage      │
            └───────────────────┘
```

## 📌 Architecture Flow

1. The user interacts with the React frontend application.

2. Frontend sends HTTP requests to the Spring Boot REST APIs.

3. Spring Security and JWT handle authentication and authorization.

4. Controllers receive API requests and forward them to the Service Layer.

5. The Service Layer processes business logic and AI-related operations.

6. Repository Layer communicates with the MySQL database using Spring Data JPA.

7. AI modules generate personalized recommendations and sentiment analysis.

8. The processed response is sent back to the frontend and displayed to the user.
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

## Frontend

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
