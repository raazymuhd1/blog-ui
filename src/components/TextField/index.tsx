import { ChangeEvent, FC } from 'react'

interface IProps {
  styles: string
  rest: {
    id: string;
    placeholder: string;
    type: string;
  }
  htmlFor: string
  value: string
  name: string 
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<IProps> = ({ styles, rest, htmlFor, handleChange, value, name }: IProps) => {
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
          value={value}
          name={name} 
          placeholder={rest.placeholder}
          className='px-[10px] py-[5px] border-b-[1px] border-b-secondary outline-none textInput placeholder:tracking-[1.5px] bg-transparent rounded-[10px] '
          onChange={handleChange}
        />
    </div>
  )
}

export default TextField