import React from 'react'
import Navbar from '../components/navbar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Resume",
};
const page = () => {
  return (
    <>
      <nav className='sticky top-0 z-50'>
        <Navbar addedClass='bg-white dark:bg-black' />
      </nav>
      <div className='min-h-screen'>
        <div className='space-y-8 p-8'>
          <h1 className='text-center font-bold text-primary text-4xl lg:text-5xl uppercase'>Career Overview & Technical Expertise</h1>
          <p className='text-center text-lg md:px-8 lg:px-10 xl:px-12'>This comprehensive overview showcases my professional journey as an IT specialist and web developer, highlighting my technical competencies, educational achievements, and project portfolio that demonstrates my commitment to excellence in technology.</p>
        </div>
        <div className='p-8 bg-secondary'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='lg:text-xl'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='lg:text-xl'>Resume</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-[50%]'>
            <div className='px-8 py-6 space-y-8'>
            {/* Summary */}
              <h2 className='font-bold uppercase text-3xl text-primary'>Summary</h2>
              <p className='lg:text-xl'>With expertise in full-stack web development using latest technologies, I have successfully developed comprehensive web-based systems for educational institutions and local government, including barangay management platforms and mobile applications. My technical proficiency spans multiple programming languages and frameworks, complemented by leadership experience as former President of the Bright and Young Technology Enthusiast Society and recognition through various academic excellence awards and professional certifications.</p>
            </div>
            <div className='px-8 py-6 space-y-8'>
            {/* Education */}
              <hr />
              <h2 className='font-bold uppercase text-3xl text-primary'>Education</h2>
              <div>
                <h2 className='font-bold uppercase text-xl'>Bachelor of Science in Information Technology</h2>
                <span className='flex flex-row justify-between'>
                  <p className='italic'>Cavite State University</p>
                  <p className=''>2018 - 2023</p>
                </span>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Science, Technology, Engineering, and Mathematics</h2>
                <span className='flex flex-row justify-between'>
                  <p className='italic'>Saint Augustine School - Senior High School</p>
                  <p className=''>2016 - 2018</p>
                </span>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Junior High School</h2>
                <span className='flex flex-row justify-between'>
                  <p className='italic'>Tanza National Comprehensive High School</p>
                  <p className=''>2012 - 2016</p>
                </span>
              </div>
            </div>
            <div className='px-8 py-6 space-y-8'>
              {/* Awards */}
              <hr />
              <h2 className='font-bold uppercase text-3xl text-primary'>Awards</h2>
              <div>
                <h2 className='font-bold uppercase text-xl'>Cum Laude</h2>
                <p className='italic'>Cavite State University</p>
                <p className=''>2023</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Academic Excellence Award</h2>
                <p className='italic'>Cavite State University</p>
                <p className=''>2018 - 2023</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Outstanding Young Technology Innovator Award</h2>
                <p className='italic'>Cavite State University</p>
                <p className=''>2020</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>NSTP - CWTS Service Awardee</h2>
                <p className='italic'>Cavite State University</p>
                <p className=''>2019</p>
              </div>
            </div>
            <div className='px-8 py-6 space-y-8'>
            {/* Leadership */}
              <hr />
              <h2 className='font-bold uppercase text-3xl text-primary'>Leadership</h2>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>President</h2>
                <p className='italic'>Bright and Young Technology Enthusiast Society</p>
                <p className='italic'>IT Organization in Cavite State University</p>
                <p className=''>2019 - 2021</p>
              </div>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>Public Relation Officer</h2>
                <p className='italic'>Bright and Young Technology Enthusiast Society</p>
                <p className='italic'>IT Organization in Cavite State University</p>
                <p className=''>2018 - 2019</p>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%]'>
            <div className='px-8 py-6 space-y-8'>
            {/* Projects */}
              <hr className='lg:hidden' />
              <h2 className='font-bold uppercase text-3xl text-primary'>Projects</h2>
              <div>
                <h2 className='font-bold uppercase text-xl'>Company Internal System</h2>
                <p className='italic'>Tailwind CSS, Alpine.js, Laravel, and Livewire</p>
                <Link className='text-primary underline italic hover:text-primary/90 hover:animate-pulse hover:font-bold' href={'https://github.com/AnthonyPhilipDP/internal-system'} target="_blank" rel="noopener noreferrer">Check Code</Link>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Barangay in Cavite, Official Website</h2>
                <p className='italic'>PHP, Laravel, HTML5, CSS, JavaScript, and MySQL</p>
                <Link className='text-primary underline italic hover:text-primary/90 hover:animate-pulse hover:font-bold' href={'https://github.com/AnthonyPhilipDP/barangay-website-capstone'} target="_blank" rel="noopener noreferrer">Check Code</Link>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Tailwind CSS Responsive Web Page</h2>
                <p className='italic'>Tailwind CSS</p>
                <Link className='text-primary underline italic hover:text-primary/90 hover:animate-pulse hover:font-bold' href={'https://github.com/AnthonyPhilipDP/travelers-tailwind'} target="_blank" rel="noopener noreferrer">Check Code</Link>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Good Moral Character Generator Web-based System</h2>
                <p className='italic'>PHP, Laravel, HTML5, CSS, JavaScript, and MySQL</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Contract of Service Generator Web-based System</h2>
                <p className='italic'>PHP, Laravel, HTML5, CSS, JavaScript, and MySQL</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>"DumbQuiz" Mobile Game Application</h2>
                <p className='italic'>Java, and Android Studio</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Mobile Voting Application</h2>
                <p className='italic'>Java, and Android Studio</p>
              </div>
            </div>
            <div className='px-8 py-6 space-y-8'>
              {/* Experience */}
              <hr />
              <h2 className='font-bold uppercase text-3xl text-primary'>Experience</h2>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>Freelance Developer</h2>
                <p className=''>Present</p>
              </div>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>Programmer / Admin Officer</h2>
                <p className='italic'>Precision Measurement Specialists, inc.</p>
                <p className=''>January 2025 - August 2025</p>
              </div>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>ICT Staff</h2>
                <p className='italic'>PNTC Colleges</p>
                <p className='italic'>As an ICT staff, I handle troubleshooting, system maintenance, and provide technical assistance to ensure smooth IT operations. I focus on resolving issues efficiently and maintaining reliable, up-to-date systems for the organization.</p>
                <p className=''>January 2024 - January 2025</p>
              </div>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>Intern Developer</h2>
                <p className='italic'>Cavite State University</p>
                <p className='italic'>I created a web-based contract of service and good moral generator system for the university, also help with the technical issues around the campus.</p>
                <p className=''>September 2022 - January 2023</p>
              </div>
              <div className='space-y-1'>
                <h2 className='font-bold uppercase text-xl'>Capstone Project</h2>
                <p className='italic'>Cavite State University</p>
                <p className='italic'>I created a website for the barangay as our capstone project using PHP, Laravel, and Node.js for back-end programming, MySQL for database, and Bootstrap with HTML5 for front-end development.</p>
                <p className=''>1 Year Duration</p>
              </div>
            </div>
          </div>
        </section>
        <div className='px-8 py-6 space-y-8 w-full'>
          {/* Certificates */}
          <hr />
          <h2 className='font-bold uppercase text-3xl text-primary text-center'>Seminars Attended & Certificates</h2>
          <span className='flex flex-col lg:flex-row'>
            <div className='space-y-8 lg:w-[50%]'>
              <div>
                <h2 className='font-bold uppercase text-xl'>Civil Service Commission Certificate of Eligibility</h2>
                <p className='italic'>Second Level</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Web Development Masterclass</h2>
                <p className='italic'>26 hours</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>The Ultimate SQL Boot Camp - Go from Zero to Hero</h2>
                <p className='italic'>3 hours</p>
              </div>
            </div>
            <div className='space-y-8 lg:w-[50%]'>
              <div>
                <h2 className='font-bold uppercase text-xl'>Mastering HTML5 from Beginner to Advanced</h2>
                <p className='italic'>3.5 hours</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>CSS, Bootstrap, JavaScript and Python Stack Course</h2>
                <p className='italic'>7.5 hours</p>
              </div>
              <div>
                <h2 className='font-bold uppercase text-xl'>Learn PHP and MySQL for Web Application and Web Development</h2>
                <p className='italic'>3 hours</p>
              </div>
            </div>
          </span>
        </div>
        <div className='flex flex-col justify-center items-center pb-8'>
          <h2 className='text-xl my-2 text-primary font-bold uppercase'>Want to know more?</h2>
          <Button size={'lg'} className='hidden lg:flex mt-8 rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
          <Link href="/about">
              Click to know more about me
          </Link>
          </Button>
          <Button className='flex lg:hidden mt-8 rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
            <Link href="/about" className='text-xs'>
                Tap to know more about me
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default page