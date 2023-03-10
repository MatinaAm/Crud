import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../Components/Form.css";
import * as yup from "yup";
import { connect } from "react-redux";
import { showContact, editUser } from "../actions/actionsCreator";

import { formSchema } from "../Components/yupRegex";

const EditForm = (props) => {
  const { post } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const {id}=props

  useEffect(() => {
    props.showForm(post.id);
  }, [post.id]);

  // ================

  const onSubmitHandler = (data) => {
    data.id = post.id;

    props.editForm(data);

    props.closeModal();

    reset();
  };

  return (
    <section className="body">
      <div className="container">
        <div className="title">Edit Contact</div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>

                <input
                  defaultValue={post?.firstName}
                  {...register("firstName")}
                  placeholder="Enter your name"
                />

                <p className="red_color">{errors?.firstName?.message}</p>
              </div>

              <div className="input-box">
                <span className="details">lastName</span>
                <input
                  type="text"
                  defaultValue={post?.lastName}
                  {...register("lastName")}
                  placeholder="Enter your lastName"
                />
                <p className="red_color">{errors?.lastName?.message}</p>
              </div>

              <div className="input-box wide">
                <span className="details">phoneNumber</span>
                <input
                  type="text"
                  defaultValue={post?.phoneNumber}
                  {...register("phoneNumber")}
                  placeholder="phone Number"
                />
                <p className="red_color">{errors?.phoneNumber?.message}</p>
              </div>

              <div className="input-box wide">
                <span className="details">address</span>
                <input
                  type="text"
                  defaultValue={post?.address}
                  {...register("address")}
                  placeholder="Enter  Address"
                />
                <p className="red_color">{errors?.address?.message}</p>
              </div>

              <div className="input-box">
                <span className="details">facebook</span>
                <input
                  type="text"
                  defaultValue={post?.facebook}
                  {...register("facebook")}
                  placeholder="facebook"
                />
                <p className="red_color">{errors?.facebook?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">twitter</span>
                <input
                  type="text"
                  defaultValue={post?.twitter}
                  {...register("twitter")}
                  placeholder=" twitter"
                />
                <p className="red_color">{errors?.twitter?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">linkdin</span>
                <input
                  type="text"
                  defaultValue={post?.linkdin}
                  {...register("linkdin")}
                  placeholder="linkdin"
                />
                <p className="red_color">{errors?.linkdin?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">instagram</span>
                <input
                  type="text"
                  defaultValue={post?.instagram}
                  {...register("instagram")}
                  placeholder=" instagram"
                />

                <p className="red_color">{errors?.instagram?.message}</p>
              </div>
            </div>

            <div className="button">
              <button type="submit" className="bg-blue">
                {" "}
                Edit
              </button>
              <button
                type="button"
                className="bg-gray"
                onClick={props.closeModal}
              >
                {" "}
                CLOSE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contacts.contact,
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: (id) => dispatch(showContact(id)),
    editForm: (user) => dispatch(editUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
