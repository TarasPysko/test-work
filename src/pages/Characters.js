import axios from "axios";
import React, { useEffect, useState } from "react";

function Characters() {
  const [serch, setSerch] = useState("");
  const [sortPopup, setSortPopup] = useState(false);
  const [sort, setSort] = useState({
    name: "status",
    addsort: `&status=alive`,
  });
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(null);
  const [modalWindow, setModalWindow] = useState(false);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?${sort.addsort}&name=${serch}&page=${page}`
      )
      .then((res) => {
        setPersons(res.data.results);
      });
  }, [page, serch, sort]);
  console.log(sort);
  const clickPerson = (i) => {
    setModalWindow(true);
    setIndex(i);
  };
  const sortCategories = [
    { name: "status", addsort: `&status=alive` },
    { name: "type", addsort: `&type` },
    { name: "species", addsort: `&species` },
  ];
  const clickSort = (sort) => {
    setSort(sort);
    setSortPopup(false);
  };
  console.log(sort);
  return (
    <div className="row  ">
      <div className="d-flex align-items-center">
        <div className="col-xs-4">
          <input
            onChange={(e) => {
              setSerch(e.target.value);
            }}
            value={serch}
            type="text"
            className="form-control col-xs-4 mt-3 mb-3 ml-3"
            placeholder="Name Person"
          />
        </div>

        <div className=" dropdown ">
          <button
            onClick={() => setSortPopup(!sortPopup)}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            sort by : {sort.name}
          </button>
          <div
            className={
              sortPopup ? "d-flex flex-column dropdown-menu" : "dropdown-menu"
            }
            aria-labelledby="dropdownMenuButton"
          >
            {sortCategories.map((e) => {
              return (
                <button
                  key={e.name}
                  className=" dropdown-item"
                  onClick={() => {
                    clickSort(e);
                  }}
                >
                  {e.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {modalWindow ? (
        <div className="modal d-flex pt-5" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{persons[index].name}</h5>

                <button
                  onClick={() => setModalWindow(false)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img
                  className="card-img-top "
                  src={persons[index].image}
                  alt={persons.name}
                />
                <h5>name: {persons[index].name}</h5>
                <h5>gender: {persons[index].gender}</h5>
                <h5>species: {persons[index].species}</h5>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setModalWindow(false)}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {persons.map((person, i) => {
        return (
          <div
            className="  card col-sm-4  mb-4"
            key={person.id}
            style={{ width: "18rem" }}
          >
            <img
              onClick={() => clickPerson(i)}
              className="card-img-top "
              src={person.image}
              alt={person.name}
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">gender:{person.gender}</p>
              <p className="card-text">species:{person.species}</p>
            </div>
          </div>
        );
      })}
      <div className="text-center">
        {Array(20)
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

export default Characters;
