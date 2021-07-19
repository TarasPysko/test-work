import axios from "axios";
import React, { useEffect, useState } from "react";

function Locations() {
  const [itemLocation, setItemLocation] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location`).then((res) => {
      setItemLocation(res.data.results);
    }, []);
  });
  return (
    <div>
      {itemLocation.map((e) => {
        return (
          <div key={e.name} className="card d-flex">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h6> location name : "{e.name}"</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Locations;
