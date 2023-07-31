import React, { useContext } from 'react'
import { ApiDataContext } from '../context/ApiData'
import Loading from '../components/Loading'
import Card from '../components/Card'
import Link from 'next/link'

export default function index() {
    const {products,loading} = useContext(ApiDataContext)
    return (
      <>
  <div>
  <div className='flex justify-center items-center flex-wrap my-8'>
        {!loading ? <Loading/> : 
        products.length && products.map((data) => {
          return (
            <Link href={`/Product/${data.id}`} key={data.id} className=' transition ease-in-out hover:scale-110'>
            <Card {...data} />
            </Link>
          )
        })
        }
      </div>
  </div>
      </>
    )
}
