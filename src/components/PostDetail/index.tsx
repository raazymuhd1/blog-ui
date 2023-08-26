import React from 'react'
import Image from "next/image"
import profile from "@/assets/images/user-profile.jpg"
import styles from "./PostDetail.module.scss"

const PostDetail = () => {
  return (
    <section className='w-full'>
        <div className={`${styles.postDetail_banner} bg-no-repeat w-full h-[450px] bg-cover`} />

        <article className='w-[80%] mx-auto mt-[30px] p-[20px]'>
            <aside className='w-full flex flex-row items-center gap-[20px]'>
              <Image src={profile} 
                width={0} height={0} 
                alt="author" className='object-cover h-[100px] w-[100px] rounded-[50%]' 
                />
              <div className=''>
                  <h3 className='md:text-[20px] text-[16px] text-secondary font-patrick font-semibold'> Author: <span> Raazy </span> </h3> 
                  <p className='md:text-[16px] text-[14px] text-main font-patrick font-medium'> PostedAt: <span> 2023-08-26 </span> </p>
              </div> 
            </aside>

            <div className='mt-[40px]'>
              <h2 className='md:text-[2.5rem] text-[1.5rem] text-secondary font-chibold font-semibold'> Learn React Full Course </h2>
              <p className='mt-[20px] md:text-[16px] text-[14px] text-[#242222] font-patrick font-medium tracking-[1.5px]'> 
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore blanditiis debitis voluptatum adipisci similique aperiam excepturi possimus. Suscipit incidunt, officia iure nemo cupiditate facere eaque quam nesciunt magni maxime impedit, porro assumenda officiis molestiae autem harum voluptatibus explicabo, beatae nam repellat blanditiis saepe dolore. Dignissimos, quibusdam architecto assumenda iure fuga minima aliquam nostrum consequatur harum impedit molestiae libero nam nihil! Neque officia maiores, veniam quos consectetur in enim quia aut necessitatibus ipsa, nesciunt iste soluta. Vitae, quis? Sequi vel corrupti iure facilis, asperiores ullam voluptatem similique repellat 
                 
                 quae quibusdam fugiat praesentium minus corporis adipisci incidunt et ut expedita nihil? Vel animi tempore eveniet quod, delectus minus fugit! Necessitatibus facilis deleniti suscipit mollitia placeat quisquam, sunt omnis minima officiis aut voluptatem a maiores quidem possimus dolorum. Eveniet placeat provident quae, aspernatur veniam quibusdam sint vero perferendis ratione nostrum reiciendis qui eum doloremque deserunt alias molestias praesentium. Quasi quod quas sunt officia laboriosam architecto odio quos error ex, repellat est accusantium nihil vitae in animi corporis illo sed ullam, ad neque quidem ratione fuga id quo. Laudantium dolore molestiae reprehenderit quae possimus deserunt ipsa obcaecati quibusdam vitae mollitia odio, minima ex explicabo exercitationem similique unde nihil illo consequuntur quam, iure ab eos. Asperiores suscipit sequi illo iusto hic! Rem aliquam optio, fugiat minus nesciunt reiciendis dolorem deleniti quod nostrum consectetur. Porro, laudantium! Exercitationem reprehenderit aliquid ex, debitis rem ipsum consequuntur, vel aliquam, ad quod sint minima quaerat impedit nemo aspernatur repellendus ipsa hic ut quam itaque beatae culpa porro quae repellat! 
                 
                 Molestiae temporibus fugit eos ipsam eaque ipsum rem officia adipisci! Delectus, cupiditate laborum. Quas obcaecati, nisi sit nemo nesciunt sed excepturi voluptate perspiciatis beatae dolorum ratione voluptates quibusdam in, possimus quis cumque rerum sint quaerat voluptas perferendis blanditiis magnam. Nisi ducimus fuga veritatis, sint et, id eos quae quo nobis in ipsa, impedit officiis omnis suscipit odit nostrum? Facilis est enim cum eligendi quos. Maiores at perferendis asperiores dolorum enim velit incidunt a consectetur commodi. Ad exercitationem necessitatibus dolorem commodi, mollitia eligendi doloremque velit, voluptatibus corporis non earum dolore ratione laudantium saepe vero, officiis odio aliquam repellat accusantium veniam ex maiores. Aut rem adipisci pariatur laudantium beatae dolor ab quaerat sint amet, sapiente voluptatum qui repellendus, consequuntur neque possimus nam alias, corporis repudiandae odio inventore eveniet similique exercitationem dolorum. Animi numquam officia perferendis harum temporibus porro, dolore, ea dolores, beatae facilis magnam! Illum ex inventore at autem, quos cumque est.  
              </p>
            </div>
        </article>
    </section>
  )
}

export default PostDetail