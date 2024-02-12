const Card = ({ category, name, price, shortDescription, image, bought, id, buyRemoveProduct, selectedLanguage }) => {
  return (
    <div className="card">
      <h1>{category}</h1>
      <span>
        name: <strong>{name}</strong>
      </span>
      <br />
      <span>
        price: <strong>{price}</strong>
      </span>
      <br />
      <span>
        Description: <strong>{shortDescription}</strong>
      </span>
      <br />
      <img width="250px" height="250px" src={image} alt="img" />
      <button onClick={() => buyRemoveProduct(id, price)}>
        {bought ? selectedLanguage?.removeCartButton: selectedLanguage?.addCartButton}
      </button>
    </div>
  );
};

export default Card;
