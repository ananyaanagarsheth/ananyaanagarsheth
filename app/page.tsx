export default function Page() {
  return (
    <section className="grid grid-cols-2 container mx-auto" >
      <div className="col-span-2">

      
      <h1 className="mb-8 text-2xl font-semibold tracking-normal">
        Ananyaa Nagarsheth
      </h1>
      <p className="mb-4 tracking-normal ">
        {`I'm a rising junior at the University of Illinois at Urbana-Champaign, pursuing 
        a degree in materials science and engineering with a minor in Mathematics. `}
      </p>
      </div>
      <div className="col-span-2">
      <h2 className='text-2xl mb-3'>Skills</h2>
       <ul className="mb-4">
          <li>CAD-Solidworks</li>
          <li>Programming: HTML, CSS, Github, Python, R, Javascript,
                           React, Next.js, Vercel
          </li>
          </ul>
      </div>

      <div className="my-8 col-span-1">
        <img src="uiuc.jpeg" alt="uni photo" className="col-span-2 float-right">
        </img>
      </div>
      
    </section>
  )
}
