const sentJwtToken = async (user, res) =>{

    const token = await user.getJwtToken()
    let options = {
        expires: new Date(Date.now() + 1000 * 60 * 60 *24),
        httpOnly: true
    }
    res.cookie('token', token, options)
    res.status(200).json({
        success: true,
        user,
        token
    })
}


module.exports = sentJwtToken