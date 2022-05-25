import React from 'react'

const Viewevent = () => {
    var viewfaculty=[
        { 
            "name":"marrage",
            "date":"2/6/2022",
            "venue":"punalur",
            "organizer":"zzz",
            "contact":"99789645"
            

        },
        {"name":"marragr",
        "date":"2/6/2022",
        "venue":"punalur",
        "organizer":"zzz",
        "contact":"99789645"
    },
    {"name":"marragr",
    "date":"2/6/2022",
    "venue":"punalur",
    "organizer":"zzz",
    "contact":"99789645"

    }
    ]
  return (
    <div>
    <div>
        <div>
            <div class="container">
                <div class="row ">
                     <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <table class="table table-success table-striped" >
                             <thead>
                                 <tr>
                                     <th scope="col">NAME</th>
                                     <th scope="col">DATE</th>
                                     <th scope="col">VENUE</th>
                                     <th scope="col">ORGANIZER</th>
                                     <th scope="col">CONTACT</th>
                                                                             
                                     </tr>
                                     </thead>
                                     <tbody>
                                              {
                                               viewfaculty.map((value,key)=>{
                                                    return <tr>
                                                    <th><p class="card-text">{value.name}</p></th>
                                                    <td><p class="card-text">{value.date}</p></td>
                                                    <td><p class="card-text">{value.venue}</p></td>
                                                    <td><p class="card-text">{value.organizer}</p></td>
                                                    <td><p class="card-text">{value.contact}</p></td>
                                                    
                                            

                                                    </tr>
                                                })}
                                                </tbody>
                                                </table>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
  )
}

export default Viewevent