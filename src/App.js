import React, {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
 const [image, setImage] = useState();

const handleChange = () => {
   axios.get('https://api.generated.photos/api/v1/faces?api_key=R2-j21XlrSWfUkfe7sT22A&order_by=random')
    .then(res => {
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)      
       }).catch(err => {
        alert('50/50 requests reached. Try next month.')
      })
 }

  return (
    <>
    <div className="App">
       <h1> Photo Generator AI</h1>
       {/* <img src="https://icons8.com/wp-content/uploads/2020/02/free-ai-generated-photos.jpg" alt="group-pic" height='400vh' id='pic-one'/> */}

       {image && <img src={image} alt="AI face" height='500vh' id='pic-two'/>}
       <button type='button' onClick={handleChange}> Generate Image </button>
    </div>
    <footer>
        <h2> About {<br></br>} </h2>
        <p> This web app AI generates random images of human faces which don't exist in real world.</p> {<br></br>}
        <h3>Connect to me on: <a href="https://www.linkedin.com/in/rajat-mehra-/"> Linkedin</a> | <a href="https://twitter.com/_rajat_mehra_"> Twitter</a> | <a href="https://github.com/rajat-mehra05"> Github</a>
        </h3>        
      </footer>
    </>
  );
}

export default App;