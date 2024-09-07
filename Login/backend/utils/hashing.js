const bcrypt =require("bcryptjs");

const encryptPassword = async (password) => {
    try {
        const salt =await bcrypt.genSalt(10);
        const hash_pass =await bcrypt.hash(password, salt);
        return hash_pass;
    } catch (error) {
        console.log(error);
    }
}

module.exports.encryptPassword = encryptPassword;