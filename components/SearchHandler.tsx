import React, { useState, useRef } from "react";

export default function SearchHandler({ handleSubmit, handleClear }) {
  const formRef = useRef();
  const [searchText, setSearchText] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchText);
  };

  const clearComplete = () => {
    // @ts-ignore
    formRef.current.reset();
    handleClear();
  };

  return (
    <div className="search__handler">
      <div className="container pt-4 pb-4">
        <form onSubmit={handleFormSubmit} ref={formRef}>
          <div className="input-group">
            <input
              type="text"
              className="form-control search__input"
              placeholder="Search for images"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-dark">
                Search
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={clearComplete}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
