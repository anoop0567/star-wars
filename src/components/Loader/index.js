const Loader = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {new Array(4).fill().map((date, index) => {
        return (
          <div className="col" key={index}>
            <div className="card rounded-0" aria-hidden="true">
              <div className="card-header">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder bg-light col-6 "></span>
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text placeholder-glow">
                  <span className="placeholder bg-light col-9"></span>
                  <span className="placeholder bg-light col-7"></span>
                  <span className="placeholder bg-light col-6"></span>
                  <span className="placeholder bg-light col-9"></span>
                  <span className="placeholder bg-light col-8"></span>
                </p>
              </div>
              <div className="card-footer">
                <p className="card-text placeholder-glow">
                  <span className="placeholder placeholder-xs bg-light col-7"></span>
                  <span className="placeholder placeholder-xs bg-light col-7"></span>
                  <span className="placeholder placeholder-xs bg-light col-7"></span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
