import ReactPrint from "react-to-print";
import { useRef } from "react";
import logo from "../../assets/logo.svg";
import "./Final.css";

export default function ({ getValues }) {
  const ref = useRef();
  return (
    <div className="container mx-auto">
      <div
        ref={ref}
        className="bgdiv w-[800px] h-[850px] mx-auto mt-10 rounded-lg"
      >
        <div className="flex justify-end mr-5 pt-3">
          <img className="w-[130px]" src={logo} />
        </div>
        {/* PERSONAL INFORMATION */}
        <div className="personal w-[90%] mx-auto text-white">
          <div className="names flex gap-3 mt-5 font-semibold text-xl">
            <h1>{getValues("firstname")}</h1>
            <h1>{getValues("lastname")}</h1>
          </div>
          <hr className="mt-2 border-2" />
          <div className="line1 flex gap-6 mt-3">
            <div className="flex gap-1 font-thin">
              <h1 className="font-semibold">Date of birth:</h1>
              <p>{getValues("dayofbirth")} /</p>
              <p>{getValues("monthofbirth")} /</p>
              <p>{getValues("yearofbirth")}</p>
            </div>
            <div className="gender flex gap-1">
              <h1 className="font-semibold">Gender:</h1>
              <p className="font-thin">{getValues("gender")}</p>
            </div>
            <div className="nationality flex gap-1">
              <h1 className="font-semibold">Nationality:</h1>
              <p className="font-thin">{getValues("nationality")}</p>
            </div>
          </div>

          <div className="line2 flex gap-6 mt-3">
            <div className="flex gap-1">
              <h1 className="font-semibold">Phone:</h1>
              <p className="font-thin">{getValues("codephone")}</p>
              <p className="font-thin">{getValues("numphone")}</p>
              <p className="font-thin">{getValues("phone")}</p>
            </div>

            <div className="email flex gap-1">
              <h1 className="font-semibold">Email:</h1>
              <p className="font-thin">{getValues("emailaddress")}</p>
            </div>

            <div className="flex gap-1">
              <h1 className="font-semibold">Address:</h1>
              <p className="font-thin">{getValues("address1")}</p>
              <p className="font-thin">{getValues("placeaddress")}</p>
            </div>
          </div>
          <div className="line3 flex gap-6 mt-3">
            <div className="flex gap-1">
              <h1 className="font-semibold">Country:</h1>
              <p className="font-thin">{getValues("country")}</p>
            </div>

            <div className="flex gap-1">
              <h1 className="font-semibold">City:</h1>
              <p className="font-thin">{getValues("city")}</p>
            </div>
            <div className="flex gap-1">
              <h1 className="font-semibold">Postal code:</h1>
              <p className="font-thin">{getValues("postalcode")}</p>
            </div>
          </div>
        </div>
        {/* PERSONAL INFORMATION */}

        {/* WORK EXPERIENCE */}
        <div className="experience w-[90%] mx-auto text-black mt-10">
          <h1 className="font-bold">WORK EXPERINCE</h1>
          <hr className="border-2 border-[#3B9E80] mt-2" />
          <div className="flex gap-1 mt-2">
            <p className="font-semibold">{getValues("position")}</p>-
            <p className="font-thin">{getValues("employer")}</p>
          </div>
          <div className="flex gap-1 font-thin">
            <p>{getValues("dayofbirth2")} /</p>
            <p>{getValues("monthofbirth2")} /</p>
            <p>{getValues("yearofbirth2")}</p> -
            <p>{getValues("dayofbirth3")} /</p>
            <p>{getValues("monthofbirth3")} /</p>
            <p>{getValues("yearofbirth3")}</p>
            <p>{getValues("country2")}</p>,<p>{getValues("town")}</p>
          </div>
          <div>
            <p className="font-semibold text-green-900">
              {getValues("active")}
            </p>
          </div>
          <hr className="mt-1 border-[#3B9E80]" />
        </div>
        {/* WORK EXPERIENCE */}

        {/* EDUCATION */}
        <div className="education w-[90%] mx-auto text-black mt-5">
          <h1 className="font-bold">EDUCATION AND TRAINING</h1>
          <hr className="border-2 border-[#3B9E80] mt-2" />
          <div className="flex gap-1 mt-2">
            <p className="font-semibold">{getValues("education")}</p>-
            <p className="font-thin">{getValues("organization")}</p>
          </div>
          <div className="flex gap-1 font-thin">
            <p>{getValues("dayofbirth4")} /</p>
            <p>{getValues("monthofbirth4")} /</p>
            <p>{getValues("yearofbirth4")}</p> -
            <p>{getValues("dayofbirth4")} /</p>
            <p>{getValues("monthofbirth4")} /</p>
            <p>{getValues("yearofbirth4")}</p>
          </div>
          <div className="flex gap-1 font-thin">
            <h1 className="font-semibold">Address:</h1>
            <p>{getValues("addressline1")}</p>
            <h1 className="font-semibold">Postalcode:</h1>
            <p>{getValues("postalcode3")}</p>
            <h1 className="font-semibold">Website:</h1>
            <p>{getValues("website3")}</p>
          </div>
          <hr className="mt-1 border-[#3B9E80]" />
        </div>
        {/* EDUCATION */}

        {/* SKILLS */}
        <div className="skills w-[90%] mx-auto text-black mt-5 leading-8">
          <h1 className="font-bold">LANGUAGE SKILLS</h1>
          <hr className="border-2 border-[#3B9E80] mt-2" />
          <div className="flex gap-1">
            <h1 className="font-semibold">Mother language:</h1>
            <p>{getValues("motherlanguage")}</p>
          </div>
          <div className="flex gap-1">
            <h1 className="font-semibold">Other languages:</h1>
            <p>{getValues("otherlanguage1")}</p>
            <p>{getValues("otherlanguage2")}</p>
            <p>{getValues("otherlanguage3")}</p>
            <p>{getValues("otherlanguage4")}</p>
            <p>{getValues("otherlanguage5")}</p>
            <p>{getValues("otherlanguage6")}</p>
            <p>{getValues("otherlanguage7")}</p>
            <p>{getValues("otherlanguage8")}</p>
            <p>{getValues("otherlanguage9")}</p>
            <p>{getValues("otherlanguage10")}</p>
          </div>
        </div>
        <div className="skills w-[90%] mx-auto text-black mt-2 leading-8">
          <h1 className="font-bold">DIGITAL SKILLS</h1>
          <hr className="border-2 border-[#3B9E80] mt-2" />
          <div className="flex gap-1">
            <h1 className="font-semibold">Digital skills:</h1>
            <p>{getValues("digitalskills1")}</p>
            <p>{getValues("digitalskills2")}</p>
            <p>{getValues("digitalskills3")}</p>
            <p>{getValues("digitalskills4")}</p>
            <p>{getValues("digitalskills5")}</p>
            <p>{getValues("digitalskills6")}</p>
            <p>{getValues("digitalskills7")}</p>
            <p>{getValues("digitalskills8")}</p>
            <p>{getValues("digitalskills9")}</p>
            <p>{getValues("digitalskills10")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 mt-5 gap-5">
        <ReactPrint
          trigger={() => (
            <button
              className="h-10 px-5 bg-blue-600 text-white rounded-2xl focus:shadow-outline 
              hover:bg-blue-600 hover:rounded-lg duration-700"
            >
              PDF
            </button>
          )}
          content={() => ref.current}
        />
        <a href="/">
          <button
            type="button"
            className="h-10 px-5 bg-red-600 text-white rounded-2xl focus:shadow-outline 
           hover:bg-red-600 hover:rounded-lg duration-700 "
          >
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
