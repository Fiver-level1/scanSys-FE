# Navigate to the project directory:
    cd scanSys-FE
    npm i

# Install dependencies:
    npm i

# Start the development server:
    npm run dev

# Folder Structure

1. Components
    Reusable UI components for building the application:

    BackNavigate: Handles navigation to previous pages.
    Home: Displays the homepage content.
    Banner: Displays promotional banners.
    CookiesPopUp: Handles cookie consent management.
    Filter: Implements filtering functionality for data.
    FoodCardHome: Card component for displaying food items.
    OrderCart: Displays items in the user's cart.
    OrderHistory: Shows the user's past orders.
    pageNotFound: 404 error page.
    ProtectionRoute: Protects routes based on authentication.
    Sidebar: Navigation menu for easier access.

2. Constants
    Contains constant values for the app:
    cookieConst: Manages cookie settings and configurations.

3. Content
    Static content and text data:
    navList: List of navigation menu items.
    privacyAndPolicy: Privacy policy details.
    termsAndCondition: Terms and conditions.

4. Context
    State management using React Context:
    AuthContext: Manages user authentication.
    myContext: General-purpose context for the application.

5. Services
    API service layers for managing backend interactions:
    ApiController: Centralized API request handler.
    AuthControllerWithoutToken: Handles authentication APIs without token validation.
    CartApis: APIs for cart-related operations.
    ProductApis: APIs for managing product-related operations.

6. Utils
    Utility functions and helpers to simplify repetitive tasks.


# Keys To Replace
Before running the project in your environment, ensure you replace the following keys in the Constants file to match your application's requirements:

BASE_URL: The base URL of your backend server.
CLIENT_ID: Unique identifier for your application, used for authentication.
CLIENT_SECRET: Secret key for secure backend interactions.

