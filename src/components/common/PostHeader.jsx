import React from "react";

export const PostHeader = () => {
  return (
    <div className="container max-sm:h-0">
      <div className="row sub-header">
        <div className="col col-6 mt-2">
          <input
            type="text"
            placeholder="Search here..."
            className="form-control py-2 w-100"
          />
        </div>
        <div className="col col-6 mt-2">
          <button className="btn btn-light border-slate-400 font-bold py-2 px-3">
            Status
          </button>
          <button className="btn btn-light border-slate-400 font-bold py-2 px-3 ml-2">
            Beds
          </button>
          <button className="btn btn-light border-slate-400 font-bold py-2 px-3 ml-2">
            Baths
          </button>
          <button className="btn btn-light border-slate-400 font-bold py-2 px-3 ml-2">
            Price
          </button>
          <button className="btn btn-light border-slate-400 font-bold py-2 px-4 ml-2">
            Advance
          </button>
          <button className="btn btn-light bg-orange-500 font-bold py-2 px-3 ml-2 text-white hover:bg-orange-400">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
