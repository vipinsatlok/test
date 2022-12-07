import Layout1 from '../../componants/layout/Layout1'
import { form, inputGroup, input } from "./login.module.scss"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Login = () => {

    const [email, setEmail] = useState("")
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const ram = () => {
        console.log("coneect")
        console.log(email)
    }
    return (
        <Layout1>
            <form className={form}>
                <TextField size='small' value={email} onChange={e => setEmail(e.target.value)} fullWidth label="Enter Your Email" id="fullWidth" />
                <Button onClick={ram} fullWidth variant="contained">Login</Button>
            </form>
        </Layout1>
    )
}

export default Login