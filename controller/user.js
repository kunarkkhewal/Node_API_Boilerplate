const User = require('../model/user');

const createUser = async (data) => {
    try {
        const userData = new User({
            username: data.username,
            emailId: data.emailId,
            password: data.password,
            about: data.about
        })
        const response = await await userData.save();
        if(!response) return `Record Doesn't Exist`
        return response;
    } catch (error) {
        throw { 
            error: {
                message: error.message
            }
        }
    }    
}

const findOne = async (emailId) => {
    try {
        const response = await User.findOne({ emailId });
        if(!response) return `Record Doesn't Exist`
        return response;
    } catch (error) {
        throw { 
            error: {
                message: error.message
            }
        }
    }
    
}

const findAll = async () => {
    try {
        const response = await User.find();
        if(!response) return `Records Doesn't Exist`
        return response;
    } catch (error) {
        throw { 
            error: {
                message: error.message
            }
        }
    }
}

const updateAbout = async (emailId, about) => {
    try {
        const response = await User.findOneAndUpdate({emailId}, {about}, {new:true});
        if(!response) return `Record Doesn't Exist`
        return response;
    } catch (error) {
        throw { 
            error: {
                message: error.message
            }
        }
    }
}

module.exports={
    createUser,
    findOne,
    findAll,
    updateAbout,
}
