import React, { useState } from "react"

const Register = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [repass, setRepass] = useState("");

    /*const [error, setError] = useState(false);*/

    const validarDatos =(e)=>{
        e.preventDefault()

        let html = "";
        let mensaje_error = document.querySelector("#esError");
        let mensaje_exito = document.querySelector("#exito");

        if(!email.trim() || !pass.trim() || !repass.trim())  {
            html += `Todos los campos son obligatorios.`
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return
        } 
        if(pass.length < 6){
            html += "La contraseña debe tener mínimo 6 carácteres"
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return
        }
        if(pass !== repass){
            html += "Las contraseñas no coinciden"
            mensaje_error.innerHTML = html;
            mensaje_exito.innerHTML = null;
            return
        }
        else{
            html += `Datos ingresados exitósamente, formulario enviado.`
            mensaje_exito.innerHTML = html;
            mensaje_error.innerHTML = null;
            setEmail("");
            setPass("");
            setRepass("");
            return
        }

        /*setError(false);*/
    }

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {<p className="validacion_error" id="esError"></p>}
                {<p className="validacion_exito" id="exito"></p>}
                {/* error ? <p className="validacion_error">Todos los campos son obligatorios, la contraseña debe tener mínimo 6 carácteres y ambas deben coincidir.</p> :
                <p className="validacion_exito">Datos ingresados exitósamente, formulario enviado.</p> */}
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input 
                    type="email"
                    name="email" 
                    className="form-control" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    placeholder="Ingresa tu email"/>
                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con los demás.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control"
                    onChange={(e)=>setPass(e.target.value)}
                    value={pass}
                    placeholder="Ingresa una contraseña"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirma la Contraseña</label>
                    <input 
                    type="password"
                    name="repassword" 
                    className="form-control"
                    onChange={(e)=>setRepass(e.target.value)}
                    value={repass}
                    placeholder="Re-ingresa la contraseña"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4 text-center">Enviar</button>
            </form>
        </>
    )
}

export default Register