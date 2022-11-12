import "./cart.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ImGift } from "react-icons/im";
import { BsTruck } from "react-icons/bs";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const viewed = [
  {
    img: "https://n.nordstrommedia.com/id/sr3/e9737c84-c956-4a05-984f-a22a098d5ea5.jpeg?w=156&h=240",
    tag: "Sustainable Style",
    brand: "PAIGE",
    price: "12,999.65",
    off: "20%",
    avail: 10,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/8fca7188-4bb4-47fb-9dc2-4430088d267d.jpeg?q=45&dpr=2&h=135.8&w=88",
    tag: "Sustainable Style",
    brand: "UGG",
    price: "13,181.65",
    off: "20%",
    avail: 2,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/09398284-872c-4e46-8f24-e2ba0fa8bdbd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
    tag: "Sustainable Style",
    brand: "COACH",
    price: "13,999.65",
    off: "25%",
    avail: 10,
  },
  {
    img: "https://n.nordstrommedia.com/id/sr3/8fca7188-4bb4-47fb-9dc2-4430088d267d.jpeg?q=45&dpr=2&h=135.8&w=88",
    tag: "Limited-Time Sale",
    brand: "Zella",
    price: "2,799.65",
    off: "25%",
    avail: 10,
  },
];


const CartPage = () => {
  const navigate = useNavigate();

  const handleCheckout=()=>{
    navigate(`/checkout`);
  }

  return (
    <div className="cart-part">
      <div className="cart-right">
        <Tabs variant="unstyled" className="cart-tab">
          <TabList>
            <Tab
              _selected={{
                color: "#484848",
                bg: "#D0D0D0",
                outline: "none",
                border: "none",
                fontWeight: "600",
              }}
              className="cart-tab-head"
            >
              Shopping Bag <span>()</span>
            </Tab>
            <Tab
              _selected={{
                color: "#484848",
                bg: "#D0D0D0",
                outline: "none",
                border: "none",
                fontWeight: "600",
              }}
              className="cart-tab-head"
            >
              Saved for Later<span>()</span>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                  <p>Items in your bag are not on hold.</p>
                  <p>
                    <ImGift id="c-gift" />
                    Choose gift options when you check out.
                  </p>
                </div>
                <hr />
                <div className="cart-delivery">
                  <h4>
                    <BsTruck id="c-truck" />
                    Delivery (1 item) to <span>India</span>
                  </h4>
                  <p>International shipping</p>
                </div>
                <hr />
                <div className="cart-items">
                  <div className="c-img">
                    <img
                      src="https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?w=156&h=240"
                      alt="img"
                    />
                  </div>
                  <div className="c-info">
                    <p>ZELLA</p>
                    <p>Live In High Waist Pocket 7/8 Leggings</p>
                    <p>Size: X-Small</p>
                    <p>Color: BLACK</p>
                    <p>Item: 6031488</p>
                    <select name="c-qty" id="c-qty">
                      <option value="1">Qty 1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <div className="c-actions">
                      <button>Remove</button>
                      <button>Save for later</button>
                    </div>
                  </div>
                  <div className="c-delivery">
                    <p>
                      <MdDoNotDisturbAlt id="d-logo" /> Not available for pickup
                    </p>
                    <p>
                      <FaRegDotCircle id="d-logo" /> Delivery
                    </p>
                    <p>
                      Delivery International orders usually arrive within 5–13
                      business days. We'll give you delivery dates in checkout.
                    </p>
                  </div>
                  <div className="c-price">
                    <p>$17.70</p>
                  </div>
                </div>
                <hr />
                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>
                      Need help? Call 1.888.282.6060 or{" "}
                      <span>chat with us</span>
                    </p>
                    <p>Shipping internationally?</p>
                  </div>
                  <div className="c-checkout">
                    <div className="c-total">
                      <p>Subtotal</p>
                      <p>$17.70</p>
                    </div>
                    <hr />
                    <button onClick={handleCheckout}>Check Out</button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="ct-info-one">
                <div className="bag-gift">
                  <h3>Shopping Bag</h3>
                </div>
                <hr />
                <div className="cart-items">
                  <div className="c-img">
                    <img
                      src="https://n.nordstrommedia.com/id/sr3/d539b784-cc6f-4bc2-8ee6-d2733c89d906.jpeg?w=156&h=240"
                      alt="img"
                    />
                  </div>
                  <div className="c-info">
                    <p>ZELLA</p>
                    <p>Live In High Waist Pocket 7/8 Leggings</p>
                    <p>Size: X-Small</p>
                    <p>Color: BLACK</p>
                    <p>Item: 6031488</p>
                    <div className="c-actions">
                      <button>Remove</button>
                      <button>Move to bag</button>
                    </div>
                  </div>
                  <div className="c-delivery">
                    <p>Qty:1</p>
                  </div>
                  <div className="c-price">
                    <p>$17.70</p>
                  </div>
                </div>
                <hr />
                <div className="c-check-part">
                  <div className="c-payments">
                    <p>Accepted Payment Methods</p>
                    <div className="payImgDiv">
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                        alt=""
                      />
                      <img
                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                        alt=""
                      />
                    </div>
                    <p>Need help? Call 1.888.282.6060 or chat with us</p>
                    <p>Shipping internationally?</p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="cart-left">
        <div className="rightSection">
          <div className="head">
            <p>People also viewed</p>
          </div>
          {viewed.map((e) => {
            return (
              <div className="sliderr">
                <div>
                  <img
                    src={e.img}
                    alt="img"
                  />
                </div>
                <div>
                  <p style={{ color: "black", fontWeight: "bold" }}>
                    {e.tag}
                  </p>
                  <p>{e.brand}</p>
                  <div className="smallDiv">
                    <p style={{ color: "red", fontWeight: "bold" }}>
                      INR {e.price}
                    </p>
                    <p>{e.off} off</p>
                  </div>
                  <p>Size {e.avail} available</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
