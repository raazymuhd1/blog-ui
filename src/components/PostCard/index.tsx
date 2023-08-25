import { FC } from "react"
import Image from "next/image"
import BgBlog from "@/assets/images/bg-blog.jpg"
import Link from "next/link"

interface IPost {
  styles: string;
}

const PostCard: FC<IPost> = ({ styles }: IPost) => {
  return (
    <Link
        href={`/post-detail/${1}`} 
        className={`flex flex-col ${styles} rounded-[15px] gap-[10px] cursor-pointer hover:shadow-lg transition-shadow duration-500 bg-main outline-[2px] outline outline-offset-[8px] outline-[#f1eaea]`}>
        <Image 
            src={BgBlog} 
            width={0} 
            height={0} 
            alt="post-image"
            className='w-full h-[200px] rounded-[15px]' 
        />
        <div className='flex justify-between items-start w-full h-[100px] p-[10px]'>
            <h2 className="lg:text-[22px] text-[18px] font-patrick font-semibold text-secondary "> React Js Course </h2>
            <aside>
                <h4 className="lg:text-[14px] text-[12px] font-patrick font-medium"> By Raazy </h4>
                <p className="lg:text-[12px] text-[10px] font-patrick font-medium"> 2023-06-23 </p>
            </aside>
        </div>
    </Link>
  )
}

export default PostCard