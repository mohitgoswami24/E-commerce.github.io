import React,{useState} from 'react';
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  const[grid, setGrid] = useState(4);
 
  
  return (
    <>
      <Meta title={"Our Store"}/>
      <BreadCrumb title='Our Store' />

      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Shop by categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>tv</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Filter By
                        </h3>
                        <div>
                            <h5 className='sub-title'>Availability</h5>
                            <div>
                            <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id='' 
                                  
                                />
                                <label className='form-check-label' html for=''>
                                    In Stock (1)
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id='' 
                                />
                                <label className='form-check-label' html for=''>
                                    Out of Stock (0)
                                </label>
                            </div>
                            </div>
                            <h5 className='sub-title'>Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                              <div className="form-floating ">
                              <input 
                                type="email" 
                                className="form-control"
                                 
                                id="floatingInput" 
                                placeholder="From" 
                              /> 
                              <label html for="floatingInput1">From</label>
                              </div>
                              <div className="form-floating ">
                              <input 
                                type="email" 
                                className="form-control"
                                 
                                id="floatingInput" 
                                placeholder="10" 
                              /> 
                              <label html for="floatingInput1">To</label>
                              </div>
                            </div>
                            <h5 className='sub-title'>Colors</h5>
                            <div>
                            <div className='d-flex flex-wrap'>
                              <ul className='colors ps-0'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                              </ul>
                            </div>
                            </div>
                            <h5 className='sub-title'>Size</h5>
                            <div>
                             <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id='' 
                                  
                                />
                                <label className='form-check-label' html for=''>
                                    S (0)
                                </label>
                                
                              </div>
                              <div className='form-check'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  value=''
                                  id='' 
                                  
                                />
                                <label className='form-check-label' html for=''>
                                    M (1)
                                </label>
                                
                              </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Product Tag
                        </h3>
                        <div>
                          <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Headphone
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Laptop
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Mobile
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Wire
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Speaker 
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Tablet
                            </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3 '>
                              Oppo
                            </span>
                          </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Random Products
                        </h3>
                        <div>
                          <div className='random-products mb-3 d-flex'>
                            <div className='w-50'>
                              <img src="images/watch.jpg" 
                                   className='img-fluid' alt="watch" />
                            </div>
                            <div className='w-50'>
                              <h5>
                                kids watch bulk 10 pack colored for students
                              </h5>
                              <ReactStars 
                                count={5}   
                                size={24} value="4" 
                                edit={false} 
                                activeColor="#ffd700"/>
                              <b>$ 300</b>
                            </div>
                          </div>
                         
                          <div className='random-products d-flex'>
                            <div className='w-50'>
                              <img src="images/watch-1.avif" 
                                   className='img-fluid' alt="watch" />
                            </div>
                            <div className='w-50'>
                              <h5>
                                kids watch bulk 10 pack colored for students
                              </h5>
                              <ReactStars 
                                count={5}   
                                size={24} value="4" 
                                edit={false} 
                                activeColor="#ffd700"/>
                              <b>$ 300</b>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                  <div className='filter-sort-grid'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='d-flex align-items-center gap-10'>
                      <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
                      <select name='' className='form-control form-select' id=''>
                        <option value='manual'>Featured</option>
                        <option value='best-selling' selected>
                          Best selling
                        </option>
                        <option value='title-ascending'>Alphabetically, A-Z</option>
                        <option value='title-descending'>Alphabetically, Z-A</option>
                        <option value='price-ascending'>Price, low to high</option>
                        <option value='price-descending'>Price, high to low</option>
                        <option value='price-ascending'>Date, old to new</option>
                        <option value='price-descending'>Date, new to old</option>
                        
                      </select>
                      </div>
                      <div className='d-flex align-items-center gap-10'>
                        <p className='totalproducts mb-0' >21 Products</p>
                        <div className='d-flex gap-10 align-items-center grid'>
                          <img onClick={()=>{
                            setGrid(3);
                          }} src='images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                          <img onClick={()=>{
                            setGrid(4);
                          }} src='images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                          <img onClick={()=>{
                            setGrid(6);
                          }} src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                          <img onClick={()=>{
                            setGrid(12);
                          }} src='images/gr.svg' className='d-block img-fluid' alt='grid'/>
                        </div>
                      </div>
                    </div>               
                   </div>
                   <div className='products-list pb-5 mt-3 '>
                    <div className='d-flex gap-10 flex-wrap'>
                      <ProductCard grid={grid} />
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default OurStore


