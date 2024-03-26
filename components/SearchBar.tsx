"use client"
import { useState,FormEvent } from 'react'
import { SearchManuFacturer } from './'
import SearchButton from './SearchButton'
import Image from 'next/image'
import {useRouter} from "next/navigation"

const SearchBar = () => {
  const [manuFacturer, setmanuFacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manuFacturer ==='' && model ===''){
      return alert('Please fill in the search bar')
    }
    updateSearchParams(model.toLowerCase(),manuFacturer.toLowerCase())
  }

const updateSearchParams=(model:string,manuFacturer:string)=>{
  const searchParams = new URLSearchParams(window.location.search);
  if(model){
    searchParams.set('model',model)
  }else{
    searchParams.delete('model')
  }

  if(manuFacturer){
    searchParams.set('manuFacturer',manuFacturer)
  }else{
    searchParams.delete('manuFacturer')
  }
  const newPathname=`${window.location.pathname}?${searchParams.toString()}`
  router.push(newPathname)
}



  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setmanuFacturer={setmanuFacturer}
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      <div className='searchbar__item'>
        <Image
        src='/model-icon.png'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car model'
        />
        <input
        type='text'
        name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden'/>
      </div>
      
    </form>
  )
}

export default SearchBar
