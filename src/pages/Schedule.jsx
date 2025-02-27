import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Schedule = () => {
  return (
    <>
    <Nav />
    <div className="container-fluid max-w-full h-screen bg-lightBlue px-4 py-4">
      <div className="flex flex-col justify-center  uppercase text-white mb-8">
        <h1 className=" text-4xl md:text-5xl md:text-center">Build your perfect body</h1>
        <h3 className="text-xl mt-4 md:text-2xl text-left md:text-center">custom gym workout plan</h3>
      </div>
      <div className="flex flex-col px-1 py-4 overflow-x-auto">
        <table className="text-white w-full min-w-max border-separate border-spacing-2 
        border border-gray-400 dark:border-gray-500">
          <thead>
            <tr>
               <th className="px-4 py-2 border border-gray-500">Monday</th>
               <th className="px-4 py-2 border border-gray-500">Tuesday</th>
               <th className="px-4 py-2 border border-gray-500">Wednsday</th>
               <th className="px-4 py-2 border border-gray-500">Thursday</th>
               <th className="px-4 py-2 border border-gray-500">Friday</th>
               <th className="px-4 py-2 border border-gray-500">Saturday</th>
               <th className="px-4 py-2 border border-gray-500">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">push Up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">dig up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">pull up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">jumping</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">running</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">treadmill</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">Heavy weight Carrying</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">pull up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">dig up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">jumping</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">treadmill</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">pull up</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">running</td>
              <td className="px-4 py-2 border border-gray-500 hover:scale-105">treadmill</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Schedule