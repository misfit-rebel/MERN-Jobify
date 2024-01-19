import {StatusCodes} from 'http-status-codes'
import User from '../models/UserModel.js'
import { hashPassword } from '../utils/hashedPassword.js'
import { UnauthenticatedError } from '../middleware/errorHandlerMiddleware.js'

export const register = async (req,res)=>{
    const isFirstAccount = (await User.countDocuments()) === 0
    req.body.role = isFirstAccount? 'admin' : 'user'
    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({msg:'user created'})
}

export const login = async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user) throw new UnauthenticatedError('invalid credentials')
    const isPasswordCorrect = await comparePassword(
req.body.password,
user.password
)
}