import axios from "axios";
import React, { useEffect, useState } from "react";

function Episode() {
  const [page, setPage] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode?name&page=${page}`)
      .then((res) => {
        setEpisodes(res.data.results);
      });
  }, [page]);
  console.log(episodes);
  return (
    <div>
      {episodes.map((e) => {
        return (
          <div class="card d-flex">
            <div class="card-body d-flex align-items-center justify-content-between">
              <h6> episode name : "{e.name}"</h6>
              <h6> date: "{e.air_date}"</h6>
              <h6> episode : "{e.episode}"</h6>
            </div>
          </div>
        );
      })}
      <div className="text-center">
        {Array(3)
          .fill()
          .map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => setPage(i + 1)}
                className="btn btn-warning"
              >
                {i + 1}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Episode;
