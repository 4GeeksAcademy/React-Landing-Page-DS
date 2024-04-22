import React from "react";


//create your first component
const Card = () => {
    return (
		<div class="card" style={{width: "18rem"}}>
  			<img src="https://atasteofalaska.com/wp-content/uploads/2017/05/Small-Image-Landscape-Placeholder-500x350.jpg" class="card-img-top" alt="..."/>
  			<div class="card-body">
    		<h5 class="card-title">Card title</h5>
    		<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    		<a href="#" class="btn btn-primary">Go somewhere</a>
  			</div>
		</div>
	)
}

export default Card;