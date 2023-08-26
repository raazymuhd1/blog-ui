import { FC } from 'react'

interface IProps {
    title: string;
    btnStyles: string
    parentStyles: string
    type: "submit" | "button" | "reset"
}

const CustomBtn: FC<IProps> = ({ title, btnStyles, parentStyles, type }: IProps) => {
  return (
    <div className={`${parentStyles}`}>
        <button 
            className={`border-none outline-none rounded-[15px] py-[5px] px-[10px] hover:opacity-[0.8] transition-opacity duration-300 ${btnStyles} `}
            type={type}
            > 
            { title } 
        </button>
    </div>
  )
}

export default CustomBtn