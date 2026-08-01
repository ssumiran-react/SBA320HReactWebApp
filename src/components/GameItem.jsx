
export default function GameItem(g) {  //console.log("In-GameItem", g.id)

  return (
    <div className="card" >
      <div className="cardImg">
        <img className="img-fluid rounded" src={g.thumbnail} alt={g.title} />
      </div>
      <div >
        <h6><b>{g.title}</b></h6>
        <p hidden={true}>{g.description}</p>
      </div>
    </div>
  )


}