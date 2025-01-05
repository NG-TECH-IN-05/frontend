import Entire from './dashboard/Entire'
import Header from './dashboard/Header'
import Mail from './dashboard/Mail'
import Projects from './dashboard/Projects'
import Side from './dashboard/Side'

const Dash = () => {
  return (
    <div>
      <div className='my-2'>
        <Header />
      </div>
      <aside>
        <section className='my-4'>
          {/* <Side /> */}
          <div className='grid grid-cols-6'>
            <div className='bg-white shadow-2xl'>
              <Mail />
            </div>
          </div>
        </section>
        <main></main>
        <div className='container'>
          <Projects />
        </div>
      </aside>
      {/* <Entire /> */}
    </div>
  )
}

export default Dash
