<a name="readme-top"></a>

<!-- PROJECT TITLE -->

# **Adomin - An E-Commerce Admin Dashboard**

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#links">Links</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-description">Project Description</a></li>
        <li><a href="#user-stories">User Stories</a></li>
        <li><a href="#notable-features">Notable Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#api-endpoints">API Endpoints</a>
      <ul>
        <li><a href="#client-apis">Client APIs</a></li>
        <li><a href="#general-apis">General APIs</a></a></li>
        <li><a href="#management-apis">Management APIs</a></a></li>
        <li><a href="#sales-apis">Sales APIs</a></li>
      </ul>
    </li>
    <li>
      <a href="#entity-relationship-diagram">Entity Relationship Diagram</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

---

<!-- LINKS -->

## **Links**

- Frontend Repository: [https://github.com/hoanglechau/adomin-fe](https://github.com/hoanglechau/adomin-fe)
- Backend Repository: [https://github.com/hoanglechau/adomin-be](https://github.com/hoanglechau/adomin-be)
- Deployed Frontend: [https://adomin.vercel.app/](https://adomin.vercel.app/)
- Deployed Backend: [https://adomin-be-production.up.railway.app/](https://adomin-be-production.up.railway.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ABOUT THE PROJECT -->

## **About The Project**

[![Adomin Screenshot One][screenshot-one]](https://example.com)

[![Adomin Screenshot Two][screenshot-two]](https://example.com)

### **Project Description**

Adomin is a full-stack e-commerce Admin Dashboard app that displays graphs and tables of sales and performance stats.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **User Stories**

- As a user, I can view a Dashboard with general sales information in table and graph forms.
- As a user, I can view a list of products.
- As a user, I can view a table with a list of customers.
- As a user, I can view a table with a list of transactions.
- As a user, I can view a world map showing where the users are located.
- As a user, I can view a line graph displaying an overview of general sales revenue and profit.
- As a user, I can view a chart of daily sales.
- As a user, I can view a chart of monthly sales.
- As a user, I can view a pie chart breakdown of sales by category.
- As a user, I can view a table with a list of admins.
- As a user, I can view a table with my Affiliate Sales Performance.
- As a user, I can toggle between light and dark modes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Notable Features**

- Users can switch between dark and light modes.
- In the Transactions page, users can choose to hide or show individual columns.
- In the Transactions page, users can change the display density of the table information (Compact, Standard, or Comfortable).
- In the Transactions page, users can download the data in CSV format.
- In the Transactions page, users can print the table.
- In the Overview page, users can change the unit of currency of the vertical axis (Units or Sales).
- In the Daily page, users can change the time period shown on the chart.
- All tables have server-side paginations. Users can change the number of rows per page, and change pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Built With**

- React
- React Router
- Redux
- Redux Toolkit
- Material UI
- nivo (charts)
- Node.js
- Express
- MongoDB
- ESLint
- Prettier

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- API ENDPOINTS -->

## **API Endpoints**

### **Client APIs**

```js
/**
 * @description Get all products
 * @param {*} req
 * @param {*} res
 * @route GET /client/products
 * @access Public
 */
```

```js
/**
 * @description Get all customers
 * @param {*} req
 * @param {*} res
 * @route GET /client/customers
 * @access Public
 */
```

```js
/**
 * @description Get the locations of all customers
 * @param {*} req
 * @param {*} res
 * @route GET /client/geography
 * @access Public
 */
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **General APIs**

```js
/**
 * @description Get a single user by ID
 * @param {id} req
 * @param {*} res
 * @route GET /general/user/:id
 * @access Public
 */
```

```js
/**
 * @description Get the Dashboard stats
 * @param {*} req
 * @param {*} res
 * @route GET /general/dashboard
 * @access Public
 */
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Management APIs**

```js
/**
 * @description Get all admins
 * @param {*} req
 * @param {*} res
 * @route GET /management/admins
 * @access Public
 */
```

```js
/**
 * @description Get the performance stats of users
 * @param {id} req
 * @param {*} res
 * @route GET /management/performance/:id
 * @access Public
 */
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Sales APIs**

```js
/**
 * @description Get all sales data
 * @param {*} req
 * @param {*} res
 * @route GET /sales/sales
 * @access Public
 */
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ENTITY RELATIONSHIP DIAGRAM -->

## **Entity Relationship Diagram**

[![Adomin ERD][erd]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## **Getting Started**

### **Prerequisites**

1. Check your version of Node.js and npm
   ```sh
   node -v
   npm -v
   ```
2. Install Node.js and npm if needed at [https://nodejs.org/en/download](https://nodejs.org/en/download)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### **Installation**

#### _Backend_

1. Clone the repo
   ```sh
   git clone https://github.com/hoanglechau/adomin-be.git
   cd adomin-be
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create an `.env` file with the following contents
   ```js
   MONGO_URI=your_mongodb_uri
   PORT=your_port // default value: 9000
   ```
4. Replace the default values with your own values for `PORT` (optional), and `MONGO_URI` in the `.env` file
5. Start the server
   ```sh
   npm start
   ```

#### _Frontend_

1. Clone the repo
   ```sh
   git clone https://github.com/hoanglechau/adomin-fe.git
   cd adomin-fe
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create an `.env` file with the following contents
   ```js
   REACT_APP_BASE_URL=your_api_url // default: http://localhost:5001
   ```
4. Replace the value of `REACT_APP_BASE_URL` with the URL of your deployed API
5. Build the app
   ```sh
   npm run build
   ```
6. Run the app
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot-one]: public/images/Adomin.png
[screenshot-two]: public/images/Adomin%202.png
[erd]: public/images/Adomin%20ERD.png
