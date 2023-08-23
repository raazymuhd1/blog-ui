import { FC } from 'react'

interface IProps {
  styles: string
  rest: {
    id: string;
    placeholder: string;
    type: string;
  }
  htmlFor: string
}

const TextField: FC<IProps> = ({ styles, rest, htmlFor }: IProps) => {
  return (
    <div className='w-full flex flex-col gap-[5px]'>
       <label 
        htmlFor={htmlFor} 
        className='font-semibold font-patrick capitalize text-secondary cursor-pointer'> 
          { rest.id }: 
        </label>
       <input
          id={rest.id} 
          type={rest.type} 
          placeholder={rest.placeholder}
          className='px-[10px] py-[5px] border-b-[1px] border-b-secondary outline-none textInput placeholder:tracking-[1.5px] bg-transparent rounded-[10px] ' 
        />
    </div>
  )
}

export default TextField