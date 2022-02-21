# Shopping App

*Getting Started*
- Fork the repo to make it your own copy
- Install dependencies, `npm install`
- In **terminal 1:** Backend - Start the fake server `npm run server` or `yarn server` 
- In **terminal 2:** Frontend - Start the react app `npm start` or `yarn start`

*Backend*

- The app uses a backend service that is only to be used in development. It uses `json-server` to create an API with which you can fetch, update, read and create data.
To run the fake backend service, run the terminal ```npm run server```.
- Visit the products endpoint: `http://localhost:4000/products`
- Visit the cart endpoint: `http://localhost:4000/cart`. Also, look at the `db.json` file to watch the data update as you click the **Add to cart** found button on each product.
- To reset the cart back to the original data, run `npm run reset`

*Frontend*

- uses custom hooks: `useProducts` and `useCart` to make data and functions available in the app where needed
- uses `react-router-dom` to navigate to different views

## Next Features to Add

**Cart component**
- display all the products added and their quantity
- function to increase the product quantity
- function to decrease the product quantity
- function to remove a product from the cart

**Navbar component**
- display the totalCount of cart items in a badge
  - `https://ant.design/components/badge/`

**Product component**
- add new route that is a child of Product list. Url should be `http://localhost:4000/products/:id`
- function to display data about one product when you click the product card
- fetch the product from the server so that the data. You'll need another hook called `useParams`. It's part of the `react-router-dom` library. This hook is used to access the `:id` in the url. Once we have the product id, we can make a `GET` request to the server to retrieve that one item. Check the `json-server` docs and the `useProducts` hook as a guide. 
- **Bonus:** display whether or not it exists already in the cart, and if so, how many. 
