import React, { useContext } from 'react'
import Header from './components/Header'
import { ApiDataContext } from './context/ApiData'
import Loading from './components/Loading'
import Link from 'next/link'
import Card from './components/Card'

export default function Men() {
  const {men,loading} = useContext(ApiDataContext)
  return (
    <div className='min-h-screen'>
       <Header name="Men's clothing" image="/Header2.jpg" />
       <div>
  <div className='flex justify-center items-center flex-wrap my-8'>
        {!loading ? <Loading/> : 
        men.length && men.map((data) => {
          return (
            <Link href={`/Product/${data.id}`} key={data.id} className=' transition ease-in-out hover:scale-110'>
            <Card {...data} />
            </Link>
          )
        })
        }
      </div>
  </div>
    </div>
  )
}
