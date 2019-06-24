import React from 'react';
import '../styles/body.css'
const Body=()=>{
    
  let  items=[{"name":'1'},{"name":'5'},{name:'2'},{name:'3'},{name:'4'},{name:'6'},{name:'7'},{name:'8'},{name:'9'},{name:'10'}]
    const images=items.map((item,i)=>{
        return(

<img className="slides" key={i} src={require(`../images/${item.name}.jpeg`)} style={{height:'380px',width:'260px'}}/>
                
        )
    })
    
    return(
        
     <div style={{display:'block'}}>{images}</div>
  
    )
}   
export default Body;