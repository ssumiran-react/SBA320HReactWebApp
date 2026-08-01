
export default function GameItem(g){  //console.log("In-GameItem", g.id)
  
  return (
    <div className="card " >
      <img src={g.thumbnail} alt={g.title} />
      <div>
        <h4><b>{g.title}</b></h4>
        <p>{g.description}</p>
      </div>
    </div>
  )

  
}