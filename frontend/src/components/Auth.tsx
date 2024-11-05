import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Inputandlable } from './Inputandlable'
import { SignupInput } from '@vishalrpr/medium-common'
import axios from 'axios'
import toast from 'react-hot-toast'
import { BACKEND_URL } from '../config'

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate=useNavigate();


    const [inputvalue, SetInputvalue] = useState<SignupInput>({
        username: "",
        password: "",
        name: ""
    })


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, inputvalue)

            

            if (response){

                localStorage.setItem("token", response.data);
                toast.success("Request sucessfull")
                navigate("/blogs")
                
             }

        } catch (error:any) {
            
            
         toast.error(error.response.data)

        }
    }
    return (
        <div className='h-screen flex flex-col justify-center items-center px-2'>
            <div className=''>
                <div className='px-3 pb-4'>
                    <div className='text-4xl font font-bold '>
                        Create an account
                    </div>

                    <div className='font-bold text-slate-500'>
                        {type === "signup" ? "Already have an account?" : "Dont have an account"}
                        <Link
                            className="pl-2 underline"
                            to={type === "signup" ? "/signin" : "/signup"}>
                            {type === "signup" ? "login" : "signup"}
                        </Link>
                    </div>
                </div>
                <div>
                    {type === "signup" ? <Inputandlable lable="Name" placeholder='name' onChange={(e) => {
                        SetInputvalue({
                            ...inputvalue,
                            name: e.target.value
                        })

                    }} /> : null}
                </div>
                <div>
                    <Inputandlable lable="Username" placeholder='username@gmail.com' onChange={(e) => {
                        SetInputvalue({
                            ...inputvalue,
                            username: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <Inputandlable lable="password" type={"password"} placeholder='password' onChange={(e) => {
                        SetInputvalue({
                            ...inputvalue,
                            password: e.target.value
                        })

                    }} />
                </div>
                <div className='pt-8'>
                    <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"

                        onClick={sendRequest}
                        >
                            {type === "signup" ? "Sign up" : "Sign in"}

                    </button>

                </div>



            </div>


        </div>
    )
}
