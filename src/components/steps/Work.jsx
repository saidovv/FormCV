import { useTranslation } from "react-i18next";
import React, { useState } from "react";

export default function Work({ register }) {

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
        <h2 className="text-[black] dark:text-gray-300 font-semibold text-3xl">
          {t("workexp")}
        </h2>
        <p className="text-[black] dark:text-gray-300 mt-1 text-md">
          {t("describe")}
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-[30px]">
        <h1 className="text-[black] dark:text-gray-300 text-xl font-semibold">
          {t("newwork")}
        </h1>
        <p className="text-[black] dark:text-gray-300">{t("occupation")}</p>
        <input
          {...register("position")}
          onChange={handleChange}
          type="text"
          name="position"
          placeholder="Title of the occupation"
          id="position"
          className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-2 mt-[10px] ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-2 w-[80%] mx-auto">
        <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
          {t("employer")}
        </span>
        <input
          {...register("employer")}
          onChange={handleChange}
          type="text"
          name="employer"
          id="employer"
          className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full pl-[10px] rounded-md border-0 py-2 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 w-[80%] mx-auto mt-[10px]">
        <div>
          <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
            {t("city")}
          </span>
          <input
            {...register("town")}
            onChange={handleChange}
            type="text"
            name="town"
            placeholder="e.g: Paris"
            id="town"
            className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md pl-[10px] border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
            {t("country")}
          </span>
          <select
            {...register("country2")}
            id="country2"
            name="country2"
            className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 block w-full rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>{t("select")}</option> <option>{t("tajikistan")}</option>{" "}
            <option>{t("uzbekistan")}</option>
            <option>{t("russia")}</option> <option>{t("other")}</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 w-[80%] mx-auto mt-[10px]">
        <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
          {t("from")}
        </span>
        <span className="text-[black] dark:text-gray-300 block text-sm leading-6">
          {t("to")}
        </span>
        <div className="grid grid-cols-3">
          <div>
            <select
              {...register("dayofbirth2")}
              id="dayofbirth2"
              name="dayofbirth2"
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
              {...register("monthofbirth2")}
              id="monthofbirth2"
              name="monthofbirth2"
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
              {...register("yearofbirth2")}
              id="yearofbirth2"
              name="yearofbirth2"
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
              {...register("dayofbirth3")}
              id="dayofbirth3"
              name="dayofbirth3"
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
              {...register("monthofbirth3")}
              id="monthofbirth3"
              name="monthofbirth3"
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
              {...register("yearofbirth3")}
              id="yearofbirth3"
              name="yearofbirth3"
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
      </div>
      <div className="w-[80%] mx-auto mt-[20px]">
        <span className="text-[black] dark:text-gray-300 block text-sm">
          {t("main")}
        </span>
        <div className="mt-2">
          <input
            {...register("active")}
            onChange={handleChange}
            type="text"
            name="active"
            id="active"
            className="bg-[white] dark:bg-[#1E2433] text-[black] dark:text-gray-300 w-[100%] pb-[100px] shadow-sm ring-1 ring-gray-300 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
