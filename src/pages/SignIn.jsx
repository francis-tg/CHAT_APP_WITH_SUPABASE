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
import { SignInRequest } from './auth'

function SignIn() {
    const [formData,setFormData] = useState(
        {
            email:"",
            password:""
        }
    );
    const navigate = useNavigate();
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!formData.email&&!formData.password) toast.error("champs sont vides");
        SignInRequest(formData).then((data)=>{
            const {session,user,error} = data;
            error&&toast.error(error.message);
           if(!error){
            user&& sessionStorage.setItem("user",JSON.stringify({
                auth: user.aud,
                email:user.email,
                id:user.id,
                access_token:session.access_token
            }))
            navigate("/");
           }
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
                Connexion
            </h3>
            <Form>
                <Form.Group>
                    <FormLabel>
                        Email
                    </FormLabel>
                   <Form.Control type="email" id='email' onChange={onChange} className="mb-3"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Mot de passe
                    </Form.Label>
                    <Form.Control type="password" id='password' onChange={onChange} className="mb-3"></Form.Control>
                </Form.Group>
                <Button variant="primary" className="w-100" onClick={onSubmit}>
                    Connexion <IoArrowForward size={20}/>
                </Button>
               <hr className="border-bottom"/>
               <Link to="/sign-up" className="text-light">Créer un compte</Link>
            </Form>
        </div>
    </Container>
  )
}

export default SignIn