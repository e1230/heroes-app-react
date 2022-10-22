import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };
  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          Searching
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="select a Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a Hero</div>
          <div className="alert alert-danger">
            No results for <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
