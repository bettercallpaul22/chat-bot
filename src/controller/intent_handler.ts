import { Request, Response } from "express";
import { welcome_intent } from '../intents/welcome'

export const intent_handler = async (req: Request, res: Response) => {
   const intent = req.body.queryResult.intent['displayName']
  
   if (intent === 'add_order') {
      welcome_intent(req, res)
   }
}
