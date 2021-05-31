import React from "react";
import { useState } from "react";

export default function MySpace() {
  const [story, setstory] = useState({ form: false });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    // TODO:
    // - dispatch an action that sends the new pizza to the store
    // dispatch(
    //   addPizza({
    //     id: Math.random(),
    //     name: name,
    //     description: description,
    //     bought: 0,
    //     image: "",
    //   })
    // );
    // - clear the input fields

    setDescription("");
    setName("");
    setimageUrl("");
  };

  /*Function to preview the image*/

  const imagePreview = () => {
    setimageUrl({ ...imageUrl, preview: true });
  };
  return (
    <div>
      <button onClick={() => setstory({ form: true })}>
        Post a cool story bro
      </button>
      <div>
        {story.form ? (
          <form onSubmit={submit}>
            {" "}
            <p>
              <label>
                Name:{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </p>
            <p>
              <label>
                Content:{" "}
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </p>
            <p>
              <label>
                Image url:{" "}
                <input
                  type="text"
                  value={imageUrl.value}
                  onChange={(e) =>
                    setimageUrl({ url: e.target.value, preview: false })
                  }
                />
              </label>
              <button type="button" onClick={imagePreview}>
                Preview Image
              </button>

              {imageUrl.preview ? <img src={imageUrl.url}></img> : ""}
            </p>
            <p>
              <button type="submit">Post!</button>
            </p>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
