<h2>Swap Tune</h2>

**Website Link:** [https://swap-tune.web.app/](https://swap-tune.web.app/)

**Credentials:**

```
Admin Email: admin@gmail.com
Admin Password: 12345678
Seller Email: seller@gmail.com
Seller Password: 12345678
```

**Website Overview:** It is a resale website for musical instruments that allow sellers to add products for sale and buyers to order their favorite products using Stripe. An admin can manage categories, buyers, and sellers.

**Achievements:**

- React Query is used to query data from APIs, caching, and revalidation, which provides a good user experience.
- Private frontend routes and backend API routes are protected. JWT is used for authentication and role-based authorization allows users to perform tasks based on their roles.
- React hook form and Zod provides proper form control and validation on the front end.
- Firebase handles Email/Password and Google Login.
- React Context API handles the user state as a global state.
- Mongoose Schema validation ensures that all documents are validated against the schema whenever they are created or updated in the database.
- Stripe is used for payment.

**Features:**

- A user can register as a buyer or seller. Google login will be considered as a buyer.
- A User can't book a product unless the user is logged In.
- Only a buyer can place an order, seller or admin are not allowed.
- Dashboard is a private route, so only logged-in users can access them. Logged In users will see the dashboard according to their user role.
- Buyer will see My orders section, all booked products will be there and buyer can pay for any order using stripe. Paid products will be removed from the website.
- Seller will see My products, Add product sections. Seller can add or delete any product. Seller can also toggle the advertised mode and the advertised product will display on the homepage.
- Admin will see All sellers, All buyers, Add admins, Add category, and Reported items sections. Admin can add a new category and can delete or clear any reported Item. Admin can also convert any seller or buyer to an admin and can also delete them.

**Technologies Used:** Typescript, React, React Query, Tailwind CSS, Express, Mongoose, Firebase, JsonWebToken, Stripe, React-router, React-hook-form, Zod, Axios, React-hot-toast.

> **Server-side Github:** [https://github.com/abhiskg/swap-tune-backend](https://github.com/abhiskg/swap-tune-backend)
