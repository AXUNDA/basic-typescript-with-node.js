import express,{Application,Request,Response,NextFunction} from "express";
const app:Application = express();

const add = (a:number,b:number):number=>{
      return a+b

}
console.log(add(5,5))

app.get("/",(req:Request,res:Response)=>{
      console.log(add(5,5))
      res.send("hello")

})

app.listen(5000,()=>{
      console.log("app is active")
})