import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import yampaul from '../public/yampaul.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import ff360 from '../public/ff360.png';
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yampaul Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-200"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Yampaul Huggins
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-50">Web Developer/Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Front-End Developer looking for oppotunities in similar jobs. 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillLinkedin />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={yampaul} layout="fill" objectFit="cover"/>
            </div>
            <section>
              <div>
                <h3 className="text-3xl py-1 dark:text-gray-50">Services I offer</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
                  Since the beginning of my journey, I developed a passion towards user interfaces,
                  looks and feels. Trying to catch the user's attention and giving them the best experience overall,
                  without sacrificing functionality. 
                </p>
              </div>
              <div className="lg:flex gap-10 mx-auto ">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
                  <Image src={design} width={100} height={100}/>
                  <h3 className="text-lg font-medium pt-8 pb-2">Current Job</h3>
                  {/* <p className="py-2"></p> */}
                  <h4 className="py-4 text-teal-600">What I've been working on:</h4>
                  <ul className="list-disc">
                    <li className="text-gray-800 py-1">Migrating API's to Springboot (Java)</li>
                    <li className="text-gray-800 py-1">Creating/Editing modules on Angular.js</li>
                    <li className="text-gray-800 py-1">Migrating modules from Angular.js to Angular 12</li>
                  </ul>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
                  <Image src={code} width={100} height={100}/>
                  <h3 className="text-lg font-medium pt-8 pb-2">Freelancing</h3>
                   {/* <p className="py-2"></p> */}
                  <h4 className="py-4 text-teal-600">What I've been working on:</h4>
                  <ul className="list-disc">
                    <li className="text-gray-800 py-1">Creating Single page applications with React</li>
                    <li className="text-gray-800 py-1">Creating Node.js projects</li>
                    <li className="text-gray-800 py-1">Publishing Websites</li>
                  </ul>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
                  <Image src={consulting} width={100} height={100}/>
                  <h3 className="text-lg font-medium pt-8 pb-2">What's next?</h3>
                  {/* <p className="py-2"></p> */}
                  <h4 className="py-4 text-teal-600">What I aspire to everyday:</h4>
                  <ul className="list-disc">
                    <li className="text-gray-800 py-1">Becoming a better person</li>
                    <li className="text-gray-800 py-1">Becoming a better Programmer/Web Developer</li>
                    <li className="text-gray-800 py-1">Learning from experiences</li>
                    <li className="text-gray-800 py-1">Keep growing my value</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div>
                <h3 className="text-3xl py-1 dark:text-gray-50">My work</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
                  Since the beginning of my journey, I developed a passion towards user interfaces,
                  looks and feels. Trying to catch the user's attention and giving them the best experience overall,
                  without sacrificing functionality. 
                </p>
                <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                  <div className="basis-1/3 flex-1">
                    <Image src={ff360} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
                  </div>
                  {/* <div className="basis-1/3 flex-1">
                    <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
                  </div>
                  <div className="basis-1/3 flex-1">
                    <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
                  </div> */}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}
