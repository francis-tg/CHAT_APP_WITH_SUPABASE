import {supabase} from "../lib/api"
const SignUpRequest = async(username,email,password)=>{
    return await supabase.auth.signUp({
        email,password
    },{
        data:{
            username
        }
    })
}

const SignInRequest = async({email,password}) =>{
    return await supabase.auth.signIn({
        email,
        password
    })
}

const SignOutRequest  = async() =>{
    return await supabase.auth.signOut()
}

export {
    SignUpRequest,
    SignInRequest,
    SignOutRequest
}
