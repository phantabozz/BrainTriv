import { type Request, type Response } from "express"


const login = (req: Request, res: Response) => {

  res.status(200).json({
    message: "login success"
  });
}

const register = (req: Request, res: Response) => {

  res.status(200).json({
    message: "register response sent back!"
  });
}


export const authController = { 
  login,
  register
};