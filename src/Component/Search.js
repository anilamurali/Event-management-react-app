import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    var [date,setDate]=useState("")
    const searchData=()=>{
        var data={"date":date}
    }
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} class="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Search