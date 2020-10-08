const bcrypt = require('bcryptjs');
const User = require('../model/user');
const hashPassword = require('../utils/hashPassword');

const errorMessage = (message) => {
    if(message.includes('Cast to ObjectId failed')){
        return 'Wrong Id Given'
    }
    if(message.includes('Cast to emailId failed')){
        return 'EmailId Issue'
    }
    if(message.includes(`Cannot read property 'emailId' of null`)){
        return 'EmailId missing'
    }
    if(message.includes(`Email Already Taken`)){
        return 'Email Already Taken'
    }
    if(message.includes(`Error Creating user`)){
        return 'Error Creating user'
    }
    if(message.includes(`User not found`)){
        return 'User not found'
    }
    if(message.includes(`Password does not match`)){
        return 'Password does not match'
    }
    if(message.includes(`Record Doesn't Exist`)){
        return `Record Doesn't Exist`
    }
    if(message.includes(`Password must be 8 character long`)){
        return `Password must be 8 character long`
    }

    return 'Operation Failed'
}

const createUser = async (data) => {
    try {
        const emailTaken = await User.findOne({emailId: data.emailId});
        if(emailTaken){
            throw { message: 'Email Already Taken'};
        }

        const password = await hashPassword(data.password);
        const userData = new User({
            username: data.username,
            emailId: data.emailId,
            password,
            about: data.about
        })

        const response = await userData.save();
        if(!response.username) {
            throw {message: 'Error Creating user'}
        }
        return response;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
    
}

const loginUser = async (data) => {
    try {
        const user = await User.findOne({ emailId: data.emailid });
        if(!user.emailId){
            throw {message: 'User not found'};
        }
        const doesPasswordMatch = await bcrypt.compare(data.password, user.password)
        if(!doesPasswordMatch){
            throw {message: 'Password does not match'};
        }

        return user;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
}

const findOne = async (id) => {
    try {
        const response = await User.findOne({ _id: id });
        if(!response) throw {message: `Record Doesn't Exist`};
        return response;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
    
}

const findAll = async () => {
    try {
        const response = await User.find();
        if(!response) throw {message: `Record Doesn't Exist`};
        return response;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
}

const updateAbout = async (id, about) => {
    try {
        const response = await User.findOneAndUpdate({_id: id}, {about}, {new:true});
        if(!response) throw {message: `Record Doesn't Exist`};
        return response;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
}

const updateRelationShipStatus = async (id, relationshipStatus) => {
    try {
        const response = await User.findOneAndUpdate({_id: id}, {relationshipStatus}, {new:true});
        if(!response) throw {message: `Record Doesn't Exist`};
        return response;
    } catch (error) {
        throw { 
            error: {
                message: errorMessage(error.message)
            }
        }
    }
}

module.exports={
    createUser,
    findOne,
    findAll,
    updateAbout,
    loginUser,
    updateRelationShipStatus,
}
