import express from 'express';

//Initialize
const app = express();

//Settings
app.set('port', 3000);

//Middleware?


//Routing

//Static

//Execution
app.listen(app.get('port'), () => {
    console.log(`Server connected on port ${app.get('port')}`);
});