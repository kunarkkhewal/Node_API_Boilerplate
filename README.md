# NodeApp_IndusOS

ROUTES
GET / (login)
POST / (signup, need to give data in body)
GET /users (all users)
GET /users/:id (specific user)
PUT /users/:id/about (Update about, need to give data in body)
POST /users/:id/relationship (update relationship, need to give data in body)

indexes created on email Id (reason: for login and create user we need to check for its email id, for that index is created so that searching is fast)

data dump is attached
