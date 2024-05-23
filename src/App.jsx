

function App() {


  return (
    <>
      <div className="flex justify-center items-center h-[100vh] w-full flex-col">
        <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4   font-sans font-bold border-teal-400  dark:text-gray-200">
          NotePad
        </h1>
        <textarea id="message" rows="4" className="block p-2.5 w-[80%] h-[40vh] text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <div>
          <button className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">UpperCase</button>
          <button className="border border-orange-500 bg-orange-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-orange-600 focus:outline-none focus:shadow-outline">LowerCase</button>
          <button className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline">Copy</button>
          <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Clear</button>
          <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Trim</button>
        </div>
        <h2 className="flex flex-row flex-nowrap items-center mt-24">
    <span className="flex-grow block border-t border-black"></span>
    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
        Summary of Your Text
    </span>
    <span className="flex-grow block border-t border-black"></span>
</h2>
        <div className="mt-2 flex flex-wrap justify-center items-center gap-4">
          <a href="#"
            className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
            <div className="flex flex-row items-center justify-center">

              <span className="font-bold text-gray-900"> {} </span>
            </div>

            <div className="mt-2 text-sm text-gray-800">Number of Letters</div>
          </a>
          <a href="#"
            className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
            <div className="flex flex-row items-center justify-center">
              <span className="font-bold text-gray-900">{}</span>
            </div>

            <div className="mt-2 text-sm text-gray-800">Number of Words</div>
          </a>
          <a href="#"
            className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
            <div className="flex flex-row items-center justify-center">
              <span className="font-bold text-gray-900"> {} </span>
            </div>

            <div className="mt-2 text-sm text-gray-800">Time to Read</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default App
