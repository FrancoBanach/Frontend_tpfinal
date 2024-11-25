import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

 import { useForm } from 'react-hook-form';


export default function Login() {
    const [email, setEmail] = useState('');
    
    const [pass, setPass] = useState('');
    console.log(pass);
    console.log(email);

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3000/api/usuario/login', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
            
            }, 
            body: JSON.stringify({ email, pass }),
         });
         console.log(response);

try{
         const data = await response.json(); 
         if (response.ok) { console.log('Login successful:', data); // Aquí puedes guardar el token en el almacenamiento local o en el estado de la aplicación 
             sessionStorage.setItem('token', data.token);
             toast.success('Login successful!', { position: 'top-right' });
             navigate('/dashboard'); 
         } else { 
            console.error('Login failed:', data.message); 
            toast.error('Login failed!', { position: 'top-right' }); } 
         } catch (error) { 
             console.error('Error al realizar el login:', error); 
             toast.error('Error al realizar el login!', { position: 'top-right' });
     }
        
         }

            return (
                
                <form className="rounded-form" onSubmit={handleSubmit}> 
            <div className="mb-3"> 
                <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                <input type="email" 
                className="form-control green-input" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required /> 
                <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico.</div> 
                </div> 
                <div className="mb-3"> 
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input 
                    type="password" 
                    className="form-control green-input" 
                    id="exampleInputPassword1" 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    required /> 
                    </div>
                     <div className="mb-3 form-check">
                         <input type="checkbox" className="form-check-input green-checkbox" id="exampleCheck1" />
                         <label className="form-check-label" htmlFor="exampleCheck1">Ver contraseña</label> 
                         </div> 
                         <button type="submit" className="btn btn-green">Enviar</button> 
                         </form> );


                          }

                         












            
        
    //     return (
    //         <form className="rounded-form" onSubmit={handleSubmit}>
    //             <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
    //                 <input type="email" className="form-control green-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
    //                 <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico.</div>
    //             </div>
    //             <div className="mb-3">
    //                 <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
    //                 <input type="password" className="form-control green-input" id="exampleInputPassword1" />
    //             </div>
    //             <div className="mb-3 form-check">
    //                 <input type="checkbox" className="form-check-input green-checkbox" id="exampleCheck1" />
    //                 <label className="form-check-label" htmlFor="exampleCheck1">Ver contraseña</label>
    //             </div>
    //             <button type="submit" className="btn btn-green">Enviar</button>
    //         </form>
    //     );
    // }
// esto es la configuracion de como se vera el cartelito del tostify
//     const confToast = {
//         position: 'bottom-center',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'light',
//     }

//     // este hook manejara todo nueestro formulario, ahora no necesitamos mas un useState para cada uno de los campos
//     // con formState optenemos todos los values de cada componente, eso hace que al utilizar la funcion handleSubmit, uno de los valoes
//     // que puede recibir son los propios datos del formulario
//     const { register, handleSubmit, formState: { errors }, watch } = useForm();


//     // aca en async "(datos)" tenemos lo que debemos mandar al backen, con la diferencia de que ya estan todos validados
//     // ya se encuientran validados porque han superado las reglas de validacion puestos en cada submit al registrar ese input
//     const onSubmit = async (datos) => {

//         const usuario = {
//             mail: datos.mail,
//             pass: datos.pass
//         };

//         const parametros = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authorization': sessionStorage.getItem('token')
//             },
//             body: JSON.stringify(usuario)
//         }

//         const url = "http://localhost:8007/usuario/login";

//         try {
//             const res = await fetch(url, parametros);
//             const body = await res.json();

//             if (res.ok) {
//                 sessionStorage.setItem('token', body.token);
//                 toast.success(`Bienvenido ${body.datos.nombre}`, confToast);
//                 navigate("/vehiculos");
//             } else {
//                 toast.error(body.message, confToast);
//             }
//         } catch (error) {
//             toast.error(error.message, confToast);
//         }

//     }

//     return (
//         <section className='section_login'>
//             <h3 className='titulo_login'>Ingresa a tu cuenta</h3>
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="container_login">
//                 <div>
//                     <label className='label_login'>Usuario o email</label>
//                     <input
//                         className='input_login'
//                         type="email"

//                         //con ...register hacemos seguimiento de este input, tanto para tenerlos en los datos del handleSubmit
//                         // como para hacer directamente las validaciones pertinentes
//                         {...register('mail', {
//                             required: true,
//                             pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//                         })}
//                     />

//                     {/* en esta seccion mostramos un pequeño cartel en tiempo real si es que existen errores en ese campo */}
//                     {errors.mail?.type === 'required' && (
//                         <div className="alert alert-danger mt-2" role="alert">
//                             Mail es requerido
//                         </div>
//                     )}

//                 </div>
//                 <div>
//                     <label
//                         className='label_login'>Contraseña
//                     </label>
//                     <input
//                         // onChange={(e) => setPass(e.target.value)}
//                         className='input_login'
//                         type="password"

//                         //registro de pass con sus reglas de validacion
//                         {...register('pass', {
//                             required: {
//                                 value: true,
//                                 message: 'Contraseña es requerida'
//                             },
//                             minLength: {
//                                 value: 2,
//                                 message: 'La contraseña debe tener al menos 8 caracteres'
//                             },
//                             maxLength: {
//                                 value: 16,
//                                 message: 'La contraseña debe tener al menos 16 caracteres'
//                             }
//                         })}

//                     />
//                     {errors.pass && (
//                         <div className="alert alert-danger mt-2" role="alert">
//                             {errors.pass.message}
//                         </div>
//                     )}
//                 </div>
//                 <div className="div_btn">
//                     <input className='btn_login' type="submit" />
//                 </div>
//             </form>


//             {/* esto no es necesario pero lo podemos utilizar para ver los datos que estaremos mandando al backend */}
//             <pre>
//                 {JSON.stringify(watch(), null, 2)}
//             </pre>

//         </section >

//     )
//
// }