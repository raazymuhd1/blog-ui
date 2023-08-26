"use client"
import { ChangeEvent, FormEvent, useState } from "react" 
import { TextField, CustomBtn } from '@/components'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '@/graphql/mutations'
import Link from "next/link"
import { useRouter } from "next/navigation"

interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string
}

const signup = () => {
      const [register, { data, loading }] = useMutation(REGISTER_USER)
      const [form, setForm] = useState<IForm>({ name: "", email: "", password: "", confirmPassword: "" })
      const router = useRouter()
      const { name, email, password, confirmPassword } = form;


      const handleInput = (e: ChangeEvent<HTMLInputElement>):void => {
            const value = e?.target.value
            const name = e?.target.name

            console.log(value)
            if(name && value) {
              setForm({ ...form, [name]: value })
              return;
            }

            console.log("value and name input element cannot be empty")
      }


    const handleSubmit = async(e: FormEvent): Promise<void> => {
        e.preventDefault()
        if(name && email && password === confirmPassword) {
          register({ variables: { user: { name, email, password } } });
          console.log("registered")
          router.push("/login")
          return;
        }

        console.log("please fill out all fields")
    } 


    if(loading) {
       return <h2> Signin Up, please wait .. </h2> 
    }


  return (
    <div className='flex h-screen w-full flex-col justify-center signup_bg'>
      <form 
        className='flex flex-col h-[400px] gap-[15px] lg:w-[40%] w-[60%] border-[1px] border-secondary hover:shadow-lg transition-shadow duration-500 rounded-[20px] mx-auto overflow-hidden p-[20px] form'
        onSubmit={handleSubmit}
        >
          <TextField 
              rest={{ id: "username", type: "text", placeholder: "username" }}
              styles=''
              htmlFor='username'
              handleChange={handleInput}
              value={name}
              name="name"
            />
          <div className='flex items-center gap-[10px]'>
            <TextField 
              rest={{ id: "password", type: "password", placeholder: "password" }}
              styles=''
              htmlFor='password'
              handleChange={handleInput}
              value={password}
              name="password"
              />
            <TextField 
              rest={{ id: "confirm-password", type: "password", placeholder: "confirm password" }}
              styles=''
              handleChange={handleInput}
              value={confirmPassword}
              name="confirmPassword"
              htmlFor='confirm-password'
              />
          </div>

            <TextField 
              rest={{ id: "email", type: "email", placeholder: "email" }}
              styles=''
              htmlFor='email'
               handleChange={handleInput}
               value={email}
               name="email"
              />

              <div className="flex flex-col gap-[15px]">
                <CustomBtn 
                  title='Signup' 
                  parentStyles='mt-[20px] w-[30%]' 
                  btnStyles='w-full font-patrick font-semibold tracking-[1.5px] md:text-[18px] text-[16px] bg-secondary text-[#fff]'
                  type="submit" 
                />
                <p className='font-patrick md:text-[16px] text-[14px] font-normal'> 
                  Already have an account? 
                  <Link href="/login" className='font-patrick font-semibold italic text-secondary underline'> Signin </Link> 
                </p>
              </div>
      </form>
    </div>
  )
}

export default signup