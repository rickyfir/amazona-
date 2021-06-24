## Step by Step that im going todo

1. Created git Repo, then clone to git Bash.
2. Open git Bash on your PC, type ls -la, cd desktop -> then ls -la -> mkdir (filename) -> cd (filename) -> type (code .) for open VScode.
3. Created file frontend/src.
4. Created index.html -> edit your index.
5. Open Terminal type npm init.
6. npm install -D live-server.
7. on package.json edited script "start" : "live-server src --verbose", u can see my package.json -> after that open terminal again type npm start to run your index.html.

## Design Structure

1. Create style.css.
2. link style.css to index.html.
3. Create div.grid-container, Create header, main and footer.
4. Style css your html, body.
5. Style grid-container header, main and footer.

## Create Static Home Screen

1.  create ul.products
2.  create li
3.  create div.product
4.  add .product-image, .product-name, .product-brand, .product-price
5.  style ul.products and internal divs
6.  duplicate 2 times to show 3 products

## Render Dynamic Home Screen

1.  create data.js
2.  export an array of 6 products
3.  create screens/HomeScreen.js
4.  export HomeScreen as an object with render() method
5.  implement render()
6.  import data.js
7.  return products mapped to lis inside an ul
8.  create app.js
9.  link it to index.html as module
10. set main id to main-container
11. create router() function
12. set main_container innerHTML to HomeScreen.render()
13. set load event of window to router() function
