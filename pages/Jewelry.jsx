import React, { useContext } from 'react'
import Header from './components/Header'
import { ApiDataContext } from './context/ApiData'
import Loading from './components/Loading'
import Link from 'next/link'
import Card from './components/Card'

export default function Jewelry() {
  const {jewelry,loading} = useContext(ApiDataContext)
  return (
    <div className='min-h-screen'>
       <Header name="Jewelry" image="/Header3.jpg" />
       <div>
  <div className='flex justify-center items-center flex-wrap my-8'>
        {!loading ? <Loading/> : 
        jewelry.length && jewelry.map((data) => {
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
