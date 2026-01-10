import express from 'express';

const router = express.Router();

const users = [
    {
        name: "John",
        lastName: "Doe",
        age: 25
    },

    {
        name: "Jane",
        lastName: "Smith",
        age: 30
    
    }
]

router.get('/', (req, res) => {
    res.send(users);

});

router.post('/', (req, res) => {
    const user = req.body;

    console.log(user);

    users.push(user);

    res.send (`Users with the name ${user.firstName} added to the database`);


    });


export default router;
