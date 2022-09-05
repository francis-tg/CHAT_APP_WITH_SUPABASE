import {
    useState,
} from 'react'

import {
    Button,
    Container, Form, FormLabel,
} from "react-bootstrap"

import {
    IoArrowForward
} from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import {
    toast
} from "react-toastify"
import { SignUpRequest } from './auth'
function SignUp() {
    const [formData,setFormData] = useState(
        {
            username:"",
            email:"",
            password:""
        }
    );
    const navigate = useNavigate();
    const onSubmit = (e)=>{
        e.preventDefault()
        if(!formData.username&&!formData.password&&!formData.password){
            toast.error("Les champs sont vides")
        }
        
        SignUpRequest(formData.username,formData.email,formData.password).then((user,session,error)=>{
            error&&toast.error(error.message);
            
            navigate("/login");
        })
        
    }
    const onChange = (e)=> {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]:e.target.value
        }))
    }
  return (
    <Container>
        <div className="m-auto form-box mt-5">
            <h3>
                Créer un compte
            </h3>
            <Form >
                <Form.Group>
                    <FormLabel>
                        Email
                    </FormLabel>
                   <Form.Control type="email" id='email' value={formData.email} className="mb-3" onChange={onChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <FormLabel>
                        Nom d'utilisateur
                    </FormLabel>
                   <Form.Control type="text" id='username' value={formData.username} className="mb-3" onChange={onChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Mot de passe
                    </Form.Label>
                    <Form.Control type="password" id='password' value={formData.password} className="mb-3" onChange={onChange}></Form.Control>
                </Form.Group>
                <Button variant="primary" className="w-100" onClick={onSubmit}>
                    Créer un compte <IoArrowForward size={20}/>
                </Button>
               <hr className="border-bottom"/>
               <Link to="/sign-in" className="text-light">Connexion</Link>
            </Form>
        </div>
    </Container>
  )
}

export default SignUp