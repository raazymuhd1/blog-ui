import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={`${styles.footer} md:h-[150px] mt-[40px] h-[100px] w-full`}>
        <div className="flex w-[90%] h-full mx-auto items-center justify-between md:flex-row">
          <h3 className="md:text-[2rem] text-[16px] font-chibold font-semibold text-[#fff]"> GraphBlog </h3>
          <p className="md:text-[18px] text-[14px] font-patrick font-medium text-main"> @copyright graphblog 2023 | all right reserved </p>
        </div>
    </footer>
  )
}

export default Footer