import React, { useContext } from 'react'
import Header from './components/Header'
import Link from 'next/link'
import Card from './components/Card'
import Loading from './components/Loading'
import { ApiDataContext } from './context/ApiData'

export default function Women() {
  const {women,loading} = useContext(ApiDataContext)
  return (
    <div className='min-h-screen'>
        <Header name="Women's clothing" image="/Header4.jpg" />
        <div>
  <div className='flex justify-center items-center flex-wrap my-8'>
        {!loading ? <Loading/> : 
        women.length && women.map((data) => {
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
