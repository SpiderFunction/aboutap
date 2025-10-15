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
import Image from 'next/image'
import Skill from './skill'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'
import DecryptedTextEffect from './DecryptedTextEffect'

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  // Age Calculator - Start
  const birthDate = new Date('2000-04-30');
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  const adjustedAge = hasHadBirthdayThisYear ? age : age - 1;
  // Age Calculator - End
  const details = [
    { birthday: '30 April 2000', 
      email: 'philip@spiderfunction.com',
      location: 'Philippines',
      age: adjustedAge,
      degree: 'Bachelor',
      hobby: 'Programming',
    }
  ]
  return (
    <>
      <nav className='sticky top-0 z-50'>
        <Navbar addedClass='bg-white dark:bg-black' />
      </nav>
      <div className='min-h-screen'>
        <div className='space-y-8 p-8'>
          <DecryptedTextEffect text='IT Professional & Web Development Specialist' addedClass='text-center font-bold text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase' />
          <p className='text-center text-md lg:text-lg md:px-8 lg:px-10 xl:px-12'>Welcome! I'm Anthony Philip, an IT specialist who combines academic excellence with practical innovation. Here you'll discover my story as a technology enthusiast, leader, and problem-solver who transforms ideas into meaningful digital solutions through cutting-edge web development.</p>
        </div>
        <div className='px-8 py-4 lg:py-6 bg-secondary'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='lg:text-xl'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className='lg:text-xl'>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='flex flex-col md:flex-row '>
          <div className='flex justify-center items-center m-4 md:w-[40%]'>
            <Image 
                className='rounded-xl w-[400px]'
                src={'/profile-picture.png'}
                alt='Profile Picture'
                width={1000}
                height={1000}
              />
          </div>
          <div className='flex flex-col md:w-[60%]'>
            <div className='p-8 space-y-4'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center lg:text-start'>Website Developer / IT Specialist</h2>
              <p className='md:text-md lg:text-lg xl:text-xl text-center lg:text-start'>I'm a programmer with a passion for innovating systems and solving complex problems. I enjoy designing efficient solutions, and constantly exploring new technologies. My goal is to build systems that are not only functional but transformative.</p>
            </div>
            <div className='p-8 space-y-4'>
              <ul>
                {details.map((details, index) => (
                  <li key={index} className='space-y-4 md:text-lg lg:text-xl xl:text-2xl'>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Age: 
                      </span>
                      <span className='w-[70%]'>
                        {details.age} years old
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Birthday: 
                      </span>
                      <span className='w-[70%]'>
                        {details.birthday}
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Degree: 
                      </span>
                      <span className='w-[70%]'>
                        {details.degree}
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Hobby: 
                      </span>
                      <span className='w-[70%]'>
                        {details.hobby}
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Location: 
                      </span>
                      <span className='w-[70%]'>
                        {details.location}
                      </span>
                    </div>
                    <div className='flex w-full'>
                      <span className='w-[30%] uppercase text-primary'>
                        Email: 
                      </span>
                      <span className='w-[70%]'>
                        {details.email}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='p-8'>
          <h2 className='font-bold uppercase text-3xl lg:text-4xl text-center text-primary mb-8'>Skills</h2>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='md:w-[50%]'>
              <div className='space-y-8'>
                <div className='font-bold uppercase text-xl'>Backend</div>
                <Skill name={'PHP'} percent={80} />
                <Skill name={'Laravel'} percent={90} />
                <Skill name={'JavaScript'} percent={90} />
                <Skill name={'Node.js'} percent={85} />
                <Skill name={'Express.js'} percent={80} />
              </div>
              <div className='space-y-8'>
                <div className='font-bold uppercase text-xl mt-8'>Frontend</div>
                <Skill name={'HTML'} percent={95} />
                <Skill name={'CSS'} percent={95} />
                <Skill name={'Bootstrap CSS'} percent={95} />
                <Skill name={'Tailwind CSS'} percent={95} />
                <Skill name={'React.js'} percent={95} />
                <Skill name={'Next.js'} percent={90} />
                <Skill name={'TypeScript'} percent={85} />
              </div>
            </div>
            <div className='md:w-[50%]'>
              <div className='space-y-8'>
                <div className='font-bold uppercase text-xl'>Database</div>
                <div className='space-y-8'>
                  <Skill name={'MySQL'} percent={95} />
                  <Skill name={'PostgreSQL'} percent={80} />
                  <Skill name={'SQLite'} percent={95} />
                </div>
                <div className='font-bold uppercase text-xl'>Others</div>
                <div className='space-y-8'>
                  <Skill name={'Git'} percent={95} />
                  <Skill name={'Docker'} percent={85} />
                </div>
              </div>
              <div className='space-y-8'>
                <div className='font-bold uppercase text-xl mt-8'>Personal</div>
                <Skill name={'Team Collaboration'} percent={95} />
                <Skill name={'Adaptability'} percent={100} />
                <Skill name={'Time Management'} percent={90} />
                <Skill name={'Problem Solving'} percent={100} />
                <Skill name={'Continuous Learning'} percent={100} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center pb-8'>
          <Button size={'lg'} className='hidden lg:flex rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
            <Link href="/resume">
                Click to check my resume
            </Link>
          </Button>
          <Button className='flex lg:hidden mt-8 rounded-none cursor-pointer uppercase animate-pulse hover:-translate-y-0.5 transform transition' asChild>
            <Link href="/resume" className='text-xs'>
                Tap to check my resume
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default About