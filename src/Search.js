import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  render() {
    return (
      <div
        className="Search"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 40,
          marginLeft: "auto",
          marginRight: "auto",
          flexDirection: "column"
        }}
      >
        <div>
          <h1>License and Permit Information Search</h1>
          <table border="1" width="100%">
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <b>
                            To find out what licenses or permits you may be
                            required to hold and how to apply:
                          </b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <span>Select an Activity</span>
                        </td>
                        <td>
                          <select
                            name="ctl00$PageContent$CategoryList"
                            onChange={e => console.log(e)}
                            alt="List of Activities"
                          >
                            <option defaultValue="selected" value="0">
                              --None Selected--
                            </option>
                            <option value="9">
                              Access &amp; Use Public Lands (FWC areas)
                            </option>
                            <option value="3">Boat | Navigate</option>
                            <option value="4">Build | Develop | Improve</option>
                            <option value="8">
                              Display | Raise | Own | Keep
                            </option>
                            <option value="6">
                              Hunt | Fish | Trap | Collect | Remove
                            </option>
                            <option value="11">
                              Import/Export | Transport | Release to Wild
                            </option>
                            <option value="33">
                              Monitor | Survey | Count | Sample
                            </option>
                            <option value="34">
                              Purchase | Sell | Trade | Barter
                            </option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span id="ctl00_PageContent_Label6">
                            Select a Sub-activity
                          </span>
                        </td>
                        <td>
                          <select
                            name="ctl00$PageContent$ActivityList"
                            onChange={e => console.log(e)}
                            id="ctl00_PageContent_ActivityList"
                            alt="List of Sub-Activities"
                          >
                            <option defaultValue="selected" value="0">
                              --Select an Activity First--
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span
                            id="ctl00_PageContent_Label4"
                            alt="List of Purposes"
                          >
                            Select a Purpose
                          </span>
                        </td>
                        <td>
                          <select
                            name="ctl00$PageContent$GroupList"
                            onChange={e => console.log(e)}
                            id="ctl00_PageContent_GroupList"
                          >
                            <option defaultValue="selected" value="0">
                              --None Selected--
                            </option>
                            <option value="3">
                              Commercial - Business, Sales, Exhibition, Trade
                            </option>
                            <option value="8">
                              Public - Government, Education, Science, etc.
                            </option>
                            <option value="1">Recreational or Personal</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span id="ctl00_PageContent_Label5">
                            Select a Species
                          </span>
                        </td>
                        <td>
                          <select
                            name="ctl00$PageContent$SpeciesList"
                            onChange={e => console.log(e)}
                            id="ctl00_PageContent_SpeciesList"
                            alt="List of Species"
                          >
                            <option defaultValue="selected" value="0">
                              --None Selected--
                            </option>
                            <option value="1">
                              Amphibians (frogs, toads, salamanders, etc.)
                            </option>
                            <option value="3">Birds and Waterfowl</option>
                            <option value="4">Clams</option>
                            <option value="5">Corals</option>
                            <option value="6">
                              Crustaceans (crabs, lobsters, crayfish, shrimp,
                              etc.)
                            </option>
                            <option value="7">Fishes</option>
                            <option value="8">Insects</option>
                            <option value="9">
                              Mammals (deer, wildhogs, raccoons, manatee, etc.)
                            </option>
                            <option value="10">
                              Plants (seagrasses, aquatic vegetation, etc.)
                            </option>
                            <option value="11">
                              Reptiles (alligators, snakes, lizards, turtles,
                              etc.)
                            </option>
                            <option value="12">Snails</option>
                          </select>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span id="ctl00_PageContent_LabelrbtnNoPreference3">
                            Applicant Residency
                          </span>
                        </td>
                        <td>
                          <span alt="Resident">
                            <input
                              id="ctl00_PageContent_rbtnResident"
                              type="radio"
                              name="ctl00$PageContent$residentGroup"
                              value="rbtnResident"
                              onClick={() => console.log("here")}
                            />
                            <label htmlFor="ctl00_PageContent_rbtnResident">
                              Resident
                            </label>
                          </span>
                          <span alt="Non-Resident">
                            <input
                              id="ctl00_PageContent_rbtnNonResident"
                              type="radio"
                              name="ctl00$PageContent$residentGroup"
                              value="rbtnNonResident"
                              onClick={() => console.log("here")}
                            />
                            <label htmlFor="ctl00_PageContent_rbtnNonResident">
                              Non-Resident
                            </label>
                          </span>
                          <span alt="No Preference for Resident / Non-Resident choice">
                            <input
                              id="ctl00_PageContent_rbtnNoPreference"
                              type="radio"
                              name="ctl00$PageContent$residentGroup"
                              value="rbtnNoPreference"
                              onChange={() => console.log("here")}
                              checked="checked"
                            />
                            <label htmlFor="ctl00_PageContent_rbtnNoPreference">
                              No Preference
                            </label>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="2" align="right">
                          <input
                            type="submit"
                            name="ctl00$PageContent$btnSubmitLists"
                            value="Search"
                            id="ctl00_PageContent_btnSubmitLists"
                            alt="Find Licenses"
                          />

                          <input
                            type="submit"
                            name="ctl00$PageContent$btnResetLists"
                            value="Reset"
                            id="ctl00_PageContent_btnResetLists"
                            alt="Reset Selections"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <span id="ctl00_PageContent_Label2">
                            You can view the complete list by selecting ''List
                            All Licenses''
                          </span>
                        </td>
                        <td align="right">
                          <input
                            type="submit"
                            name="ctl00$PageContent$btnAll"
                            value="List All Licenses"
                            id="ctl00_PageContent_btnAll"
                            alt="Find all licenses"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <table width="100%">
         <tbody>



   
        </tbody></table>
        
        <table width="100%">
          <tbody><tr>
            <td>
               <span id="ctl00_PageContent_Label2" style="font-weight:bold;">You can view the complete list by selecting ''List All Licenses''</span>
            </td>  
            <td align="right">
              <input type="submit" name="ctl00$PageContent$btnAll" value="List All Licenses" id="ctl00_PageContent_btnAll" alt="Find all licenses">
            </td>          
         </tr>
        </tbody></table>
        
    </td>
    </tr>
    </tbody></table>     */}
          <p>
            The absence or presence of a license or permit on this list does not
            imply that an activity is allowed without the <br />
            express permission of the property owner or managing public entity.
            <br />
            Please consult the official rules and regulations before beginning
            any activity.
          </p>
          <a
            class="hrefmenu"
            target="_flacons"
            href="http://www.leg.state.fl.us/Statutes/index.cfm?Mode=Constitution&amp;Submenu=3&amp;Tab=statutes&amp;CFID=35710809&amp;CFTOKEN=93825742"
          >
            Florida Constitution
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            class="hrefmenu"
            target="_flastat"
            href="http://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Index&amp;Title_Request=XXVIII#TitleXXVIII"
          >
            Florida Statutes
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            class="hrefmenu"
            target="_admincodes"
            href="https://www.flrules.org/Default.asp"
          >
            Florida Administrative Code
          </a>
        </div>
        <div>
          <table
            cellspacing="0"
            rules="all"
            border="1"
            id="ctl00_PageContent_gvTier"
          >
            <tbody>
              <tr>
                <th scope="col">
                  Click on the name to view the license details
                </th>
              </tr>

              <tr>
                <td>
                  <table style={{ width: "95%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <b>
                            <a
                              name="Boating/Waterways"
                              href="http://www.google.com"
                            >
                              Boating/Waterways
                            </a>
                          </b>
                        </td>
                        <td align="right">
                          <a href="http://localhost:56079/LicensePermits.aspx#top">
                            Top of page
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <table
                      cellspacing="0"
                      border="0"
                      style={{
                        width: "80%",
                        paddingLeft: 20,
                        paddingBottom: 5
                      }}
                    >
                      <tbody>
                        <tr>
                          <th scope="col">&nbsp;</th>
                          <th scope="col">&nbsp;</th>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl02_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Boating Safety Education ID Card</u>
                              </b>
                            </a>
                            <br />
                            This certifies completion of the educational
                            requirements for anyone born on or after January 1,
                            1988 who operates a vessel powered by 10 horsepower
                            or more must pass an approved boater safety course
                            and have in his/her possession photographic
                            identification and a boating safety education
                            identification card issued by the FWC or temporary
                            certificate issued by an authorized vendor.
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl03_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Vessel Registration and Titles</u>
                              </b>
                            </a>
                            <br />
                            Issued by the Department of Highway Safety and Motor
                            Vehicles (DHSMV) at local tag offices.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <table style={{ width: "95%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <b>
                            <a
                              name="Boating/Waterways"
                              href="http://www.google.com"
                            >
                              Boating/Waterways
                            </a>
                          </b>
                        </td>
                        <td align="right">
                          <a href="http://localhost:56079/LicensePermits.aspx#top">
                            Top of page
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <table
                      cellspacing="0"
                      border="0"
                      style={{
                        width: "80%",
                        paddingLeft: 20,
                        paddingBottom: 5
                      }}
                    >
                      <tbody>
                        <tr>
                          <th scope="col">&nbsp;</th>
                          <th scope="col">&nbsp;</th>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl02_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Boating Safety Education ID Card</u>
                              </b>
                            </a>
                            <br />
                            This certifies completion of the educational
                            requirements for anyone born on or after January 1,
                            1988 who operates a vessel powered by 10 horsepower
                            or more must pass an approved boater safety course
                            and have in his/her possession photographic
                            identification and a boating safety education
                            identification card issued by the FWC or temporary
                            certificate issued by an authorized vendor.
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl03_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Vessel Registration and Titles</u>
                              </b>
                            </a>
                            <br />
                            Issued by the Department of Highway Safety and Motor
                            Vehicles (DHSMV) at local tag offices.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <table style={{ width: "95%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <b>
                            <a
                              name="Boating/Waterways"
                              href="http://www.google.com"
                            >
                              Boating/Waterways
                            </a>
                          </b>
                        </td>
                        <td align="right">
                          <a href="http://localhost:56079/LicensePermits.aspx#top">
                            Top of page
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div>
                    <table
                      cellspacing="0"
                      border="0"
                      style={{
                        width: "80%",
                        paddingLeft: 20,
                        paddingBottom: 5
                      }}
                    >
                      <tbody>
                        <tr>
                          <th scope="col">&nbsp;</th>
                          <th scope="col">&nbsp;</th>
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl02_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Boating Safety Education ID Card</u>
                              </b>
                            </a>
                            <br />
                            This certifies completion of the educational
                            requirements for anyone born on or after January 1,
                            1988 who operates a vessel powered by 10 horsepower
                            or more must pass an approved boater safety course
                            and have in his/her possession photographic
                            identification and a boating safety education
                            identification card issued by the FWC or temporary
                            certificate issued by an authorized vendor.
                          </td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <a
                              id="ctl00_PageContent_gvTier_ctl02_gvLicensesInTier_ctl03_LinkButton1"
                              href="http://www.google.com"
                            >
                              <b>
                                <u>Vessel Registration and Titles</u>
                              </b>
                            </a>
                            <br />
                            Issued by the Department of Highway Safety and Motor
                            Vehicles (DHSMV) at local tag offices.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Search;
