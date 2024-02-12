const RandomProduct = ({randomProduct}) => {
   randomProduct.newPrice =
    "$" + Math.round(Number(randomProduct.price.substring(1)) / 2).toFixed(2);
  return (
    <div className="grid">
      <div className="cardrandom">
        <h1>{randomProduct.category}</h1>
        <span>
          name:<strong> {randomProduct.name}</strong>
        </span>
        <br />
        <span>
          price:<strong>{randomProduct.price}</strong>
        </span>
        <br />
        <span>
          New Price:<strong>{randomProduct.newPrice}</strong>
        </span>
        <br />
        <span>
          Description:<strong>{randomProduct.shortDescription}</strong>
        </span>
        <img width="250px" height="250px" src={randomProduct.image} alt="img" />
      </div>
    </div>
  );
};

export default RandomProduct;
