"use client"
import {  FC, Dispatch, SetStateAction } from 'react'

const tabStyles: string = 'max-w-[150px] transition-all duration-[0.5s] cursor-pointer py-[4px] px-[20px] rounded-[10px]'
const borderBStyle: typeof tabStyles = 'h-[3px] transition-[display] duration-[.5s] bg-secondary w-full mt-[15px]'

interface ITabProps {
    leftTab: boolean;
    setLeftTab: Dispatch<SetStateAction<boolean>> ;
    rightTab: boolean;
    setRightTab: Dispatch<SetStateAction<boolean>>;
}

const ProfileTab: FC<ITabProps> = ({ leftTab, rightTab, setLeftTab, setRightTab }: ITabProps) => {

     const handleTabRight = (rightStatus: boolean, leftStatus: boolean): void => {
        setLeftTab(leftStatus)
        setRightTab(rightStatus)
     }

     const handleTabLeft = (rightStatus: boolean, leftStatus: boolean): void => {
        setRightTab(rightStatus)
        setLeftTab(leftStatus)
     }

  return (
    <div className='flex w-[60%] mt-[20px] border-b-[1px] border-b-secondary p-[10px] mx-auto justify-between items-center'>

        <div className={``} onClick={() => handleTabLeft(false, true)}>
            <aside className={`${tabStyles} ${leftTab && !rightTab ? "bg-secondary" : "bg-main"}`}>
                <h3 className={`md:text-[25px] text-[16px] font-chibold font-medium ${leftTab && !rightTab ? "text-[#fff]" : "text-secondary"}`}> Detail </h3>
            </aside>
            { leftTab && !rightTab &&  (
                <div className={`${borderBStyle}`} />
            ) }
        </div>

        <div className={``} onClick={() => handleTabRight(true, false)}>
            <aside className={`${tabStyles} ${rightTab && !leftTab ? "bg-secondary" : "bg-main"}`}>
                <h3 className={`md:text-[25px] text-[16px] font-chibold font-medium ${rightTab && !leftTab ? "text-[#fff]" : "text-secondary"}`}> Posts </h3>
            </aside>
            { rightTab && !leftTab && (
                <div className={`${borderBStyle}`} />
            ) }
        </div>
    </div>
  )
}

export default ProfileTab