import React, { useEffect, useState } from 'react'
import './productPage.css'
import ProductCard from '../../components/product/ProductCard'
import PrductFilter from '../../components/product/PrductFilter'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../actions/productAction'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import {PRODUCT_PER_PAGE} from '../../constant/productConstant'

const ShopByBrand = () => {
  const dispatch = useDispatch()
  const { productsloading, allProducts, totalProduct } = useSelector(state => state.allProducts)
  const [params] = useSearchParams()
  let keyword = params.get('keyword') ? params.get('keyword') : ''
  console.log(keyword)

  let [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getAllProducts(keyword, page))

  }, [dispatch, keyword, page])
  // console.log(allProducts)

  const handelPagonation = (e) => {
    setPage(e.selected + 1)
  }


  return (
    <div className='product-page-main'>
      <div className='product-page-container'>
        <PrductFilter />
        <div className='product-main'>

          <div className='products-container'>
            {
              !productsloading ?
                allProducts.map(product => (
                  <ProductCard product={product} key={product._id} />
                ))

                : ''
            }
          </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handelPagonation}
              pageRangeDisplayed={2}
              pageCount={totalProduct/PRODUCT_PER_PAGE}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className={totalProduct/4 > 5 ? 'pagination max-width-pagination' : 'pagination'}
              activeClassName='active-page'
            />

        </div>
      </div>

    </div>
  )
}

export default ShopByBrand