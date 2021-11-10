import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Add = ({addMovie}) => {
const[ title,setTitle]=useState('');
const[ description,setDescription]=useState('');
const[ posterUrl,setPosterUrl]=useState('');
const[ rating,setRating]=useState(0);

const handleSubmit=()=>{
    addMovie ({title,description,posterUrl,rating});
    setTitle('')
    setRating(0)
    setDescription('')
    setPosterUrl('')
    handleClose()

}
const[show,setShow]=useState(false);
const handleClose= ()=>setShow(false);
const handleShow =()=> setShow(true);

return (
        <div>
        < Button variant="primary"onClick={handleShow} >
           Add Movie 
        </Button>
        <Modal show={show}onHide={handleClose}>
            <Modal.Header>
                <Modal.Title> Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type ='text' name='' placeholder='set the title of your movie'onChange={(e)=>setTitle(e.target.value)}/>
                <br/>
                <input type ='text' name='' placeholder='set the description of your movie'onChange={(e)=>setDescription(e.target.value)}/>
                <br/>

                <input type ='text' name='' placeholder='set the source image of your movie'onChange={(e)=>setPosterUrl(e.target.value)}/>
                <br/>
                <input type ='text' name='' placeholder='set the rating of your movie' min='0' max='5' onChange={(e)=>setRating(e.target.value)}/>
                <br/>
            </Modal.Body>
            <Modal.Footer>
            < Button variant="secondary" onClick={handleClose} >
           Close
        </Button>
        < Button variant="primary" onClick={handleSubmit} >
           Save Changes
        </Button>
 </Modal.Footer>
   </Modal>
            
        </div>
    )
}

export default Add
