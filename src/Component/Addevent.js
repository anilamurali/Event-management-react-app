import React, { useState } from 'react'
import Nav from './Nav'

const Addevent = () => {
    var [name,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organizer,setOrganizer]=useState("")
    var [contact,setContact]=useState("")
    const setData=()=>{
        var data={"name":name,"date":date,"vanue":venue,"organizer":organizer,"contact":contact}
        console.log(data)
    }
  return (
    <div>
        <Nav/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Event Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Date</label>
                    <input onChange={(e)=>{setData(e.target.value)}} type="date" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Organizer</label>
                    <input onChange={(e)=>{setOrganizer(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContact(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={setData} class="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addevent