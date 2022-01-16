import React,{useState} from 'react';
const Tours = ({ id, name, info, image, price, filterById }) => {
  const [read, setRead] = useState(true);
  return (
    <div className="card">
      <img src={image} alt="" srcset="" />
      <div className="text-content">
        <div className="flex-row">
          <h5>{name}</h5>
          <h6 className="price">${price}</h6>
        </div>
        <p>
          {read ? info.substring(0, 20) + "..." : info}{" "}
          {read ? (
            <button onClick={() => setRead(!read)} className="read-more">
              Read More
            </button>
          ) : (
            <button onClick={() => setRead(!read)} className="read-more">
              Read less
            </button>
          )}{" "}
        </p>
        <button className="not-interested" onClick={() => filterById(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tours;
