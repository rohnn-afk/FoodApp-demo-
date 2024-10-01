
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
// import Carasoul from '../components/Carasoul'
import { useEffect, useState } from 'react'

const Home = () => {

  const [search, setSearch] = useState('')
  const [foodCategory, setfoodCategory] = useState([]);
  const [foodData, setFoodData] = useState([])


  async function loadData() {

    let fetch_data = await fetch('http://localhost:5000/api/fooddata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetch_data = await fetch_data.json()

    setFoodData(fetch_data[0]);
    setfoodCategory(fetch_data[1]);
  }

  useEffect(() => {

    loadData();
  }, [])


  return (
    <div>
      <Navbar />

      <div>
        <div>

          <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption  d-none d-md-block" style={{ "zIndex": '10' }}>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </form>
              </div>
              <div className="carousel-item active">
                <img src="/photo-1642699683985-a4a7577c58cb.avif" className="d-block w-100" alt="First slide" style={{ filter: "brightness(40%)" }} />
              </div>
              <div className="carousel-item">
                <img src="/thumb-1920-829621.jpg" className="d-block w-100" alt="Second slide" style={{ filter: "brightness(40%)" }} />
              </div>
              <div className="carousel-item">
                <img src="/1050377.jpg" className="d-block w-100" alt="Third slide" style={{ filter: "brightness(40%)" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


        </div>
      </div>

      <div className='container'>
        {
          foodCategory != [] ? foodCategory.map((data) => {
            return (
              <div key={data._id} className='row mb-3'>
                <div className='fs-3 m-3'>
                  {data.categoryname}
                </div>
                <hr />
                {
                  foodData != [] ? foodData.filter(item => (item.categoryname === data.categoryname) && (item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))).map((food) => {
                    return (
                      <div key={food._id} className='col-12 col-md-6 col-lg-3'>
                        <Cards fooditem={food}
                          foodoption={food.options[0]}
                        />

                      </div>
                    )
                  })


                    : ''
                }
              </div>
            )

          }) : ""
        }

      </div>


      <Footer />

    </div>
  )
}

export default Home
