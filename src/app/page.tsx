// Imported Components
import About from './(About)'
import Articles from './(Articles)'
import Hero from './(Hero)'

// Functional Component
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Articles />
    </main>
  )
}
