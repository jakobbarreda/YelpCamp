# YelpCamp

## Summaray

This is a website that displays campgrounds around the world. You are able to register as a new user and also login
if you already have an account. this process is using authentication client side and server side to check if you
are a valid user or with login credentials. this also controls what your able to do as a user, like being able
to create a campground if your logged in or creating a review for the campsite. all the data like the users,
campgrounds and reviews are being stored with mongo's database. your able to navigate with the world map or the listings.
clicking on the campsite on the map will take you directly to that specific campsite
Anybody is able to add a campground with all the dtails as long as they are a registered user. Only that user can
delete/edit the campground details. Users are able to leave a review on the campground along with a star rating.
You are able to see any campsite that users have put up for others to see.

## Structure Info

### Cloudinary Folder

+ The cloudinary folder is a cloud based application that lets you store/edit images/videos on there server from
my website. this gives me the ability to store all media/videos and images through them so I dont have to store
them myself. This frees up space for my end and the data is more safely secured with them. Another reason I
chose cloudinary is because it's easy to manipulate the data so that's a plus.

### MVC Model

+ I am using the structure of MVC (model, view, controller) so you will see that there are a views, model and controller
folders. This is used to help break down the code into smaller folders that is easier to manage. the model is used to
represent the structure of the campgrounds, reviews, users models. this is what is beingstored and the structure it is in.
The view folder is how the information is being shown to the user. The user is able to interact with this data based on
what we set for them. The controller is kinda like the brain, as in its ability to communicate with both models and
controllers to render or manipulate data and handles request and responses.

### App Folder

+ In the app folder you will find required folders that were implemented. setting up mongoose for the mongo database.
Creating user sessions and being able to manipulate it. you will find all the routes that take you to all the
pages that the website uses. Only allowing certain sources to be implemented on the application.

### Layouts Page

+ The layouts page is just a basic structure used for all the pages. Which removes some of the duplication code that
will be on a lot of pages.

### Public Folder

+ In the public folder you will find a style sheet that was used. Also folders where mapbox javascript is located
to be able to have the logic of the map and how it functions and is being displayed. mapbox is a location data
platform which is widely used. This is why I chose to use this and because it wasn't difficult to use it in the
project. it is pretty much like a google map and depends on how you want to display
things on the map.

### Routes Folder

+ the routes folder will have common routes that some of the routes in app.js use, which allowed me to short hand
the routes and that they werent clutering the folder with long path names.

### Schemas Folder

+ In the schemas folder you will find that Joi library is being used as a schema for validation on the server
side of things. This allows me to easily require specific things or not allow html being written into the
schemas for validation.
