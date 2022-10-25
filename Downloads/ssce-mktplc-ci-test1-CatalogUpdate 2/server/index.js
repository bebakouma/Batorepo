import Express from "express";
import Catalog from "./Catalog.js";
import MyServices from "./MyServices.js";
import cors from "cors";


const app = Express();
const port= 5555;


app.use(cors({
    origin: '*'
}));
app.get("/", (req, res)=>{
    res.send("Marketplace middleware is up and running :)")
    // res.json(Catalog)
})

app.get("/catalog", (req, res)=>{
    // res.json(Catalog.find((catalog)=>{
    //     return +req.params.id === catalog.id
    // }))
    res.json(Catalog)
})

app.get("/catalog/id/:id", (req, res)=>{
    res.json(Catalog.find((catalog)=>{
        return +req.params.id === catalog.id
    }))
  
})

app.get("/catalog/tags/:tag", (req, res)=>{
    res.json(Catalog.filter((catalog)=>{
        return  catalog.tags.includes(req.params.tag)
    }))
  
})
app.get("/myservices", (req, res)=>{
    // res.json(Catalog.find((catalog)=>{
    //     return +req.params.id === catalog.id
    // }))
    res.json(MyServices)
})

app.get("/myservices/id/:id", (req, res)=>{
    res.json(MyServices.find((myservice)=>{
        return +req.params.id === myservice.id
    }))
  
})

app.get("/myservices/tags/:tag", (req, res)=>{
    res.json(MyServices.filter((myservice)=>{
        return  myservice.tags.includes(req.params.tag)
    }))
  
})
app.listen(port, ()=> console.log("listening on port"+ port))