import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { FaArrowRight, FaLongArrowAltRight, FaPlus } from "react-icons/fa";
import Graph from "../assets.png";

import { deleteAContact, showAllContacts } from "../actions/actionsCreator";
import User from "./User";
import Dexie from "dexie";
import Form from "../Components/Form";
import EditForm from "./EditForm";
import ConfirmPopup from "../Components/ConfirmPopup";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "3",
    // backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(209, 213, 219, 0.3)",
    // height: '70vh',
  },
};

Modal.setAppElement("#root");

const Users = (props) => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalAddIsOpen, setModalAddIsOpen] = React.useState(false);

  const [idDelet, setIdDelete] = useState(0);

  function openConFirmModal(id) {
    setModalConfirmOpen(true);
    setIdDelete(id);
  }

  function closeModal() {
    setModalConfirmOpen(false);
  }

  const deleteOK = () => {
    console.log(idDelet);
    props.deleteUsers(idDelet);
    setModalConfirmOpen(false);
  };
  // =====================

  useEffect(() => {
    props.showAllContacts();
  }, []);

  const { contacts } = props;

  const [idState, setStateId] = useState({
    name: "",
    price: "",
    gender: "",
    id: 0,
  });

  const openUpdateModal = (id) => {
    setStateId(id);
    setIsOpen(true);
  };

  const openAddUserModal = () => {
    setModalAddIsOpen(true);
  };

  // =========datbase==========

  const db = new Dexie("ReactDexie");
  //create the database store
  db.version(1).stores({
    posts: "title, file",
  });
  db.open().catch((err) => {
    console.log(err.stack || err);
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //get all posts from the database
    const getPosts = async () => {
      let allPosts = await db.posts.toArray();
      setPosts(allPosts);
    };
    getPosts();
  }, []);

  const results1 = props?.contacts?.filter((props) =>
    posts.some((a) => a.title === props.picture)
  );

  const deleteUser = async (post) => {
    db.posts.delete(post.NamePicture);

    props.deleteUsers(post);
    let allPosts = await db.posts.toArray();

    //set the posts
    setPosts(allPosts);
  };

  return (
    <div class="wrapper ">
      {/* ==========modal============ */}

      <div class="cards_wrap">
        {props?.contacts?.map((post) => (
          <>
            <User
              post={post}
              delete={() => openConFirmModal(post.id)}
              update={() => openUpdateModal(post)}
            />

            <Modal
              isOpen={modalConfirmOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ConfirmPopup
                closeModal={closeModal}
                deleteOK={() => deleteOK()}
              />
            </Modal>
          </>
        ))}

        <div class="card_item revealer">
          <div class="card_inner">
            <div
              className="center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className=" child_center">
                Add New Contact
                <br />
                <button
                  onClick={openAddUserModal}
                  type="button"
                  style={{ marginTop: "10px" }}
                >
                  <FaPlus fill="#4094f4" size={"20px"} />
                </button>
              </div>
            </div>

            {/* ==================modal for Edit============= */}
            <Modal
              isOpen={modalIsOpen}
              // onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              shouldCloseOnOverlayClick={false}
            >
              <EditForm
                post={idState}
                closeModal={() => {
                  setIsOpen(false);
                }}
              />
            </Modal>

            {/* ===========Modal for ADD============== */}

            <Modal
              isOpen={modalAddIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
              shouldCloseOnOverlayClick={false}
            >
              <Form
                closeModal={() => {
                  setModalAddIsOpen(false);
                }}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUsers: (id) => dispatch(deleteAContact(id)),
    showAllContacts: () => dispatch(showAllContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
