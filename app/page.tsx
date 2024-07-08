export default function Page() {
  return (
  <section className="grid grid-cols-2 gap-4 " >
    
      <div className="">
      <h1 className="mb-4 text-2xl font-semibold tracking-normal">
      Ananyaa Nagarsheth
      </h1>
      <p className="mb-4 tracking-normal ">
       {`I'm a rising junior at the University of Illinois at Urbana-Champaign, pursuing 
        a degree in Materials Science and Engineering with a minor in Mathematics. `}
      </p>
      <div className=" ">
      <h3 className='text-xl mb-3 tracking-normal font-bold'>Skills</h3>
       <ul className="mb-4">
          <li>CAD-Solidworks</li>
          <li>Programming: HTML, CSS, Github, Python, R, Javascript,
                           React, Next.js, Vercel, Looker
          </li>
          </ul>
      </div>
      </div>
      <div className="my-8  text-right ">
        <img src="ananyaa.jpg" alt="my photo" className=" float-right row-span-2">
        </img>
      </div>  
    </section>
  )
}
