[![wakatime](https://wakatime.com/badge/github/supminn/neoG_Backend.svg)](https://wakatime.com/badge/github/supminn/neoG_Backend)

# neoG_backend
Backend using ExpressJS connected to MongoDB through Mongoose

## List of API endpoints
[You are now signed up. Go to login]
### Users
* POST /users/login - Takes username and password as a parameter and returns JWT.
* POST /users/signup - Providing username, password, name, and email would add a new user into the database.
* GET /users/user-id - Provides individual user's details.
* POST /users/user-id - Updates user details.

### Products
* GET /products - List of products available.
* POST /products - Addition of a new product into inventory.
* GET /products/product-id - Fetch the details of a single product.
* POST /products/product-id - Update the details of a single product.

### Products Wishlist
* GET /wishlist - List of all the products present in the user's wishlist.
* POST /wishlist - Add/remove products to/from wishlist.

### Products Cart
* GET /cart - List of all the products present in the user's cart.
* POST /cart - Add/remove/move products to/from cart.
* DELETE /cart - Empty user's cart.

### User Addresses
* GET /address - List of all the user addresses.
* POST /address - Add new address or update existing address
* Put /address - Remove an individual address from the given list.

### Videos
* GET /videos - List of videos available.
* POST /videos - Addition of a new video into the collection.
* GET /videos/video-id - Fetch the details of a single video.
* POST /videos/video-id - Update the details of a single video.

### Video History
* GET /history - List of videos present in watch history
* POST /history - Add video to history
* PUT /history - Remove video from history
* DELETE /history - Clear user's watch history

### Liked videos
* GET /liked-video - List of videos the user has liked
* POST /liked-video - Add/remove videos from liked videos list

### Playlist
* GET /playlist - All the playlist that a user owns
* POST /playlist - Create a new playlist
* GET /playlist/list-id - List of all the videos in this playlist
* POST /playlist/list-id - Add/remove videos from this playlist
* PUT /playlist/list-id - Rename this playlist
* DELETE /playlist/list-id - Delete this playlist
## Features
* MongoDB for database
* Mongoose to handle validation and communicate to MongoDB
* ExpressJS to create API routes.
* Backend created for products, cart, wishlist, address management, user details, videos.

### Future Enchancements
* Change password for users.
* Update cart logic using the quantity. (remove a product irrespective of its quantity)
* Refactor Playlist model & controller logic - populate video data.
* Create a route using cart ID. In this way, all the products to be checked out can be shared via a link.
