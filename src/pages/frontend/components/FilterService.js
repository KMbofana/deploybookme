import React,{useState} from 'react'
import logo from '../../../assets/bookme-01.png'
import {
    Form,
    Button,
    FormControl, 
    Modal } from 'react-bootstrap'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function FilterService() {
  const [ArrowBackIcon, SetArrowBackIcon] = useState("test"); 
  const [when, setWhen] = useState(false);
  const [where, setWhere] = useState(false)
  const [what, setWhat] = useState(false)

  const handleCloseWhat = () => setWhat(false);
  const handleCloseWhere = () => setWhere(false);
  const handleCloseWhen = () => setWhen(false);
  const handleWhen = () => setWhen(true);
  const handleWhere = () => setWhere(true);
  const handleWhat = () => setWhat(true);

  return (
    <div  className='filteredSearch'
     style={{
        backgroundColor:'#F2F5FC',
    }}  
    >
        <div className='rowFilterSearch'
       
        >      

      
            <div className='inputs_container'
            style={{pading:"20px"}}
            >
            
                <input 
                type='text'
                className='filterInputsLeft' 
                style={{
                    borderTopLeftRadius:'25px',
                    borderBottomLeftRadius:'25px',
                    borderTopRightRadius:'0',
                    borderBottomRightRadius:'0',
                    
                }}
                placeholder='You looking for?'
                onClick={()=>handleWhat()}
                 />
            
                <input 
                type='text' 
                className='filterInputsCenter' 
                placeholder='where ?'
                onClick={()=>handleWhere()}
                 />
           
                <input 
                type='text'
                className='filterInputsRight'
                style={{
                    borderTopRightRadius:'25px',
                    borderBottomRightRadius:'25px',
                    borderTopLeftRadius:'0',
                    borderBottomLeftRadius:'0',
                }}
                placeholder='when ?'
                onClick={()=>handleWhen()}
                 />
            </div>

        
               
            
        <Modal show={what} onHide={handleCloseWhat}>
            <Modal.Header>
                <Modal.Title>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'row'


                }}
                >
                <ArrowBackIcon onClick={()=>setWhat(false)}/>
                    <FormControl
                    style={{
                        marginLeft:'10px',
                        borderStyle:'none',
                        width:'400px'
                    }}
                        placeholder="search service"
                    />
                </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div 
            style={{
                display:'flex',
                flexDirection:'column'
            }}
            >
                <Form.Label>Popular Services</Form.Label>
               
                <div>
                    <Button className='modalButtons' variant="light">Haircut</Button>
                    <Button className='modalButtons' variant="light">Men's Haircut</Button>
                    <Button className='modalButtons' variant="light">Beard Trim</Button>
                    <Button className='modalButtons' variant="light">Beard Maintenance</Button>
                    <Button className='modalButtons' variant="light">Shave</Button>
                    <Button className='modalButtons' variant="light">Pedicure</Button>
                    <Button className='modalButtons' variant="light">Beard Dye</Button>
                    <Button className='modalButtons' variant="light">Manicure</Button>
                    <Button className='modalButtons' variant="light">Silk press</Button>
                    <Button className='modalButtons' variant="light">Trim</Button>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
    
                <Button className='modalSearch' variant="primary" onClick={handleCloseWhat}>
                    Search
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={where} onHide={handleCloseWhere}>
        <Modal.Header>
                <Modal.Title>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'row'


                }}
                >
                <ArrowBackIcon onClick={()=>setWhere(false)}/>
                    <FormControl
                    style={{
                        marginLeft:'10px',
                        borderStyle:'none',
                        width:'400px'
                    }}
                        placeholder="search service"
                    />
                </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div 
            style={{
                display:'flex',
                flexDirection:'column'
            }}
            >

            <div className='row'
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
            }}
            >
           
                <div className='col-md-2'>

                <i>Location</i>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column'
                }}
                className='col-md-6'
                >
                    <lable
                    style={{
                        fontStyle:'italic',
                        fontSize:'small'
                    }}
                    >Your Current Location</lable>
                    <span>UNKOWN</span>
                </div>
            
            <div className='col-md-4'>

                <Button className='locationButton'>Near Me</Button>
            </div>
            </div>
            
            <br/>
                <Form.Label>Look For Services Elsewhere</Form.Label>
               
                <div>
                    <Button className='modalButtons' variant="light">Kopa Kabana</Button>
                    <Button className='modalButtons' variant="light">First Street</Button>
                    <Button className='modalButtons' variant="light">Down Town</Button>
                    <Button className='modalButtons' variant="light">Mandara</Button>
                    <Button className='modalButtons' variant="light">Borrowdale</Button>
                    <Button className='modalButtons' variant="light">Greystone</Button>
                    <Button className='modalButtons' variant="light">Trim</Button>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
    
                <Button className='modalSearch' variant="primary" onClick={handleCloseWhat}>
                    Search
                </Button>
            </Modal.Footer>
        </Modal>
                
        <Modal show={when} onHide={handleCloseWhen}>
            <Modal.Header closeButton>
            <Modal.Title>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'row'


                }}
                >
                <ArrowBackIcon onClick={()=>setWhere(false)}/>
                    <FormControl
                    style={{
                        marginLeft:'10px',
                        borderStyle:'none',
                        width:'400px'
                    }}
                        placeholder="search service"
                    />
                </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button className='modalSearch' variant="primary" onClick={handleCloseWhat}>
                    Search
                </Button>
            </Modal.Footer>
        </Modal>

        </div>
       
    </div>
  )
}

export default FilterService