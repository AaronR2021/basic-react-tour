import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function App() {
const url = 'https://course-api.com/react-tours-project'

 const [loading,setLoading]= useState(false);
 const [list,setList]= useState([]);

 function filterById(id){
   console.log('filter called',id)
   setList(list.filter((tour) => tour.id !== id));
 }

 useEffect(() => {
   setLoading(true)
   fetch(url)
   .then(res=>res.json())
   .then(data=>{
     setList(data);
     setLoading(false)
  })
  .catch(e=>console.log(e))
 }, [])

 if(loading){
   return <Loading/>
 }

return (
  <>
    <div className="title-box">
      <h2 className="title-name">Our Tours</h2>
      <hr className="title-border" />
    </div>
    <div className="content">
      { 
         list.map((data) => {
            console.log(data);
            return <Tours {...data} key={data.id} filterById={filterById} />;
          }
        )
      }
    </div>
  </>
);

}


export default App
