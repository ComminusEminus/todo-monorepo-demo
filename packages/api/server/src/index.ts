import { Request, Response, NextFunction } from 'express';
import express from 'express';
import passport from 'passport';
import { dbConn } from './databaseConn.js';
import { router } from '@api/routes';
import { loginStrategy, verificationStrategy } from '@api/middlewares'
import bodyparser from 'body-parser'
const test = true;


const app = express();
//passport.use('login', loginStrategy)
//passport.use(verificationStrategy)


// parse application/json
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router)

if (!test) {
  app.listen("3000", async () => {

    await dbConn();

    console.log(`Application started on URL http://localhost:3000`);
  });
}
export {app};

/*(async () => {
  const newUser = new User(
    {
        firstName: 'Jim', 
        lastName: 'John', 
        userName:  'JimJ', 
        password:  'password'
    })
  
  try{
    await newUser.save()
    console.log('created test user')
  }catch(err){
    console.log('did not create new test user')
  }
  
})();*/

