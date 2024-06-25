import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ananyaa Nagarsheth
      </h1>
      <p className="mb-4">
        {`I'm a rising junior at the University of Illinois at Urbana-Champaign, pursuing 
        a degree in materials science and engineering with a minor in Mathematics. `}
      </p>
      <div className="my-8">
        <img src="uiuc.jpeg" alt="uni photo">
        </img>

      </div>
    </section>
  )
}
