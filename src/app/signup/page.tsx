"use client"
import { ChangeEvent, FormEvent, useState, FC } from "react" 
import { TextField, CustomBtn } from '@/components'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '@/graphql/mutations'
import Link from "next/link"
import { useRouter } from "next/navigation"

interface IForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}

const Signup: FC = () => {
      const [signup, { data, loading }] = useMutation(REGISTER_USER)
      const [form, setForm] = useState<IForm>({ username: "", email: "", password: "", confirmPassword: "" })
      const [nameErr, setNameErr] = useState(false)
      const [passErr, setPassErr] = useState(false)
      const [emailErr, setEmailErr] = useState(false)
      const router = useRouter()
      const { username, email, password, confirmPassword } = form;

     /**
      * 
      * @param event => an input event handle 
      * @returns return nothing
      */
      const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
            const value = e?.target.value
            const name = e?.target.name
            
            console.log(value)
            if(name && value !== "") {
              setForm({ ...form, [name]: value })
              return;
            }

            console.log("value and name input element cannot be empty")
      }


    const submitHandle = async(e: FormEvent): Promise<void> => { 
        e.preventDefault()

        if(username && email && password === confirmPassword) {
            const expectedName = /^[a-zA-Z\s]{8,20}$|^[a-zA-Z]{8,20}$/gi
            const expectedPass = /([a-z@#$%&_*\d]{8,25})/gi
            const expectedMail = /(^[a-z]{8,15}[@gmail.com|@yahoo.com]{8,}$)/gi
            const matchedName = username.match(expectedName)
            const matchedpass = password.match(expectedPass)
            const matchedEmail = email.match(expectedMail)

            if(matchedName == null) {
              setNameErr(true)
              console.log(nameErr)
              return;
            }

            console.log(nameErr)

            if(matchedpass == null) {
                setPassErr(true)
                return;
            }

            if(matchedEmail == null) {
               setEmailErr(true)
               return;
            }

            signup({ variables: { user: { username, email, password } } });
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
      <section className='flex h-screen w-full flex-col justify-center signup_bg'>
        <form 
          className='flex flex-col h-[400px] gap-[15px] lg:w-[40%] w-[60%] border-[1px] border-secondary hover:shadow-lg transition-shadow duration-500 rounded-[20px] mx-auto overflow-hidden p-[20px] form'
          onSubmit={submitHandle}
          >
            <TextField 
                rest={{ id: "username", type: "text", placeholder: "username" }}
                styles=''
                htmlFor='username'
                handleChange={handleInput}
                value={username}
                name="username"
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
      </section>
  )
}

export default Signup