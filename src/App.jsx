

export default function App() {
  let cards = [];
    for (let i= 0; i < 10; i++){

        cards.push( 
        <div className="card text-center mt-5 " style={{width: "18rem"}}>
  <img src="/IMG_20220503_095437.jpg" class="card-img-top img-thumbnail" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">My Sweet Heart..</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
 
  )}
  return (
    <>      
      <h1 className='text-center bg-primary mt-5'> M . Nawaz Khan</h1>
     {cards}
    </>
  )
}
 
