import FictionBooks from "./SomeTitleFictionBooksList/index"
import PoetryBooks from "./SomeTitlePoertyBooksList"
import ScienceBooks from "./SomeTitleScienceBooksList/index"
import NonFictionNarrativeBooks from "./SomeTitlesNon-Fiction-NarrativeBooksList/index"
import Link from "next/link"


const categoryList=["Fiction","Science","Poerty","Non-Fiction-Narrative"]

function Category(){

    return(
        <div>
            <div className="bg-amber-900 opacity-90">
               <h1 className="text-4xl text-amber-900 text-center py-8">Category</h1>
            </div>
            <div className="bg-amber-600 opacity-75 flex flex-col gap-10 py-10">
                <div className=" flex gap-4 justify-end px-10">
                  {
                    categoryList.map((item,index)=>(
                        <Link key={index} href={`#${item}`} className="text-amber-950 font-bold py-2 px-6 rounded-3xl hover:bg-yellow-900 hover:text-amber-100">{item}</Link>
                    ))
                  }
                </div>
                <FictionBooks/>
                <ScienceBooks />
                <PoetryBooks />
                <NonFictionNarrativeBooks />
            </div>
        </div>
    )
}

export default Category