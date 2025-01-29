import JWT from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d',
    });
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // Prevent XXS (Cross-Site Scripting) attacks
        sameSite: 'strict', // CSRF (Cross-Site Request Forgery) protection
        secure: process.env.NODE_ENV !== 'development',
    });
};

export default generateTokenAndSetCookie;
