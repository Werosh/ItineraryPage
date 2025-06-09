import React from "react";

const Home = () => {
  return (
    <div className="mx-auto w-[800px] bg-white mt-1">
      <div className="clear-both"></div>
      <div className="content border-x border-[#b5b5ca] bg-white">
        {/* CONTENT */}
        <div className="logo_center text-center">
          <img
            id="Logo"
            src="http://s3-ap-northeast-1.amazonaws.com/vj.cdn/images/vietjetair.png"
            width="800"
            alt="Vietjet Air Logo"
          />
        </div>
        <div className="px-[15px]">
          <div className="clear-both"></div>
          <div className="h-5"></div>
          {/*DONE*/}
          <h1 className="text-left text-2xl font-bold text-[#ed2025] py-px my-1.5">
            TRAVEL ITINERARY
          </h1>
          <p className="text-black text-sm">
            Do not forget to "
            <a
              className="font-normal text-blue-700"
              href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2Fen%2Fcheckin%2F%3Futm_source=itinerary-vj-en%26utm_medium=cpc%26utm_campaign=vjc_awo2023_cio/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/qa7XKJeMVocLv_IiufVNY-P_F4A=428"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check-in Online
            </a>
            " 24 hours before your flight to Choose your favorite Seat and Check
            your flight status at "
            <a
              className="font-normal text-blue-700"
              href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2Fen%2Fmy%2Fsearch-booking%2F%3Futm_source=itinerary-vj-en%26utm_medium=cpc%26utm_campaign=vjc_awo2023_mmb/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/BFg3r28Mo4moLwrpAZ6eH8C-OSo=428"
              target="_blank"
              rel="noopener noreferrer"
            >
              My booking
            </a>
            " on our website{" "}
            <a
              className="font-normal text-blue-700"
              href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2F/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/RU02LrifXkhoZBSYNS8NZI-CCbQ=428"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.vietjetair.com/
            </a>
            <br />
          </p>
          <h2 className="text-2xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            Booking Number:
          </h2>
          <table className="w-full text-sm mt-0.5 mb-2 empty-cells-show border border-white">
            <tbody>
              <tr className="tdbackground-none text-left">
                <td rowSpan="4">
                  <img
                    src="https://barcode2.intelisys.ca/pdf417.aspx?Data=I|5N3H7R|LI/MICHAEL ZHI CHENG|VJ&BarRatio=0.3&Rows=8&Columns=8"
                    alt="I|5N3H7R|LI/MICHAEL ZHI CHENG|VJ"
                  />
                </td>
                <td>
                  <span className="text-2xl text-[#ED2025] text-center">
                    5N3H7R
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-2xl font-bold p-2 text-white bg-[#ed2025]  px-2.5 py-0">
            1. Booking Information
          </h2>
          <table className="w-full text-[17px] mt-0.5 mb-2 empty-cells-show border-2 border-white">
            <tbody>
              <tr className="text-left">
                <th className="bg-[#58585a]  text-white">Booking Status</th>
                <td>Confirmed</td>
              </tr>
              <tr className="text-left">
                <th className="bg-[#58585a] text-white">Booking Date</th>
                <td>27/04/2025</td>
                <th className="bg-[#58585a] text-white">Email</th>
                <td>limichael391@gmail.com</td>
              </tr>
              <tr className="text-left">
                <th className="bg-[#58585a] text-white">Full Name</th>
                <td>MICHAEL ZHI CHENG LI</td>
              </tr>
            </tbody>
          </table>

          <div className="h-5"></div>
          <h2 className="text-xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            2. Passenger(s) Information
          </h2>
          <table className="w-full text-sm mt-0.5 mb-2 empty-cells-show border border-white">
            <tbody>
              <tr>
                <th className="bg-[#58585a] text-white">Passenger Name(s)</th>
                <th className="bg-[#58585a] text-white">Seat</th>
              </tr>
              <tr>
                <td>
                  <b>
                    <span className="text-2xl">LI, MICHAEL ZHI CHENG</span>
                  </b>
                  <br />
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>VJ195 - 29E</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <span className="text-2xl">HO, VANESSA</span>
                  </b>
                  <br />
                </td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>VJ195 - 29F</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="h-5"></div>

          <h2 className="text-xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            3. Flight Information
          </h2>
          <table
            cellSpacing="0px"
            className="w-full text-sm mt-0.5 mb-2 empty-cells-show border border-white"
          >
            <thead>
              <tr>
                <th className="bg-[#58585a] text-white">Flight Number</th>
                <th className="bg-[#58585a] text-white">Date</th>
                <th className="bg-[#58585a] text-white">Fare Type</th>
                <th className="bg-[#58585a] text-white">Depart</th>
                <th className="bg-[#58585a] text-white">Arrive</th>
              </tr>
            </thead>
            <tbody>
              {/*itinerary information goes here */}
              <div className="h-5"></div>
              <tr>
                <td>VJ195</td>
                <td>08/07/2025</td>
                <td>Eco</td>
                <td>10:15 - Ha Noi (HAN)</td>
                <td>12:25 - Ho Chi Minh (SGN)</td>
              </tr>
            </tbody>
          </table>
          <table
            cellSpacing="0px"
            className="w-full text-sm mt-0.5 mb-2 empty-cells-show border border-white"
          >
            <thead>
              <tr>
                <th className="text-left"></th>
              </tr>
            </thead>
          </table>
          <div className="h-5"></div>

          <div className="h-[30px] bg-white font-bold">
            Note: <br />
            <span className="font-normal">
              Enjoy flying with convenient
            </span>{" "}
            <span className="font-bold">Connecting flight procedures.</span>
            <span className="font-normal">
              {" "}
              <a
                href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2Fen%2Fpages%2Fto-have-a-good-flight-1599448842652%2Fconnecting-flight-information-1669109430306/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/nDcN8RDdO7hZuKL88XiRBd9OCHk=428"
                target="_blank"
                rel="noopener noreferrer"
              >
                See details here!
              </a>
            </span>
          </div>
          {/* Inserted Sky Care text */}
          <div className="bg-white text-black text-sm">
            <p className="font-bold">
              Sky Care – Free travel insurance included with your Vietjet
              ticket!
            </p>
            <p className="font-normal">
              Eligible for passengers purchasing an initial ticket through
              Vietjet’s direct sales channels: the Vietjet website & app, ticket
              offices, call center, or SkyJoy app.
            </p>
            <p className="font-normal">
              Passengers are entitled to insurance benefits in the following
              cases:
            </p>
            <ul className="font-bold list-square mt-0 mb-2 ml-5">
              <li>Flight departure delays of 90 minutes or more;</li>
              <li>
                Delays, loss, or damage to checked baggage and/or personal
                belongings;
              </li>
              <li>
                Loss of travel documents (applicable to international flights
                only).
              </li>
            </ul>
            <p className="font-normal">
              For detailed Terms & Conditions, visit{" "}
              <a
                className="text-blue-700"
                href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2Fen%2Fpages%2Fsky-care-insurance-1681122240670/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/ZvyLmoiluGBrcV2dv1RMO089oiw=428"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              or contact the insurance company:
            </p>
            <ul className="list-square mt-0 mb-2 ml-5">
              <li>Within Vietnam: 18001118</li>
              <li>Outside Vietnam: +84 766558899</li>
              <li>Email: insurancehelp@baoviet.com.vn</li>
            </ul>
            <p className="font-normal">Or Vietjet Hotline: +84 19001886</p>
          </div>
          <table
            border="0"
            cellPadding="0"
            cellSpacing="0"
            align="center"
            width="754"
            className="w-[754px] mx-auto"
          >
            <tbody>
              <tr>
                <td colSpan="3" align="center" className="text-center">
                  <br />
                  <a
                    href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.vietjetair.com%2Fen%2Fpages%2Fsky-care-insurance-1681122240670/2/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/g-lL5x8LgXudNzhxJxSQ5BNb_o0=428"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="765"
                      height="209"
                      src="https://s3.ap-northeast-1.amazonaws.com/vj.cdn/images/banners/ENG_11.Banner-Itinerary.jpg"
                      alt="Banner Itinerary"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td className="text-right">
                  <a
                    className="p-0 m-0 no-underline"
                    target="_blank"
                    href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fwww.dutyfreevietjet.com%2F/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/Lo4IfgetSbb76hOS2g2_L3PeSSA=428"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="255"
                      height="207"
                      src="https://s3.ap-northeast-1.amazonaws.com/vj.cdn/images/banners/dutyfree_240x200_en.jpg"
                      alt="Duty Free"
                    />
                  </a>
                </td>
                <td className="text-center">
                  <a
                    className="p-0 m-0 no-underline"
                    target="_blank"
                    href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fbaymienphi.hdbank.com.vn%2F/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/ImdAHZoXHze_GZNugCLh4_3tAgE=428"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="255"
                      height="207"
                      src="https://s3.ap-northeast-1.amazonaws.com/vj.cdn/images/VJ-HDBank-EN.png"
                      alt="VJ HDBank"
                    />
                  </a>
                </td>
                <td className="text-left">
                  <a
                    className="p-0 m-0 no-underline"
                    target="_blank"
                    href="https://yjgqz49d.r.us-west-2.awstrack.me/L0/https:%2F%2Fhdbank.com.vn%2Fs%2Fve_dt/1/01010196fa4d3fdb-83e12c56-a43e-4eef-847f-3e9f5dcb222f-000000/x4EtPxadTPhDpKtSx4UY-pSeJkI=428"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="255"
                      height="207"
                      src="https://s3.ap-northeast-1.amazonaws.com/vj.cdn/images/banners/HD_EN.jpg"
                      alt="HD Bank"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="h-[30px] clear-both"></div>

          <h2 className="text-xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            Booking Offices in Vietnam
          </h2>

          <table className="MsoTableGrid w-full border border-gray-300 border-collapse">
            <tbody>
              <tr>
                <td className="w-1/2 border border-gray-300 p-2.5 align-top">
                  <p className="text-center">
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        SOURTHERN REGIONAL
                      </span>
                    </b>
                  </p>
                  <p className="text-center">
                    <span className="text-xs font-sans">&nbsp;</span>
                  </p>
                </td>
                <td className="w-1/2 border border-gray-300 border-l-0 p-2.5 align-top">
                  <p className="text-center">
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        CENTRAL REGIONAL
                      </span>
                    </b>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-1/2 border border-gray-300 border-t-0 p-2.5 align-top">
                  <p>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Working hours:{" "}
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      07:00 - 21:00 (GMT+7) Mon - Sat
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      07:00 - 19:00 (GMT+7) Sun & Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      (Not applied for booking offices at airports)
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Ho Chi Minh City{" "}
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Domestic Departure Terminal, Tan Son
                        Nhat International Airport, Tan Binh Dist
                      </span>
                    </b>
                    <span className="text-xs font-sans text-black">.</span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +848.3547 4174 * Fax.: +848.38489343
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 04:00 - 22:30 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        2.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at International Departure Terminal, 2
                        <sup>nd</sup> floor, Tan Son Nhat International Airport
                      </span>
                    </b>
                    <span className="text-xs font-sans text-black">
                      , <b>Tan Binh Dist.</b>
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:30 - 12:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        3.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 8Bis Cong Truong Quoc Te St. (Turtle
                        lake Circle), W.6, Dist.3
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel.: +848.38239860 * Fax: +848.38239859
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        4.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 2C Truong Son St., Ward 2, Tan Binh
                        Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +848.38454640 * Fax: +848.38454643
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        5.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 284 Nam Ky Khoi Nghia St., Ward 8,
                        Dist. 3
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: (08) 62.667.667 Fax: (08) 62.667.667
                    </span>
                  </p>
                  <p className="ml-4">
                    <b>
                      <span className="text-xs font-sans text-black">
                        &nbsp;
                      </span>
                    </b>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Phu Quoc Island, Kien Giang Province
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Domestic Departure Terminal, Phu Quoc
                        International Airport
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8477.3991166
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:30 - 16:30 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans">&nbsp;</span>
                  </p>
                </td>
                <td className="w-1/2 border border-gray-300 border-t-0 border-l-0 p-2.5 align-top">
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Da Nang City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Departure Terminal, Da Nang
                        International Airport, Hai Chau Distict.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 04:35 - 22:15 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        2.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 157 - 159 Ham Nghi Street, Vinh Trung
                        Ward, Thanh Khe District.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +84.236.3692665 Fax: +84.236.3692663
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 07:00 – 20:00 (GMT+7) From Monday to Sunday
                      07:30 - 12:00 & 13:30 – 17:00 (GMT+7) Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        3.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking Office - Dien Bien Phu, Da Nang
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Address : 218 Dien Bien Phu Street, Chinh Gian Ward, Thanh
                      Khe District,Da Nang City
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel : 19001774 (Ext: 2) - (0236) 3.868.118 - 0938.116.115
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 07:30 - 20:00 (GMT+7) From Monday to
                      Saturday 08:00 – 17:00 (GMT+7) Sunday and Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Quang Ngai City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking Office - Quang Ngai City
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Address: 01 Pham Van Dong Street, Nguyen Nghiem Ward,
                      Quang Ngai City
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: (+84255) 3826 826/ Fax: (+84255) 3718206
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 07:30 - 20:00 (GMT+7) From Monday to
                      Saturday 08:00 – 17:00 (GMT+7) Sunday and Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Hue City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Departure Terminal, Phu Bai Airport
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 07:00 - 10:00 & 16:0 - 19:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Nha Trang City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking Office - Nha Trang City
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Address: 16 Pasteur Street, Huong Xuan Ward, Nha Trang,
                      Khanh Hoa
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +84.258.626.1616 Hotline: +84.706.00.1886
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 08:00 – 17:00 (GMT+7) From Monday to
                      Saturday 08:00 – 12:00 (GMT+7) Sunday and Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="h-5"></div>
          <h2 className="text-xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            Booking Offices in North Vietnam
          </h2>
          <table className="MsoTableGrid w-full border border-gray-300 border-collapse">
            <tbody>
              <tr>
                <td className="w-1/2 border border-gray-300 p-2.5 align-top">
                  <p className="text-center">
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        NORTHERN REGIONAL
                      </span>
                    </b>
                  </p>
                  <p className="text-center">
                    <span className="text-xs font-sans">&nbsp;</span>
                  </p>
                </td>
                <td className="w-1/2 border border-gray-300 border-l-0 p-2.5 align-top">
                  <p className="text-center">
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="text-center">
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="w-1/2 border border-gray-300 border-t-0 p-2.5 align-top">
                  <p>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Working hours:{" "}
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      07:00 - 21:00 (GMT+7) Mon - Sat
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      07:00 - 19:00 (GMT+7) Sun & Holidays
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      (Not applied for booking offices at airports)
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Ha Noi City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Domestic Departure Terminal, Noi Bai
                        International Airport, Phu Minh Commune, Soc Son Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +844.3886 5236 * Fax: +844.38865239
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 04:30 - 22:30 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        2.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at International Departure Terminal, Noi
                        Bai International Airport, Phu Minh Commune, Soc Son
                        Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:30 - 12:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        3.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 32 Tran Hung Dao St., Hoan Kiem Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +844.3943 3185 * Fax: +844.3943 3184
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        4.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at 30B Ba Trieu St., Hoan Kiem Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +844.3936 4867 * Fax: +844.3936 4868
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Hai Phong City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Cat Bi International Airport, Hai An
                        Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8431.3976699
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:00 - 21:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Thanh Hoa Province
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Tho Xuan Airport, Tho Xuan Dist.
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8437.3832888
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:00 - 18:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                </td>
                <td className="w-1/2 border border-gray-300 border-t-0 border-l-0 p-2.5 align-top">
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Vinh City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Vinh Airport, Nghi Lien Commune, Vinh
                        City
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8438.3851500
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 06:00 - 21:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Dong Hoi City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Dong Hoi Airport, Loc Ninh Commune,
                        Dong Hoi City
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8452.3811777
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 08:00 - 17:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                  <p>
                    <b>
                      <span className="text-xs font-wingdings text-red-700">
                        Q
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-red-700">
                        Pleiku City
                      </span>
                    </b>
                  </p>
                  <p className="ml-1 text-left indent-[-0.25in]">
                    <b>
                      <span className="text-xs font-sans text-black">
                        1.
                        <span className="font-['Times New Roman'] text-[7pt]">
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </span>
                    </b>
                    <b>
                      <span className="text-xs font-sans text-black">
                        Booking office at Pleiku Airport, Thong Nhat Ward,
                        Pleiku City
                      </span>
                    </b>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Tel: +8459.3822000
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">
                      Working hours: 07:00 - 19:00 (GMT+7) Daily
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-sans text-black">&nbsp;</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="h-5"></div>
          <h2 className="text-xl text-white bg-[#ed2025] font-bold px-2.5 py-0">
            4. General Conditions of Carriage
          </h2>
          <div className="bg-white text-black text-sm">
            <p>
              Please read the Conditions of carriage for Passengers and Baggage,
              which are publicly published on Our Website and Mobile
              application, and in Our booking offices as follows:
            </p>
            <h3>Article 1. Definitions</h3>
            <ul>
              <li>
                <p>
                  <span className="font-bold">
                    “We”, “Our”, “Ourselves”, “Us”
                  </span>{" "}
                  mean Vietjet Aviation Joint Stock Company.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">"You", "Your", "Yourself"</span>{" "}
                  mean any person, except members of the crew, carried or to be
                  carried in an aircraft pursuant to a Ticket.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“AGREED STOPPING PLACES”</span>{" "}
                  mean those places, except the place of departure and the place
                  of destination, set out in the Ticket or shown in Our
                  timetables as scheduled stopping places on Your route.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“AIRLINE DESIGNATOR CODE”</span>{" "}
                  means the two-character or three-letter code which identifies
                  a particular airline in the Ticket.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“AUTHORISED AGENT”</span> means a
                  passenger sales agent who has been appointed by Us to
                  represent Us in the sale of air transportation on Our
                  services.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“BAGGAGE”</span> means Your
                  personal property accompanying You in connection with Your
                  trip. Unless otherwise specified, it consists of both Your
                  Checked Baggage and Unchecked Baggage.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“BAGGAGE CHECK”</span> means those
                  portions of the Ticket which relate to the carriage of Your
                  Checked Baggage.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    “BAGGAGE IDENTIFICATION TAG”
                  </span>{" "}
                  means a document issued solely for identification of Checked
                  Baggage.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CARRIAGE”</span> is equivalent to
                  “transportation”.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CARRIER”</span> means an air
                  carrier.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CHECKED BAGGAGE”</span> means
                  Baggage of which We take custody and for which We have issued
                  a Baggage Identification Tag.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CONDITIONS OF CARRIAGE”</span>{" "}
                  mean these Conditions of Carriage or Our regulations as
                  applicable.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CONTRACT OF CARRIAGE”</span>{" "}
                  means that part of the Ticket which identifies carriage being
                  carried out.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CONNECTING FLIGHT”</span> means a
                  subsequent flight that connects from a preceding flight for
                  the purpose of onward travel on the same Ticket.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“CONVENTION”</span> means any of
                  the following international conventions:
                </p>
                <ul>
                  <li>
                    The Convention for the Unification of Certain Rules Relating
                    to International Carriage by Air, signed at Warsaw, 12
                    October 1929 (hereinafter referred to as the Warsaw
                    Convention).
                  </li>
                  <li>
                    The Warsaw Convention as amended at The Hague on 28
                    September 1955.
                  </li>
                  <li>
                    The Warsaw Convention as amended by Additional Protocol No.
                    1 of Montreal (1975).
                  </li>
                  <li>
                    The Warsaw Convention as amended at The Hague and by
                    Additional Protocol No. 2 of Montreal (1975).
                  </li>
                  <li>
                    The Warsaw Convention as amended at The Hague and by
                    Additional Protocol No. 4 of Montreal (1975).
                  </li>
                  <li>The Guadalajara Supplementary Convention (1961).</li>
                  <li>
                    The Montreal Convention (1999) (hereinafter referred to as
                    the Montreal Convention).
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <span className="font-bold">“DAMAGE”</span> includes death,
                  wounding, or any other bodily injury to a Passenger, loss,
                  partial loss or other damage, occurring in connection with
                  carriage or other services incidental thereto performed by Us.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“DAYS”</span> mean calendar days,
                  including all seven days of the week; provided that, for
                  purposes of notification, the day upon which notice is
                  dispatched shall not be counted; and provided further that for
                  purposes of determining the validity of a Ticket, the day upon
                  which the Ticket is issued, or the flight commenced, shall not
                  be counted.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“ELECTRONIC COUPON”</span> means
                  an electronic flight Coupon, or other value item held in Our
                  database.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“ELECTRONIC TICKET”</span> means
                  the Itinerary/Receipt issued by Us or on Our behalf, the
                  Electronic Coupon and, if applicable, a boarding document.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“FLIGHT COUPON”</span> means that
                  portion of the Ticket that bears the notation “good for
                  passage”, or in the case of an Electronic Ticket, the
                  Electronic Coupon, and indicates the particular places between
                  which You are entitled to be carried.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“ITINERARY/RECEIPT”</span> means a
                  document or documents We issue to Passengers travelling on
                  Electronic Tickets that contains the Passenger’s name, flight
                  information and notices.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“PASSENGER”</span> means any
                  person, except members of the crew, carried or to be carried
                  in an aircraft pursuant to a Ticket. (See also “You”, “Your”,
                  “Yourself”).
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“ROUTE”</span> means the flight
                  route shown in the Ticket.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    “SPECIAL DRAWING RIGHTS (SDR)”
                  </span>{" "}
                  mean the composite unit of currency that is the official unit
                  of exchange of the International Monetary Fund.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“TICKET”</span> means the
                  Itinerary/Receipt and the Electronic Coupon and the boarding
                  document issued by Us or on Our behalf.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">“UNCHECKED BAGGAGE”</span> means
                  any of Your Baggage other than Checked Baggage.
                </p>
              </li>
            </ul>

            <h3>Article 2. Applicability of Conditions of Carriage</h3>
            <p>
              <span className="font-bold">2.1. GENERAL</span>
            </p>
            <p>
              These Conditions of Carriage apply to the carriage by air of
              Passengers and Baggage performed by Us or under Our Airline
              Designator Code and in every case, Our liability is limited to the
              extent established by the Convention.
            </p>
            <p>
              <span className="font-bold">2.2. CHARTER OPERATIONS</span>
            </p>
            <p>
              If carriage is performed pursuant to a charter agreement, these
              Conditions of Carriage apply only to the extent that they are
              incorporated by reference or otherwise in the charter agreement or
              the Ticket.
            </p>
            <p>
              <span className="font-bold">2.3. OVERRIDING LAW</span>
            </p>
            <p>
              These Conditions of Carriage are applicable unless they are
              inconsistent with applicable laws or regulations, in which event
              such laws or regulations shall prevail.
            </p>
            <p>
              <span className="font-bold">
                2.4. CONDITIONS PREVAIL OVER REGULATIONS
              </span>
            </p>
            <p>
              Except as provided in these Conditions of Carriage, in the event
              of inconsistency between these Conditions of Carriage and any
              other regulations We may have dealing with specific subjects,
              these Conditions of Carriage shall prevail.
            </p>

            <h3>Article 3. Tickets</h3>
            <p>
              <span className="font-bold">3.1. GENERAL PROVISIONS</span>
            </p>
            <p>
              We will provide carriage only to the Passenger named in the
              Ticket, and You may be required to produce appropriate
              identification.
            </p>
            <p>
              <span className="font-bold">3.2. TICKET NON-TRANSFERABILITY</span>
            </p>
            <p>
              A Ticket is non-transferable. If a Ticket is presented by someone
              other than the Passenger named in the Ticket, We are entitled to
              refuse to carry that person.
            </p>
            <p>
              <span className="font-bold">3.3. PERIOD OF VALIDITY</span>
            </p>
            <p>
              Unless otherwise provided in the Ticket, these Conditions of
              Carriage, or in applicable regulations, a Ticket is valid for one
              year from the date of issue.
            </p>
            <p>
              <span className="font-bold">
                3.4. NAME AND ADDRESS OF CARRIER
              </span>
            </p>
            <p>
              Our name may be abbreviated in the Ticket. Our address is at 302
              Kim Ma Street, Ba Dinh District, Hanoi, Vietnam.
            </p>
            <h3>Article 4. Fares and Charges</h3>
            <p>
              <span className="font-bold">4.1. FARES</span>
            </p>
            <p>
              Fares apply only for carriage from the airport at the point of
              origin to the airport at the point of destination, unless
              otherwise expressly stated. Fares do not include ground
              transportation service between airports or between airports and
              town terminals.
            </p>
            <p>
              <span className="font-bold">4.2. TAXES AND CHARGES</span>
            </p>
            <p>
              Any taxes, charges or fees imposed by government or other
              authority, or by the operator of an airport, in respect of Your
              carriage or services incidental thereto, shall be payable by You.
            </p>
            <p>
              <span className="font-bold">4.3. CURRENCY</span>
            </p>
            <p>
              Fares and charges are payable in Vietnam Dong or in such other
              currency as We may accept at the time of payment.
            </p>

            <h3>Article 5. Reservations</h3>
            <p>
              <span className="font-bold">5.1. RESERVATION REQUIREMENTS</span>
            </p>
            <p>
              We will record Your reservation in Our system. We will provide You
              with a written confirmation of Your reservation upon request.
            </p>
            <p>
              <span className="font-bold">5.2. TICKETING TIME LIMITS</span>
            </p>
            <p>
              If You do not pay for the Ticket within the specified ticketing
              time limits, We may cancel Your reservation.
            </p>
            <p>
              <span className="font-bold">5.3. PERSONAL DATA</span>
            </p>
            <p>
              You recognize that personal data has been given to Us for the
              purposes of making a reservation, obtaining ancillary services,
              facilitating immigration and entry procedures, and making
              available such data to government agencies. You authorize Us to
              retain and use such data and to transmit it to Our own offices,
              authorised agents, and relevant government agencies.
            </p>
            <p>
              <span className="font-bold">5.4. SEATING</span>
            </p>
            <p>
              We will endeavor to honor advance seating requests, but We do not
              guarantee any particular seat. We reserve the right to reassign
              seats at any time, even after boarding of the aircraft, for
              operational, safety or security reasons.
            </p>
            <h3>Article 6. Check-in and Boarding</h3>
            <p>
              <span className="font-bold">6.1. CHECK-IN DEADLINES</span>
            </p>
            <p>
              Check-in Deadlines may vary, and You must inform Yourself of these
              Deadlines and comply with them. We reserve the right to cancel
              Your reservation if You do not comply with the Check-in Deadlines.
            </p>
            <p>
              <span className="font-bold">6.2. BOARDING</span>
            </p>
            <p>
              You must be present at the boarding gate at the time specified by
              Us. We may cancel Your reservation if You fail to arrive at the
              boarding gate on time.
            </p>
            <p>
              <span className="font-bold">6.3. FAILURE TO COMPLY</span>
            </p>
            <p>
              We will not be liable to You for any loss or expense incurred due
              to Your failure to comply with the provisions of this Article.
            </p>
            <h3>Article 7. Refusal and Limitation of Carriage</h3>
            <p>
              <span className="font-bold">7.1. RIGHT TO REFUSE CARRIAGE</span>
            </p>
            <p>
              We may refuse to carry You or Your Baggage if, in Our reasonable
              discretion, We determine that:
            </p>
            <ul>
              <li>
                Such action is necessary in order to comply with any applicable
                laws, regulations, or orders;
              </li>
              <li>
                Your carriage might endanger or affect the safety, health, or
                materially affect the comfort of other Passengers or crew;
              </li>
              <li>
                Your mental or physical state, including Your impairment from
                alcohol or drugs, presents a hazard or risk to Yourself, to
                Passengers, to crew, or to property;
              </li>
              <li>
                You have committed misconduct on a previous flight and We have
                reason to believe that such conduct may be repeated;
              </li>
              <li>You have refused to submit to a security check;</li>
              <li>You have not paid the applicable fare, taxes, or charges;</li>
              <li>You do not appear to have valid travel documents;</li>
              <li>
                The Ticket You present is illegally acquired, has been purchased
                from an entity other than Us or Our Authorised Agent, or has
                been reported as lost or stolen, or is a counterfeit;
              </li>
              <li>
                You fail to observe Our instructions with respect to safety or
                security.
              </li>
            </ul>
            <h3>Article 8. Baggage</h3>
            <p>
              <span className="font-bold">8.1. FREE BAGGAGE ALLOWANCE</span>
            </p>
            <p>
              You may carry free of charge Baggage as specified in Our
              regulations and subject to the conditions and limitations thereof.
            </p>
            <p>
              <span className="font-bold">8.2. EXCESS BAGGAGE</span>
            </p>
            <p>
              You will be required to pay a charge for carriage of Baggage in
              excess of the free Baggage allowance.
            </p>
            <p>
              <span className="font-bold">
                8.3. ITEMS UNACCEPTABLE AS BAGGAGE
              </span>
            </p>
            <p>You must not include in Your Baggage:</p>
            <ul>
              <li>
                Items which are likely to endanger the aircraft or persons or
                property on board the aircraft;
              </li>
              <li>
                Items the carriage of which is prohibited by the applicable
                laws, regulations or orders;
              </li>
              <li>
                Items which are unsuitable for carriage by reason of their
                weight, size, or character;
              </li>
              <li>Live animals, except as provided in Article 8.9.</li>
            </ul>
            <p>
              <span className="font-bold">8.4. RIGHT TO REFUSE CARRIAGE</span>
            </p>
            <p>
              We may refuse to accept Baggage for carriage if it does not comply
              with these Conditions of Carriage.
            </p>
            <p>
              <span className="font-bold">8.5. RIGHT OF SEARCH</span>
            </p>
            <p>
              For reasons of safety and security, We may require You to permit a
              search of Your person and Your Baggage.
            </p>
            <p>
              <span className="font-bold">8.6. CHECKED BAGGAGE</span>
            </p>
            <ul>
              <li>
                Upon delivery to Us of Your Baggage which You wish to check, We
                will take custody thereof and issue a Baggage Identification Tag
                for each piece of Checked Baggage.
              </li>
              <li>
                Checked Baggage must have Your name or other personal
                identification affixed to it.
              </li>
              <li>
                Checked Baggage will, whenever possible, be carried on the same
                aircraft as You, unless We decide for safety, security, or
                operational reasons to carry it on an alternative flight.
              </li>
            </ul>
            <p>
              <span className="font-bold">8.7. UNCHECKED BAGGAGE</span>
            </p>
            <ul>
              <li>
                Baggage which You carry on to the aircraft must be able to fit
                under the seat in front of You or in an enclosed storage
                compartment in the cabin.
              </li>
              <li>
                Items which do not conform to these requirements must be carried
                as Checked Baggage.
              </li>
              <li>
                The items that do not conform to these requirements are allowed
                to be purchased a seat for carriage in the cabin, subject to Our
                regulations.
              </li>
            </ul>
            <p>
              <span className="font-bold">
                8.8. COLLECTION AND DELIVERY OF CHECKED BAGGAGE
              </span>
            </p>
            <ul>
              <li>
                You must collect Your Checked Baggage as soon as it is made
                available at Your destination.
              </li>
              <li>
                We will deliver Checked Baggage to the bearer of the Baggage
                Identification Tag.
              </li>
              <li>
                If a person claiming Checked Baggage cannot produce the Baggage
                Identification Tag, We will deliver the Baggage only on
                condition that he establishes to Our satisfaction his right to
                the Baggage.
              </li>
            </ul>
            <p>
              <span className="font-bold">8.9. ANIMALS</span>
            </p>
            <p>
              We do not carry animals, except as otherwise provided in Our
              regulations.
            </p>
            <h3>Article 9. Schedules, Delays, Cancellations of Flights</h3>
            <p>
              <span className="font-bold">9.1. SCHEDULES</span>
            </p>
            <p>
              The flight times shown in timetables may change between the date
              of publication and the date You actually travel. We do not
              guarantee them and they do not form part of Your contract with Us.
            </p>
            <p>
              <span className="font-bold">
                9.2. CANCELLATIONS, DELAYS AND REROUTING
              </span>
            </p>
            <p>
              If We cancel a flight, fail to operate a flight reasonably
              according to schedule, or cease to operate a route, We shall, at
              Your option, either:
            </p>
            <ul>
              <li>
                Carry You on another of Our scheduled services on which space is
                available without additional charge; or
              </li>
              <li>
                Reroute You to the destination shown in Your Ticket by Our own
                services or by another carrier, or by other means of
                transportation; or
              </li>
              <li>Refund the fare paid.</li>
            </ul>
            <p>
              <span className="font-bold">9.3. FORCE MAJEURE</span>
            </p>
            <p>
              We shall not be liable for any damage arising out of Our
              compliance with any laws or government regulations, orders, or
              requirements, or from causes beyond Our control.
            </p>
            <h3>Article 10. Refunds</h3>
            <p>
              <span className="font-bold">10.1. GENERAL</span>
            </p>
            <p>
              We will refund a Ticket or any unused portion thereof in
              accordance with Our regulations.
            </p>
            <p>
              <span className="font-bold">10.2. ENTITLEMENT TO REFUND</span>
            </p>
            <p>
              Except as otherwise provided in this Article, We shall be entitled
              to make a refund either to the person named in the Ticket or to
              the person who paid for the Ticket, upon presentation of
              satisfactory proof of payment.
            </p>
            <h3>Article 11. Conduct Aboard Aircraft</h3>
            <p>
              <span className="font-bold">11.1. GENERAL</span>
            </p>
            <p>
              If, in Our reasonable opinion, You conduct Yourself aboard the
              aircraft so as to endanger the aircraft or any person or property
              on board, or obstruct the crew in the performance of their duties,
              or fail to comply with any instructions of the crew, We may take
              such measures as We deem reasonably necessary to prevent
              continuance of such conduct, including restraint.
            </p>
            <p>
              <span className="font-bold">11.2. DIVERSION COSTS</span>
            </p>
            <p>
              If as a result of Your conduct We decide to divert the aircraft
              for the purpose of offloading You, You shall be liable for all
              costs incurred as a result of such diversion.
            </p>
            <p>
              <span className="font-bold">11.3. ELECTRONIC DEVICES</span>
            </p>
            <p>
              For safety reasons, We may prohibit or restrict operation aboard
              the aircraft of electronic devices, including, but not limited to,
              cellular telephones, laptop computers, portable recorders,
              portable radios, CD players, electronic games or transmitting
              devices.
            </p>
            <h3>Article 12. Arrangements for Additional Services</h3>
            <p>
              If We make arrangements for You with any third party to provide
              any services other than carriage by air, or if We issue a Ticket
              or voucher relating to transportation or services provided by a
              third party, in doing so We act only as Your agent. The terms and
              conditions of the third party service provider will apply.
            </p>
            <h3>
              Article 13. Travel Documents, Customs and Security Inspection
            </h3>
            <p>
              <span className="font-bold">13.1. TRAVEL DOCUMENTS</span>
            </p>
            <p>
              You are responsible for obtaining all required travel documents
              and visas and for complying with all laws, regulations, orders,
              demands and travel requirements of countries to be flown from,
              into or through which You transit.
            </p>
            <p>
              <span className="font-bold">13.2. REFUSAL OF ENTRY</span>
            </p>
            <p>
              You agree to pay the applicable fare and/or penalties whenever We
              are required to pay or deposit any fine or penalty or to incur any
              expenditure by reason of Your failure to comply with the laws,
              regulations, orders, demands or other travel requirements of any
              country flown from, into or through.
            </p>
            <p>
              <span className="font-bold">13.3. CUSTOMS INSPECTION</span>
            </p>
            <p>
              If required, You shall attend the inspection of Your Baggage, by
              customs or other government officials.
            </p>
            <p>
              <span className="font-bold">13.4. SECURITY INSPECTION</span>
            </p>
            <p>
              You shall permit any security checks of Your person and Your
              Baggage by Us, Our authorised agents, or by government officials.
            </p>
            <h3>Article 14. Liability for Damage</h3>
            <p>
              <span className="font-bold">14.1. GENERAL</span>
            </p>
            <p>
              Our liability for Damage is limited to the extent established by
              the Convention.
            </p>
            <p>
              <span className="font-bold">14.2. NOTICE OF CLAIMS</span>
            </p>
            <p>
              Receipt by the bearer of the Baggage Identification Tag of Checked
              Baggage without complaint is prima facie evidence that the Checked
              Baggage has been delivered in good condition.
            </p>
            <p>
              <span className="font-bold">14.3. STATUTE OF LIMITATIONS</span>
            </p>
            <p>
              Any right to Damages shall be extinguished if an action is not
              brought within two years of the date of arrival at the
              destination, or from the date on which the aircraft ought to have
              arrived.
            </p>
            <h3>Article 15. Validity and Amendment</h3>
            <p>
              <span className="font-bold">15.1. </span>None of Our staff or
              authorized agents may amend, alter or remove any provision(s) in
              the Conditions of carriage or in Our regulations.
            </p>
            <p>
              <span className="font-bold">15.2. </span>The provisions in these
              Conditions of carriage are subject to change from time to time in
              accordance with our business regulations or changes from competent
              authorities or regulations in the circular, decree of the
              Authorities. Such changes will be published publicly on Our
              Website and Mobile application.
            </p>
            <h3>Article 16 . Other conditions</h3>
            <p>
              The carriage of Passengers and Baggage is also provided in
              accordance with our other regulations which are published publicly
              on Our Website, Mobile application, and other relevant regulations
              of the law.
            </p>
          </div>
        </div>
        {/*left*/}
        <div className="c2"></div>
      </div>
      {/*pad2*/}
    </div>
  );
};

export default Home;
