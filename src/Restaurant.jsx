import { useEffect, useState } from "react";
import { restaurants } from "./restaurant";

function Restaurant() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setData(restaurants);
    setOriginalData(restaurants);
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(originalData)
  },)


  useEffect(() => {
  
    if (input) {
      const filterData = originalData.filter((item) => {
        return item.cuisine.toLowerCase().includes(input.toLocaleLowerCase())
      })
      setData(filterData)
    }
    else {
      setData(originalData);
    }

},[input,originalData])

  return (
    <>
      <div className="flex justify-center items-center mb-5 w-full">
        <input
          type="text"
          placeholder="Chinese/Indian/Mexican"
          className="border border-gray-500 rounded-lg px-5 py-2 w-[35%]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button></button>
      </div>

      <div className="flex gap-5 flex-wrap w-full justify-center items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[22%] text-center border rounded-xl border-gray-200 p-2 bg-slate-50 hover:bg-red-100 shadow-xl"
          >
            <div>
              <img src={item.image} className="h-48  mx-auto" alt={item.name} />
              <div>
                <h1 className="text-xl font-semibold my-2">{item.name}</h1>
                <p className="my-1 text-md">{item.location}</p>
                <p className="italic font-semibold text-lg">
                  <i>{item.cuisine}</i>
                </p>
                <p className="my-2 text-md font-bold text-yellow-500">
                  Ratings: {item.rating} / 5
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Restaurant;
