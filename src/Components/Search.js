import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { searchFunction } from "../actions/actionsCreator";

const Search = (props) => {
  // const {onSearchClick}=props

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div class="wrap_serach">
      <div class="search">
        <input
          placeholder="Search here"
          onChange={(e) => {
            setSearchTerm(e.target.value.trim());
          }}
          type="text"
          className="searchTerm"
          id="input_text"
        ></input>
        <button
          type="submit"
          className="searchButton"
          onClick={() => {
            props.searchFunction(searchTerm);
          }}
        >
          
          <FaSearch  fill="gray" size={"15px"} className="mt-2" />
          {/* <FontAwesomeIcon icon={faSearch} /> */}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchFunction: (searchTerm) => dispatch(searchFunction(searchTerm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
