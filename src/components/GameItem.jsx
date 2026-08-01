
export default function GameItem(g){  //console.log("In-GameItem", g.id)
  
  return (
    <div className="card" >
      <div>
      <img className="cardImg" src={g.thumbnail} alt={g.title} />
      </div>
      <div hidden={true}>
        <h4><b>{g.title}</b></h4>
        <p>{g.description}</p>
      </div>
    </div>
  )

  
}