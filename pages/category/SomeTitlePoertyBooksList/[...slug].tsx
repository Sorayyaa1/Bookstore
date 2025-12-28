import Image from 'next/image';
import { useContext } from "react"
import {BookContext} from "../../Context/index"
import { useRouter } from 'next/router';

const FictionBookDetails = () => {
  const router=useRouter()
  const{selectedBook,btnValue,setSelectedBook,allBooksList}=useContext(BookContext) 
  const finedBook=allBooksList.find(item=>item.id===btnValue)
  setSelectedBook(finedBook)    

  function AddToShoppingCart(){
    
    router.push('/allBooks/shoppingCart')
  }

  return (
    <div>
      <div className="bg-amber-900 opacity-90">
        <h1 className="text-4xl text-amber-900 text-center py-8">Book Details</h1>
      </div>
        {
          selectedBook !==undefined ? (
            <div className="flex flex-col gap-6 bg-amber-600 opacity-75 py-6 px-4 font-semibold text-amber-950 ">
              <div className='flex justify-center gap-10 items-center'>
                <Image 
                  alt="bookImage"
                  src={selectedBook.image}
                  width={853}
                  height={1280}
                  className="rounded-lg  shadow-amber-800 shadow-xl w-1/4 h-auto"/>
                  <div className='flex flex-col gap-15'>
                    <div className='flex gap-2 items-center'>
                      <p className='text-amber-100 font-semibold text-xl'>Title:</p>
                      <p  className=" text-lg">{selectedBook.title}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                       <p className='text-amber-100 font-semibold text-xl'>Genre:</p>
                       <p className=" text-lg">{selectedBook.category}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='text-amber-100 font-semibold text-xl'>Description:</p>
                      <p className='max-w-xl className=" text-lg"'>{selectedBook.description}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <p className='text-amber-100 font-semibold text-xl'>Written by:</p>
                      <p className=" text-lg">{selectedBook.author}</p>
                    </div>
                  </div>
              </div>
              <div className='flex justify-between items-center px-[21vw]'>
                <p className="bg-amber-500 py-2 px-6 rounded-2xl">{selectedBook.price} $</p>
                <button onClick={AddToShoppingCart} className="bg-amber-400 rounded-2xl text-xl py-2 w-1/2 shadow-amber-800 shadow-lg hover:bg-amber-700 hover:text-amber-100">Add To Shapping Cart</button>
              </div>
              
            </div>
          ) :
          (<div className='min-h-screen flex items-center justify-center bg-amber-600 opacity-75'>
               <p className=' text-5xl text-amber-100 font-extrabold'>The desired book does not exist.</p>
          </div>)
          
        }
    </div>
  );
};

export default FictionBookDetails;