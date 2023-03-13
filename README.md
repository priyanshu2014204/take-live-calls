



![logo](https://playo-website.gumlet.io/playo-website-v2/Logo+with+Trademark_Filled.png)
# LIVEYOUNG https://playo-9e5g.onrender.com

Liveyoung is a clone of playo that help sports enthusiast to connect and attend event



## Tech Stack

**Client:** React js, css

**Server:** Node.js, Express.js , MongoDB


## Frontend Part

- Home page
![Screenshot (517)](https://i.ibb.co/9Ycrr7d/Home-playo.png)
- Login/Register
![Screenshot (517)](https://i.ibb.co/34NMZkD/register-playo.png)
- Create Event page
![Screenshot (517)](https://i.ibb.co/Q9TFyZj/create-Event-playo.png)
- Look into all request page
![Screenshot (517)](https://i.ibb.co/HpSTKnq/your-Event-playo.png)
- Dashboard (To tack your ticket)
- Search Event
- Event card
- Event Details
- Book Event

## Backend Part
- Authentication using JWT
![Screenshot (517)](https://jwt.io/img/pic_logo.svg)
- Hashing password 
   ### Bcrypt 
- Mongoose - connecting the database
- Server side -->> Node.js and Express 
### Database - 
    - MongoDB

## Features 
 -  View Events across the globe
 -  Can create event
 -  See the nearby Event first
 -  Look who can join your Event
 -  Limit Your Event (Limit :- 50)
 -  Dashboard feature
 -  Vanish all the pending request 
## Application Guide



### To use Event Search feature 
-  First type the desired location (eg. del || delhi for delhi )
-   User can see all the upcoming event 
-   Event are sorted by date by default so no worries 
-  Click on BUY NOW to see more details

#### How to buy???
- Just Click on BUY NOW of details page to book your seat
- Once you done you will get a pop up showing You are in pending State
- Only Admin can accept or reject your request so kindly wait

### How to use Admin Feature
-  Go to create Event and fill all the details
-  If a user request's your event to join You can see that in request page 
![Screenshot (517)](https://i.ibb.co/HpSTKnq/your-Event-playo.png)
-  Here under status you can check if the status is pending you will see two button accept or reject

### Sorting feature
-  Event on booking page is sorted by default(Backend)
-  On request page you can sort accroding to the status (Done from backend)
-  By default it will show all status 




## Examples
 #### How I'm storing Data in Database
```javascript
const schema=new mongoose.Schema({
    email:{
    type:String,
    required:[true,'please enter a email']
  },
  username:{
    type:String,
    required:[true,'please enter a username']
  },
  password:{
    type:String,
    required:[true,'please enter a password']
  },
  eventOrganising:[
    {
        type:String,
        required:true
    }
  ],
  eventJoining:[
     {
        type:String,
        required:true
    }
  ]
})
```

# Backend api endpoints
create user -> post: localhost:8080/user/register  
    sample data : 
    
    {
      "username": "dummyhuman",
      "email": "dummyvodafon@gmail.com",
      "password": "123456password"
    }
  ---   

  post : localhost:8080/user/login 

     Provide the username or email and password to login

   post : localhost:8080/user/details


     Can see your details and your events and all !middle ware in between please be carefull

 post : localhost:8080/event/createevent
    
      Can create Your own event with the timing and limit the number of seats as well
     

   - post : localhost:8080/event/searcheventbycity 
   -  post  : localhost:8080/event//detail/:eventid
   - post : localhost:8080/event/mydashboard
   - post  : localhost:8080/event//bookticket/:id
   -  post  : localhost:8080/event/conformticket/:eventid
   -  post  : localhost:8080/event/conformticket/:eventid


## Vanish outdated Request -  localhost:8080/event/rejectoutdated
     





 

    
