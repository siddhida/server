const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const { sendMailToUser, forgotPasswordMailing } = require("./../utils/nodeMailer");

const UserModel = require('../model/user');


module.exports = {
     async registerUser(req,res){
        const saltRounds = 10;
        // const activationToken = await jwt.sign({ id: Math.random() }, process.env.TEMP_TOKEN_SECRET)
        // let hashedPassword;
        const {name, age, email, role, password } = req.body;
        let found = await UserModel.findOne({email});
        if(!found){
            var salt = bcrypt.genSaltSync(saltRounds);
            var hashedPassword = bcrypt.hashSync(password, salt);
            const registeredUser = await UserModel.create({ name, age, email, role, password: hashedPassword });
            if(registeredUser) {
                const payload = { id: Math.random() };
                const secret = 'mySecretKey';
                const options = { expiresIn: '1h' };
                const activationToken = jwt.sign(payload, secret, options);
                registeredUser.activationToken = activationToken;
                registeredUser.save()
                // sendMailToUser(`${name}`, req.body.email, activationToken);
                res.status(202).send(`${name} account registered Successfully. An email has been sent to your gmail to activate your account`);
                // return res.status(200).send({token, status:'Registered'});
            }
            return res.status(400).send({status: 'Failed'})
        }
        return res.status(201).send({status: 'User(email already registered) already exist'});


    },
    async fetchRegisteredUsers(req,res){
        const allRegsteredUsers = await UserModel.find({});
        if(allRegsteredUsers){
            return res.status(200).send({allRegsteredUsers, status: 'Success'});
        }
        return res.status(400).send({status: 'Failed'});
    },
    async deleteRegisteredUser(req,res){
        let deleted = await UserModel.deleteOne({ _id: req.params.id});
        if(deleted){
          return  res.status(200).send({deleted, status: 'Success'});
        }
        return res.status(400).send({status: 'Failed'});

    }
}

