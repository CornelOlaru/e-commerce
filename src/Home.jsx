import productList from "./productList";
import { format } from "date-fns";
import RandomProduct from "./components/RandomProduct";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Select from "./components/Select";
import Input from "./components/Input";
import language from "./language";


//const voucher = "10off";

const Home = () => {
  const randomIndex = Math.floor(Math.random() * productList.length);
  const randomProduct = productList[randomIndex];
  const categories = [...new Set(productList.map((item) => item.category))];
  // destructirng la objects si la array-uri
  const today = format(new Date(), "dd MMMM yyyy");

  const [localProducts, setLocalProducts] = useState([...productList]);

  const [category, setCategory] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const [boughtItems, setBoughtItems] = useState({});
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [couponName, setCouponName] = useState("");
  const [reducedPrice, setReducedPrice] = useState(0);
  const [couponActive, setCouponActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language.english);
  const buyRemoveProduct = (id, price) => {
    if (boughtItems[id]) {
      setNumberOfProducts((number) => number - 1);
      setTotalPrice((oldPrice) => oldPrice - Number(price.substring(1)));
    } else {
      setNumberOfProducts((number) => number + 1);
      setTotalPrice((oldPrice) => oldPrice + Number(price.substring(1)));
    }
    setBoughtItems((items) => ({ ...items, [id]: !boughtItems[id] }));
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
    let newProducts = productList.filter(
      (item) =>
        item.category === e.target.value &&
        item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        Number(item.price.substring(1)) >= Number(priceFilter)
    );
    setLocalProducts([...newProducts]);
  };

  const onNameFilterChange = (e) => {
    setNameFilter(e.target.value);
    let newProducts = productList.filter(
      (item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
        item.category === category &&
        Number(item.price.substring(1)) >= Number(priceFilter)
    );
    setLocalProducts([...newProducts]);
  };

  const onPriceFilterChange = (e) => {
    setPriceFilter(Number(e.target.value));
    let newProducts = productList.filter(
      (item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        item.category === category &&
        Number(item.price.substring(1)) >= Number(e.target.value)
    );
    setLocalProducts([...newProducts]);
  };

  const onCouponChange = (e) => {
    setCouponName(e.target.value);
  };

  const onClickCoupon = () => {
    if (couponName === "10off") {
      setCouponActive(true);
      setReducedPrice(Math.round(totalPrice * 0.9));
    } else {
      setCouponActive(false);
      setReducedPrice(0);
    }
  };

  useEffect(() => {
    if (couponActive) {
      setReducedPrice(Math.round(totalPrice * 0.9));
    }
  }, [totalPrice]);

  return (
    <div>
      <div className="navbar">
        
      </div>
      <div>
        <h1>{selectedLanguage.SelectLanguage}</h1>
        <button onClick={() => setSelectedLanguage(language.english)}>
          English
        </button>
        <button onClick={() => setSelectedLanguage(language.romanian)}>
          Romanian
        </button>
        <div style={{ textAlign: "center" }}>
          {" "}
          {/* <h2> {selectedLanguage.randomProduct}:</h2> */}
        </div>
      </div>

      {/* <RandomProduct randomProduct={randomProduct} /> */}

      <p>
        {selectedLanguage.dataDay}: <strong>{today.toString()}</strong>
      </p>

      <Select
        value={category}
        onChange={onCategoryChange}
        values={categories}
      />

      <Input
        value={nameFilter}
        onChange={onNameFilterChange}
        name={selectedLanguage.filterPlaceHolder}
      />
      <Input
        value={priceFilter}
        onChange={onPriceFilterChange}
        name={selectedLanguage.productPrice}
      />

      <Input
        value={couponName}
        onChange={onCouponChange}
        name={selectedLanguage.couponPlaceHolder}
      />
      <button onClick={onClickCoupon}>{selectedLanguage.couponButton} </button>
      <h1>
        {selectedLanguage.totalBoughtItems}: {numberOfProducts}
      </h1>
      <h1>
        {selectedLanguage.totalPrice}: {reducedPrice || totalPrice}
      </h1>

      <div style={{ textAlign: "center" }}>
        {" "}
        <h2> {selectedLanguage.restProducts}:</h2>
      </div>
      <div className="grid">
        {localProducts.map((item) => (
          <Card
            category={item.category}
            name={item.name}
            shortDescription={item.shortDescription}
            image={item.image}
            price={item.price}
            bought={boughtItems?.[item?.id]}
            buyRemoveProduct={buyRemoveProduct}
            id={item.id}
            selectedLanguage={selectedLanguage}
          />
        ))}
      </div>
      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Home;
