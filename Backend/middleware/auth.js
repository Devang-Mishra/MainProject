import jwt from 'jsonwebtoken'

const auth= async (req,res,next) => {
    try {
        const token =req.headers.authorization.split(" ")[1];
        const isCustomAuth=token.length < 500;
        // console.log(token);
        let decodedData;
        if(token && isCustomAuth)
        {
            decodedData=jwt.verify(token,'test');
            // console.log(decodedData)
            req.userId=decodedData?.id;   
        }
        else{
            decodedData=jwt.decode(token);
            // console.log(decodedData)
            req.userId=decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
        console.log("Middleware error")
    }  
}

export default auth;