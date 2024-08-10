// import { useState } from 'react'
import './App.css'

function Card() {


  return (
    <>
      <div className='bg-gray-600 flex justify-center items-center h-screen'>
        <div className="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>The title of the card here</div>

          <div className="flex justify-between items-center px-6 py-4">
            <div className="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Review</div> 
            <div className="text-sm">May 14, 1983</div>
          </div>

          <div className="px-6 py-4 border-t border-gray-200">
            <div className="mb-4 border rounded-lg p-4 bg-gray-200">
              Here is a short comment about this employee.
            </div>
          </div>

          <div className="bg-gray-200 px-6 py-4">
              <div className="uppercase text-xs text-gray-600 font-bold">Employee</div> 

              <div className="flex items-center pt-3">
                <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">VG</div> 
                <div className="ml-4">
                  <p className="font-bold">Victor Gonzalez</p> 
                  <p className="text-sm text-gray-700 mt-1">Instructor</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
