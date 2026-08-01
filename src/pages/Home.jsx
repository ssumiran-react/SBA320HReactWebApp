import { useState, useEffect } from "react";
import GameItem from "../components/GameItem";

export default function Home(){

  const [games, setGames] = useState([]);
  
  // communicate with some external system  console.log ("inHome");
  async function getGames() {
    const response = await fetch(`https://www.freetogame.com/api/games`);
    const data = await response.json();
    //console.log (data);
    setGames(data);
  }

  // Takes two arguments:
  // 1st is a setup function (callback function)
  // 2nd is a dependency list (array)
  useEffect(() => {

    getGames();
    return () => {
    }

  }, [])

  return (
    <div className="row container-fluid sm-6">
    {games.map( g => 
      <div key={g.id} className="col-6 col-sm-3">
      <GameItem id={g.id} title={g.title} thumbnail={g.thumbnail}
        description={g.short_description} url={g.game_url} genre={g.genre} 
        platform={g.platform} release_date={g.release_date} 
      />
      </div>
    )}
    </div>
  )
}
/*
developer: "Blizzard Entertainment"
freetogame_profile_url: "https://www.freetogame.com/overwatch"
game_url: "https://www.freetogame.com/open/overwatch"
genre: "Shooter"
id: 540
platform: "PC (Windows)"
publisher: "Activision Blizzard"
release_date: "2022-10-04"
short_description
: 
"A hero-focused first-person team shooter from Blizzard Entertainment."
thumbnail
: 
"https://www.freetogame.com/g/540/thumbnail.jpg"
title
: 
"Overwatch"

*/