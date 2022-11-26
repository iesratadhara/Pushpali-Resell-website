import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loginError, setLoginError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const { userLogIn, user, googleSignIn, allUser, refetch } = useContext(AuthContext)
    const navigate = useNavigate()
    const [token] = useToken(user)




    const handleResister = (data) => {
        console.log(data);
        userLogIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                // setUserEmail(data.email)
            })
            .catch(e => {
                console.error(e)
                setLoginError(e.message)
            })

    }

    const handelGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                const googleUser = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    role: 'buyer',
                }
                setLoginError('')
                const olduser = allUser.find(storeUser => storeUser.email === user.email)
                console.log(olduser);
                if (!olduser.email === user.email) {
                    saveUserInDB(googleUser)
                    toast.success(`Congratulation ${user.displayName} to Pushpali`)
                    refetch()
                }
                navigate('/')
                
            })
            .catch((error) => {
                console.log(error)
                setLoginError(error.message)
            })
    }
    const saveUserInDB = (user) => {
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${user.name} is Added successfully`)


            })
    }

    return (
        <div className="w-full md:w-2/3 lg:w-1/3 bor h-[500px] m-auto ">
            <h3 className="text-2xl text-center text-primary my-8">Resister</h3>
            <form onSubmit={handleSubmit(handleResister)}>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-lg">Your Email</span>
                    </label>
                    <input type="email" {...register('email', { required: 'Email is requird' })} className="input input-bordered w-full input-primary " />
                    {errors.email && <p className="text-error">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-lg">Your Password</span>
                    </label>
                    <input type="password"  {...register('password', { required: 'Passwordis required', minLength: { value: 6, message: 'password must be 8 charecter' } })} className="input input-bordered w-full input-primary " />
                    {errors.password && <p className="text-error">{errors.password?.message}</p>}

                </div>

                <input className="btn btn-primary w-full mt-8" type="submit" />
                <label className="label text-center">
                    <span className="label-text text-center">
                        New to This Website?
                        <Link to={"../resister"} className="text-secondary ">
                            {' '}Resister
                        </Link>
                    </span>
                </label>
            </form>
            <div>{loginError && <p className="text-error">{loginError}</p>}</div>
            <div className="divider">OR</div>
            <div>
                <button onClick={handelGoogleSignIn} className="btn  btn-primary btn-outline w-full">
                    {" "}
                    <FcGoogle className='text-2xl mx-4'></FcGoogle> CONTINUE WITH GOOGLE
                </button>
            </div>

        </div>
    );
};

export default Login;