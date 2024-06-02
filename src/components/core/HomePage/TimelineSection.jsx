import React from 'react';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../../assets/Images/TimelineImage.png'
const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];
const TimelineSection = () => {
  return (
    <div>
      <div className='flex flex-row gap-5 items-center'>

        <div className='w-[45%] flex flex-col gap-5 '>
          {
            TimeLine.map((ele, i) => {
              return (
                <div className="flex flex-col lg:gap-3 text-black" key={i}>
                  <div className="flex gap-6" key={i}>
                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                      <img src={ele.Logo} alt="" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                      <p className="text-base">{ele.Description}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden ${
                      TimeLine.length - 1 === i ? "hidden" : "lg:block"
                    }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                  ></div>
                </div>
              );
            })
          }
        </div>
        
        <div className='relative shadow-blue-200'>
          <img src={timelineImage} alt="timelineImage" className='shadow-blue-200 object-cover max-h-[440px]' />

          <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 left-[50%] -translate-x-[50%] translate-y-[-50%] '>
            <div className='flex flex-row items-center gap-5 border-r border-caribbeangreen-300 px-7 lg:px-14"'>
              <p className='text-3xl font-bold'>10</p>
              <p className='text-caribbeangreen-50 font-sm'>Years of Experience</p>
            </div>

            <div className='flex gap-5 items-center px-7'>
             
                <p className='text-3xl font-bold'>250</p>
                <p className='text-caribbeangreen-50 font-sm'>Type of courses</p>
           

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TimelineSection
