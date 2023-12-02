import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import pic from "../../assets/property/propertyImg.jpg";
import modernPic from "../../assets/property/modern.jpg";
import { toast } from "react-toastify";
import { PropertyCard } from "../components/PropertyCard";
import HomeCard from "../components/HomeCard";

export const Property = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [userName, setUsername] = useState();
  const [userEmail, setUseremail] = useState();
  const [userPhone, setUserphone] = useState();
  const [userMessage, setMessage] = useState();

  const scheduleSubmit = (e) => {
    e.preventDefault();
    if (
      date === undefined ||
      time === undefined ||
      name === undefined ||
      email === undefined ||
      phone === undefined
    ) {
      toast.error("All fields are required!");
    } else {
      console.log(time, name, email, phone);
      toast.success("success!");
    }
  };

  const contactData = (e) => {
    e.preventDefault();
    if (
      userName === undefined ||
      userEmail === undefined ||
      userPhone === undefined ||
      userMessage === undefined
    ) {
      toast.error("All fields are required!");
    } else {
      e.preventDefault();
      console.log(name, email, phone);
      toast.success("success!");
    }
  };

  return (
    <PropertyWrapper>
      {/* banner start */}
      <div className="container banner mt-2 bg-blue-500">
        <div className="p-4">
          <span className="px-2 py-1 text-sm text-white bg-gray-500 rounded">
            FOR SALE
          </span>
          <div className="mt-96 sm:mt-44 md:mt-96 lg:mt-96 grid grid-cols-2 text-white">
            <div>
              <p className="text-xs">
                <Link to="/">Home</Link> &gt; Single Family Home &gt; Modern
                wood home
              </p>
              <br />
              <span className="lg:text-3xl text-sm">Modern Wood Home</span>
              <p className=" text-sm">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: " #ffffff" }}
                ></i>
                &nbsp;1435 Logan St, Los Angeles, CA 90026, USA
              </p>
            </div>

            <div className="text-right text-white">
              <span className="lg:text-4xl text-sm">$760,000</span>
              <p className="text-sm">$3,200/sq ft</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview start here*/}
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="grid w-full col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 p-5">
          <div className="">
            <b className="">Overview</b>
          </div>
          <hr />
          <div className="grid w-6/8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-4 ">
            <div className="">
              <div className="flex py-10 text-sm justify-between">
                <div>
                  <h6 className="font-bold">Single Family Home</h6>
                  <span>Property Type</span>
                </div>
                <div className="text-center">
                  <span>4</span>
                  <p>Bedrooms</p>
                </div>
                <div className="text-center">
                  <span>1</span>
                  <p>Bothroom</p>
                </div>
              </div>

              {/* second row of overview */}
              <div className="flex  text-sm mt-4 text-center justify-between">
                <div>
                  <span>1</span>
                  <p>Garage</p>
                </div>
                <div className="">
                  <span>2600</span>
                  <p>Sq Ft</p>
                </div>
                <div className="">
                  <span>2016</span>
                  <p>Year Built</p>
                </div>
              </div>
            </div>
            <div className="p-2 w-full py-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28485.001019091455!2d80.99929055!3d26.820062549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688964716043!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Description */}
          <div className="mt-16 bg-white rounded p-3 space-y-3">
            <h3 className="font-semibold">Description</h3>
            <hr />
            <p className="font-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. <br />
              <br />
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Typi
              non habent claritatem insitam; est usus legentis in iis qui facit
              eorum claritatem. Investigationes demonstraverunt lectores legere
              me lius quod ii legunt saepius. Claritas est etiam processus
              dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
              est notare quam littera gothica, quam nunc putamus parum claram,
              anteposuerit litterarum formas humanitatis per seacula quarta
              decima et quinta decima. Eodem modo typi, qui nunc nobis videntur
              parum clari, fiant sollemnes in futurum.
            </p>
          </div>
          {/* address */}
          <div className="w-full rounded mt-4 p-3 bg-white text-sm">
            <div className="flex justify-between p-2">
              <h3>Address</h3>
              <button
                className="py-1 px-2 rounded text-sm text-white"
                style={{ background: "#00aeff" }}
              >
                Open on Google Map
              </button>
            </div>
            <hr className="mt-2 p-2" />
            <div className="grid grid-cols-2">
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Address</div>
                  <div>1435 Logan St</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Zip/Postal Code</div>
                  <div>90026</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">City</div>
                  <div>Los Angeles</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Area</div>
                  <div>Northeast Los</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">State/country</div>
                  <div>California</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Country</div>
                  <div>United States</div>
                </div>
              </div>
            </div>
          </div>
          {/* Details */}
          <div className="w-full rounded mt-4 p-2 text-sm bg-white">
            <div className="flex justify-between flex-col p-2">
              <h3>Details</h3>
              <p className="text-gray-500">
                Updated on April 4, 2020 at 5:19 pm
              </p>
            </div>
            <hr className="mt-2 p-2" />

            <div className="grid grid-cols-2 border-2 p-4 border-blue-300  rounded bg-blue-100">
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Property ID:</div>
                  <div>HZ35</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Garage:</div>
                  <div>1</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Price:</div>
                  <div>$760,000</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Garage Size:</div>
                  <div>200 sqFt</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Property Size:</div>
                  <div>2600 Sq Ft</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Build</div>
                  <div>2016</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Bedrooms:</div>
                  <div>4</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Property Type</div>
                  <div>Single Family</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Bathroom:</div>
                  <div>1</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Property Status:</div>
                  <div>For Sale</div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Details */}
          <div className="w-full rounded mt-4 p-3 bg-white text-sm">
            <div className="flex justify-between p-2">
              <h3>Additional Details</h3>
            </div>
            <hr className="mt-2 p-2" />
            <div className="grid grid-cols-2">
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Deposit:</div>
                  <div>20%</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Amenities:</div>
                  <div>Clubhouse</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Pool Size:</div>
                  <div>300 sqFt</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Additional Rooms::</div>
                  <div>Guest Bath</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Last remodel year:</div>
                  <div>1987</div>
                </div>
              </div>
              <div className="p-2">
                <div className="border-b py-2 flex flex-col justify-between border-gray-400">
                  <div className="font-bold">Equipment:</div>
                  <div>Grill - Gas</div>
                </div>
              </div>
            </div>
          </div>
          {/* Features start */}
          <div className="w-full rounded mt-4 p-3 bg-white text-sm">
            <div className="flex justify-between p-2">
              <h3>Additional Details</h3>
            </div>
            <hr className="mt-2 p-2" />
            <div className="grid">
              <div className="p-2">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                  <div className="py-2 space-y-5">
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Air Conditioning</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Barbeque</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Dryer</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Gym</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Laundry</Link>
                    </div>
                  </div>

                  <div className="py-2 space-y-5">
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Lawn</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Microwave</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Outdoor Shower</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Refrigerator</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Sauna</Link>
                    </div>
                  </div>

                  <div className="py-2 space-y-5">
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Swimming Pool</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">TV Cable</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Washer</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">WiFi</Link>
                    </div>
                    <div className="">
                      <i className="fa-solid fa-check"></i>&nbsp;
                      <Link to="">Window Coverings</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Schedule A Tour start here */}
          <div className="grid grid-cols-1 mt-4 bg-white rounded sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <img src={pic} className="h-full rounded" alt="" />
            </div>
            <div className=" p-4">
              <div>
                <h3>Schedule A Tour</h3>
                <input
                  type="date"
                  placeholder=""
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 border mt-2 rounded py-2"
                />
              </div>

              {/* form start */}

              <div className="mt-4">
                <h3>Tour Type</h3>
                <form action="" className="mt-4">
                  {/* <div className="flex mt-4 justify-between"> */}
                  <button className="px-4 py-2 border-1 text-blue-400 border-blue-400 rounded">
                    In Person
                  </button>
                  <button className="px-4 lg:ml-16 ml-5 py-2 border border-black rounded">
                    Video Chat
                  </button>
                  {/* </div> */}
                  {/* input fields */}
                  <div>
                    <select
                      name=""
                      id=""
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full p-2 border mt-2 rounded py-2"
                    >
                      <option value="">Select</option>
                      <option value="6 AM">6 AM</option>
                      <option value="8 AM">8 AM</option>
                      <option value="10 AM">10 AM</option>
                      <option value="12 PM">12 PM</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 border mt-2 rounded py-2"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border mt-2 rounded py-2"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2 border mt-2 rounded py-2"
                    />
                    <button
                      style={{ background: "#ff6e00" }}
                      className="w-full mt-2 text-white py-2 rounded"
                      onClick={scheduleSubmit}
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* similar listing */}
          <div className="mt-4">
            <h3>Similar Listing</h3>
            <PropertyCard />
          </div>
        </div>

        {/* start Country House Real Estate */}

        <div
          style={{ width: "100%" }}
          className="grid-cols-12 bg-white w-full p-5 rounded mt-5"
        >
          <div className="sidebar ">
            <div className="flex  justify-center items-center">
              <img src={modernPic} className="h-20 w-20" alt="" />
              <h3>Country House Real Estate</h3>
            </div>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border mt-4 rounded py-2"
              />
              <input
                type="text"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUseremail(e.target.value)}
                className="w-full p-2 border mt-4 rounded py-2"
              />
              <input
                type="text"
                placeholder="Phone"
                maxLength="10"
                value={userPhone}
                onChange={(e) => setUserphone(e.target.value)}
                className="w-full p-2 border mt-4 rounded py-2"
              />
              <textarea
                name=""
                id=""
                value={userMessage}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello, I am interested in [Modern wood home]"
                className="border w-full mt-4 p-2 rounded"
                rows="4"
              ></textarea>
              <button
                onClick={contactData}
                style={{ background: "#ff6e00" }}
                className="w-full mt-4 text-white py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PropertyWrapper>
  );
};

const PropertyWrapper = styled.div`
  .banner {
    background-image: url(${pic});
    background-size: 100% 100%;
    height: 100vh;
  }

  .sidebar {
    position: sticky;
    top: 50px;
  }
  /* @media screen and (max-width: 768) {
    .main-div {
      width: 100%;
    }
    .sidebar {
      width: 100%;
    }
  } */
`;
