import fs from 'fs';


export default (req,res) => {
    const tags = JSON.parse(fs.readFileSync("./topics.json").toString());
    const tag = req.query.tag;

    // const final = tags.filter(e => {
    //     if (String(e).slice(0,tags.length) === tags){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // })

    for (let x = 0; x < tags.length; x++){
        if (tags[x].slice(0,tag.length) == tag){
            
            res.send({type:'found',tag:tags[x]})
            return        
        }
    }
    res.send({type:'failed'})
}