import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/CTAButton';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className='relative flex mx-auto flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold mt-10'>
                    Empower Your Future Growth with <HighlightText text="Coding Skills" />
                </div>

                <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-4 '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At nobis numquam totam cupiditate nisi veniam, mollitia repellat incidunt illo quis tempore et suscipit asperiores eaque rerum voluptatem eligendi possimus, odit aut. Fuga?
                </div>

                {/* Buttons  */}
                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>

                </div>

                <div className='shadow-blue-200 mx-3 my-14'>
                    <video src={Banner} muted loop autoPlay>

                    </video>
                </div>

                {/* Code Section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-bold'>
                                Unlock Your 
                                <HighlightText text={"Coding Potential"} />
                            </div>
                        }
                        subHeading={
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore iusto, fuga, obcaecati ut id natus magni labore a provident aliquid ipsam nihil et vel eos ipsa veniam debitis. Totam aperiam saepe earum."
                        }
                        ctabtn1={
                            {
                                btnText: "Try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        codeColor={"text-yellow-25"}
                    />
                </div>


            </div>

            {/* Section 2 */}

            {/* Section 3 */}
        </div>
    )
}

export default Home;
