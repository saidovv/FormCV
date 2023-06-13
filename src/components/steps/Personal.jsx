import { useContext, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { useTranslation } from "react-i18next";

export default function Personal({ register }) {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChanges = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto mt-[50px]">
        <h2 className="text-[black] dark:text-gray-300 font-serif text-3xl">
          {t("personal")}
        </h2>
        <p className="text-[black] dark:text-gray-300 mt-1 text-sm">
          {t("use")}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("firstname")}
            </span>
            <div className="mt-2">
              <input
                {...register("firstname")}
                onChange={handleChange}
                value={userData["firstname"] || ""}
                name="firstname"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300   block w-full rounded-md pl-[10px] border-0 py-1.5 shadow-sm ring-1 ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("lastname")}
            </span>
            <div className="mt-2">
              <input
                {...register("lastname")}
                onChange={handleChange}
                value={userData["lastname"] || ""}
                name="lastname"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md pl-[10px] border-0 py-1.5 shadow-sm ring-1 ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("birth")}
            </span>
            <div className="grid grid-rows-1 grid-flow-col gap-12">
              <div>
                <select
                  {...register("dayofbirth")}
                  id="dayofbirth"
                  name="dayofbirth"
                  className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>DD</option> <option>01</option> <option>02</option>{" "}
                  <option>03</option>
                  <option>04</option> <option>05</option> <option>06</option>{" "}
                  <option>07</option>
                  <option>08</option> <option>09</option> <option>10</option>{" "}
                  <option>11</option>
                  <option>12</option> <option>13</option> <option>14</option>{" "}
                  <option>15</option>
                  <option>16</option> <option>17</option> <option>18</option>{" "}
                  <option>19</option>
                  <option>20</option> <option>21</option> <option>22</option>{" "}
                  <option>23</option>
                  <option>24</option> <option>25</option> <option>26</option>{" "}
                  <option>27</option>
                  <option>28</option> <option>29</option> <option>30</option>{" "}
                  <option>31</option>
                </select>
              </div>
              <div>
                <select
                  {...register("monthofbirth")}
                  id="monthofbirth"
                  name="monthofbirth"
                  className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>MM</option> <option>01</option> <option>02</option>{" "}
                  <option>03</option>
                  <option>04</option> <option>05</option> <option>06</option>{" "}
                  <option>07</option>
                  <option>08</option> <option>09</option> <option>10</option>{" "}
                  <option>11</option> <option>12</option>
                </select>
              </div>
              <div>
                <select
                  {...register("yearofbirth")}
                  id="yearofbirth"
                  name="yearofbirth"
                  className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>YY</option> <option>2023</option>{" "}
                  <option>2022</option> <option>2021</option>
                  <option>2020</option> <option>2019</option>{" "}
                  <option>2018</option> <option>2017</option>
                  <option>2016</option> <option>2015</option>{" "}
                  <option>2014</option> <option>2013</option>
                  <option>2012</option> <option>2011</option>{" "}
                  <option>2010</option> <option>2009</option>
                  <option>2008</option> <option>2007</option>{" "}
                  <option>2006</option> <option>2005</option>
                  <option>2004</option> <option>2003</option>{" "}
                  <option>2002</option> <option>2001</option>
                  <option>2000</option> <option>1999</option>{" "}
                  <option>1998</option> <option>1997</option>
                  <option>1996</option> <option>1995</option>{" "}
                  <option>1994</option> <option>1993</option>
                  <option>1992</option> <option>1991</option>{" "}
                  <option>1990</option> <option>1989</option>
                  <option>1988</option> <option>1987</option>{" "}
                  <option>1986</option> <option>1985</option>
                  <option>1984</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mt-7">
                <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
                  {t("gender")}
                </span>
                <select
                  {...register("gender")}
                  id="gender"
                  name="gender"
                  className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>{t("selectlist")}</option>
                  <option>{t("male")}</option> <option>{t("female")}</option>
                </select>
              </div>
              <div className="mt-7">
                <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
                  {t("nation")}
                </span>
                <select
                  {...register("nationality")}
                  id="nationality"
                  name="nationality"
                  className="block w-full 
              rounded-md border-0 py-1.5 shadow-sm ring-1 bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300
              ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>{t("select")}</option>
                  <option>{t("tajik")}</option>
                  <option>{t("uzbek")}</option>
                  <option>{t("russian")}</option> <option>{t("other")}</option>
                </select>
              </div>
            </div>
          </div>
          {/* PERSONAL INFORMATION */}

          {/* CONTACT */}

          <div className="col-span-full">
            <h1 className="text-[black] dark:text-gray-300 font-serif text-2xl">
              {t("contact")}
            </h1>
            <hr className="mt-[10px]" />
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("email")}
            </span>
            <div className="mt-2">
              <input
                {...register("emailaddress")}
                onChange={handleChange}
                value={userData["emailaddress"] || ""}
                type="text"
                name="emailaddress"
                placeholder="e.g.john.doe@mail.com"
                id="emailaddress"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
                {t("phone")}
              </span>
              <select
                {...register("phone")}
                id="phone"
                name="phone"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>{t("select")}</option>
                <option>{t("home")}</option>
                <option>{t("work")}</option>
                <option>{t("mobile")}</option> <option>{t("other")}</option>
              </select>
            </div>
            <div className="mt-2">
              <select
                {...register("codephone")}
                id="codephone"
                name="codephone"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>{t("select")}</option>
                <option>+992</option>
                <option>+998</option>
                <option>+7</option>
              </select>
            </div>
            <div className="mt-2">
              <input
                {...register("numphone")}
                onChange={handleChange}
                value={userData["numphone"] || ""}
                name="numphone"
                placeholder="e.g. 555-44-33-22"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* CONTACT */}

          {/* ADDRESS */}

          <div className="col-span-full">
            <h1 className="text-[black] dark:text-gray-300 font-serif text-2xl">
              {t("address")}
            </h1>
            <hr className="mt-[10px]" />
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("type")}
            </span>
            <select
              {...register("placeaddress")}
              id="placeaddress"
              name="placeaddress"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>{t("select")}</option> <option>{t("home")}</option>{" "}
              <option>{t("work")}</option> <option>{t("other")}</option>
            </select>
          </div>
          <div className="col-span-full">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("address1")}
            </span>
            <div className="mt-2">
              <input
                {...register("address1")}
                onChange={handleChange}
                value={userData["address1"] || ""}
                name="address1"
                placeholder="Only Street name:"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 pl-[10px] py-1.5 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("postalcode")}
            </span>
            <div className="mt-2">
              <input
                {...register("postalcode")}
                onChange={handleChange}
                value={userData["postalcode"] || ""}
                name="postalcode"
                placeholder="e.g: 0035482"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md pl-[10px] border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("city")}
            </span>
            <div className="mt-2">
              <input
                {...register("city")}
                onChange={handleChange}
                value={userData["city"] || ""}
                name="city"
                placeholder="e.g: Paris"
                className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md pl-[10px] border-0 py-1.5 ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-2">
            <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
              {t("country")}
            </span>
            <select
              {...register("country")}
              id="country"
              name="country"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>{t("select")}</option> <option>{t("tajikistan")}</option>{" "}
              <option>{t("uzbekistan")}</option>
              <option>{t("russia")}</option> <option>{t("other")}</option>
            </select>
          </div>
          {/* ADDRESS */}
        </div>
      </div>
    </div>
  );
}
