import React,{useState} from 'react'

function Post(props) {
   

    return (
        <div>
            <div class="card my-4 " style={{width: '18rem',backgroundColor:'lightblue'}}>
  <img src={props.img} class="card-img-top" alt="..." />
  <div class="card-body" >
      <div>
    <h5 class="card-title">{props.title}</h5>
    </div>
    <div>
    <p class="card-text d-inline">{props.date}</p>
   
    </div>
    <ul class="list-group list-group-flush d-inline">
    <li class="list-group-item">{props.status}</li>
    <li class="list-group-item">{props.name}</li>

          
  </ul>
  </div>
</div>
        </div>
    )
}

export default Post