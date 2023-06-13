import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Education({ register }) {
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => i18n.changeLanguage(language);

  const handleChange = (event) => {
    const { value } = event.target;
    changeLanguage(value);
    setLng(value);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto mt-[50px]">
        <h2 className="text-[black] dark:text-gray-300  font-semibold text-3xl">
          {t("education")}
        </h2>
        <p className="text-[black] dark:text-gray-300  mt-1 text-md">
          {t("learning")}
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-[30px]">
        <h1 className="text-[black] dark:text-gray-300  text-xl font-semibold">
          {t("neweducation")}
        </h1>
        <p className="text-[black] dark:text-gray-300 ">{t("awarded")}</p>
        <input
          {...register("education")}
          onChange={handleChange}
          type="text"
          name="education"
          id="education"
          className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2 w-[80%] mx-auto">
        <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
          {t("organisation")}
        </span>
        <input
          {...register("organization")}
          onChange={handleChange}
          type="text"
          name="organization"
          id="organization"
          className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-2 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="col-span-full w-[80%] mx-auto mt-[10px]">
        <span className="text-[black] dark:text-gray-300  block text-sm font-medium leading-6">
          {t("address1")}
        </span>
        <div className="mt-2">
          <input
            {...register("addressline1")}
            onChange={handleChange}
            type="text"
            name="addressline1"
            id="addressline1"
            placeholder="w.g: Street name, P.O, Box"
            className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 pl-[10px] py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 w-[80%] mx-auto mt-[10px]">
        <div className="sm:col-span-2 sm:col-start-1">
          <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
            {t("postalcode")}
          </span>
          <div className="mt-2">
            <input
              {...register("postalcode3")}
              onChange={handleChange}
              type="text"
              name="postalcode3"
              placeholder="e.g: 0035482"
              id="postalcode3"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md pl-[10px] border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="col-span-full w-[80%] mx-auto mt-[10px]">
        <span className="text-[black] dark:text-gray-300 block text-sm font-medium leading-6">
          {t("website")}
        </span>
        <div className="mt-2">
          <input
            {...register("website3")}
            onChange={handleChange}
            type="text"
            name="website3"
            id="website3"
            className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 pl-[10px] py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 w-[80%] mx-auto mt-[10px]">
        <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
          {t("from")}
        </span>
        <span className="text-[black] dark:text-gray-300  block text-sm leading-6">
          {t("to")}
        </span>
        <div className="grid grid-cols-3">
          <div>
            <select
              {...register("dayofbirth4")}
              id="dayofbirth4"
              name="dayofbirth4"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
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
              {...register("monthofbirth4")}
              id="monthofbirth4"
              name="monthofbirth4"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
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
              {...register("yearofbirth4")}
              id="yearofbirth4"
              name="yearofbirth4"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>YY</option> <option>2023</option> <option>2022</option>{" "}
              <option>2021</option>
              <option>2020</option> <option>2019</option> <option>2018</option>{" "}
              <option>2017</option>
              <option>2016</option> <option>2015</option> <option>2014</option>{" "}
              <option>2013</option>
              <option>2012</option> <option>2011</option> <option>2010</option>{" "}
              <option>2009</option>
              <option>2008</option> <option>2007</option> <option>2006</option>{" "}
              <option>2005</option>
              <option>2004</option> <option>2003</option> <option>2002</option>{" "}
              <option>2001</option>
              <option>2000</option> <option>1999</option> <option>1998</option>{" "}
              <option>1997</option>
              <option>1996</option> <option>1995</option> <option>1994</option>{" "}
              <option>1993</option>
              <option>1992</option> <option>1991</option> <option>1990</option>{" "}
              <option>1989</option>
              <option>1988</option> <option>1987</option> <option>1986</option>{" "}
              <option>1985</option>
              <option>1984</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <select
              {...register("dayofbirth5")}
              id="dayofbirth5"
              name="dayofbirth5"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
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
              {...register("monthofbirth5")}
              id="monthofbirth5"
              name="monthofbirth5"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
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
              {...register("yearofbirth5")}
              id="yearofbirth5"
              name="yearofbirth5"
              className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-[50%] rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>YYYY</option> <option>2023</option> <option>2022</option>{" "}
              <option>2021</option>
              <option>2020</option> <option>2019</option> <option>2018</option>{" "}
              <option>2017</option>
              <option>2016</option> <option>2015</option> <option>2014</option>{" "}
              <option>2013</option>
              <option>2012</option> <option>2011</option> <option>2010</option>{" "}
              <option>2009</option>
              <option>2008</option> <option>2007</option> <option>2006</option>{" "}
              <option>2005</option>
              <option>2004</option> <option>2003</option> <option>2002</option>{" "}
              <option>2001</option>
              <option>2000</option> <option>1999</option> <option>1998</option>{" "}
              <option>1997</option>
              <option>1996</option> <option>1995</option> <option>1994</option>{" "}
              <option>1993</option>
              <option>1992</option> <option>1991</option> <option>1990</option>{" "}
              <option>1989</option>
              <option>1988</option> <option>1987</option> <option>1986</option>{" "}
              <option>1985</option>
              <option>1984</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
