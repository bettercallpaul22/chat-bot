import { Request, Response } from "express";
import diff,{ WebhookClient, Card, Text, Platforms } from 'dialogflow-fulfillment';
import { LocalStorage } from 'node-localstorage';





const localStorage = new LocalStorage('./scratch')
export const welcome_intent = (req:Request, res:Response) =>{
  res.send("check ok")
  // localStorage.setItem('name', JSON.stringify({ name: 'obaro' }))
  // const v = localStorage.getItem('name');
  if(true){
    const agent = new diff.WebhookClient({ request: req, response: res })
    const custom_payload = (agent:any) => {
      const payload_data = {
  
        "richContent": [
          [
            {
              "type": "description",
              "title":`${'mkdkkkdkk'}`,
              "text": [
                "welcom from backend",
               
              ]
            }
          ]
        ]
      }
      agent.add(new diff.Payload(agent.UNSPECIFIED, payload_data, { sendAsMessage: true, rawPayload: true }));
    }
    let intentMap = new Map();
    intentMap.set('add_order', custom_payload)
    agent.handleRequest(intentMap)

  }else {
console.log("no data")
  }

   
}
