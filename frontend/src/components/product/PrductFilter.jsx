import React from 'react'

const PrductFilter = () => {
    return (
        <div className='filter-main'>
            <div className='filter-title'>
                <span>Filters</span>
            </div>
            <div className='filter-by-stock-main'>
                <span className='title'>Availability</span>
                <div className='filter-box'>
                    <div className='checkbox'>
                        <input type="checkbox" name="" id="" /><span>In Stock</span>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" name="" id="" /><span>Out Stock</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PrductFilter