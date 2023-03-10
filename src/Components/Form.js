import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import * as yup from "yup";
import compress from "compress-base64";
import { connect } from "react-redux";
import { addNew } from "../actions/actionsCreator";

import { formSchema } from "./yupRegex";

export const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [selectedFile, setSelectedFile] = useState("");
  const [postFile, setFile] = useState("");

  //read the file and decode it
  const getFile = (e) => {
    let reader = new FileReader();

    reader.onload = (event) => {
      compress(event.target.result, {
        width: 300,
        type: "image/png", // default
        max: 200, // max size
        min: 20, // min size
        quality: 0.7,
      }).then((result) => {
        console.log(result);
        setFile(result);
      });
    };
    reader.readAsDataURL(e[0]);
  };

  // ===========onSubmitHandler============

  const onSubmitHandler = (data) => {
    data.pictureAddress = postFile ?? "";
    data.NamePicture = selectedFile?.name;
    props.addNew(data);
    // getPostInfo()

    console.log(data, "data============");
    props.closeModal();

    reset();
  };

  return (
    <section className="body">
      <div className="container">
        <div className="title">Add Contact</div>
        <div className="content">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="Enter your name"
                />
                <p className="red_color">{errors?.firstName?.message}</p>
              </div>

              <div className="input-box">
                <span className="details">lastName</span>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Enter your lastName"
                />
                <p className="red_color">{errors?.lastName?.message}</p>
              </div>

              <div className="input-box wide">
                <span className="details">phoneNumber</span>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  placeholder="phone Number"
                />
                <p className="red_color">{errors?.phoneNumber?.message}</p>
              </div>

              <div className="input-box wide">
                <span className="details">address</span>
                <input
                  type="text"
                  {...register("address")}
                  placeholder="Enter  Address"
                />
                <p className="red_color">{errors?.address?.message}</p>
              </div>

              <div>
                <label className="mr-2" for="avatar">
                  Choose File:
                </label>

                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    setSelectedFile(e.target.files[0]);
                    getFile(e.target.files);
                  }}
                />

                <p className="mb-10">
                  this is some pkaceholder wrap text placeholder lorem ipsum
                  placeholder lorem ipsum placeholder lorem ipsum
                </p>

                <hr className="color-gray" />
              </div>

              <div className="input-box">
                <span className="details">facebook</span>
                <input
                  type="text"
                  {...register("facebook")}
                  placeholder="facebook"
                />
                <p className="red_color">{errors?.facebook?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">twitter</span>
                <input
                  type="text"
                  {...register("twitter")}
                  placeholder=" twitter"
                />
                <p className="red_color">{errors?.twitter?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">linkdin</span>
                <input
                  type="text"
                  {...register("linkdin")}
                  placeholder="linkdin"
                />
                <p className="red_color">{errors?.linkdin?.message}</p>
              </div>
              <div className="input-box">
                <span className="details">instagram</span>
                <input
                  type="text"
                  {...register("instagram")}
                  placeholder=" instagram"
                />

                <p className="red_color">{errors?.instagram?.message}</p>
              </div>
            </div>

            <div className="button">
              <button type="submit" className="bg-blue">
                {" "}
                ADD
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

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (user) => dispatch(addNew(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
