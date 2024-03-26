 
import { CustomFilter, Hero, SearchBar,CarCard } from "@/components";
import Image from "next/image";
import {fetchCars} from "@/utils"

export default async function Home({searchParams}) {

  const allCars = await fetchCars({
    manufacturers: searchParams.manufacturers || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    model: searchParams.model || '',
    limit: searchParams.limit || 10
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden ">
      <Hero />

      <div className='mt-12 padding-x padding-y
      max-width' id='discover'>
        <div className="home__text-container">
          <h1 className='capitalize text-4xl 
          font-extrabold'>Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters" >
          <SearchBar/>
          <div className='home__filter-container'>
            {/* <CustomFilter title='fuel'/>
            <CustomFilter title='year'/> */}
          </div>
        </div>
        {
          !isDataEmpty ?
            (
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars?.map((car,index)=>(
                  <CarCard key={index} car={car} /> 
                  ))
                }
              </div>
            </section>
            )
            :
          
          (
              <div>
                <h2>Ooops! no result </h2>
                {allCars?.message}
              </div>
          )
        }

      </div>
    </main>
  )
}
