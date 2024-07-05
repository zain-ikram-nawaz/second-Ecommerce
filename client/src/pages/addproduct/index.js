import React, { useState } from "react";

export default function AddProducts() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [imagefile, setImagefile] = useState();
  // const [newfile,setNewFile]= useState()
  const immagefile=(e)=>{
      setImagefile(e.target.files)
   

  }
  const HandleForm = async (e) => {
    e.preventDefault();
    
    const formdata = new FormData()
    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("imagefile", imagefile);
    for(let index = 0; index < imagefile.length; index++){
      // setNewFile(imagefile[index])
      formdata.append("imagefile",imagefile[index])
         }
    console.log(imagefile);
    try {
      const res = await fetch("http://localhost:8000/addproduct", {
        method: "POST",
    
        body: formdata,
      });
      if (res.ok) {
       const data = await res.json()
       alert(data.message)
      } else {
        const errdata = await res.json()
        alert(errdata.error)
        console.log("something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        action="/addproduct"
        onSubmit={HandleForm}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <select
          name=""
          id=""
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Undefine">select category</option>
          {/* <option value="Beds">Beds</option> */}
          <option value="Bowls And Feeders">Bowls And Feeders</option>
          <option value="Pet Grooming">Pet Grooming</option>
          <option value="Pet care">Pet care</option>
          <option value="Toys">Toys</option>
        </select>
        <input
        required
        multiple
          type="file"
          name="imagefile"
         onChange={immagefile}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
