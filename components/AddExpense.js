import { useState } from "react";
import { postDataToServer } from "../service/service";

function AddExpense(props){

 const [payeeName,setPayeeName] =useState("")
 const [price,setPrice] =useState(0)
 const [product,setProduct] =useState("")
 const [setDate,setSetDate] =useState("05-04-2022")

 const handlePayeeChange = (e) =>{
   setPayeeName(e.target.value)
 }
 const handlePriceChange = (e) =>{
   setPrice(parseInt(e.target.value))
 }
 const handleProductChange = (e) =>{
   setProduct(e.target.value)
 }
 const handleDateChange = (e) =>{
   setSetDate(e.target.value)
 }

   const handleSubmit = async (event) => {
   event.preventDefault();
   const response = {
    payeeName,
    product,
    price,
    setDate
   }
   const data = await postDataToServer(response);
   props.onTrue()
   }
 return(
   <section>
      <header>
         <h1>Add New Item</h1>
         <p>Read the below instructions before proceeding
            <br></br>
            Make sure you fill all the fields where * is provided
         </p>
         
      </header>
      <form onSubmit={handleSubmit}>
         <article>
            <p>Name :</p>
            <select required  
            value={payeeName} 
            onChange={handlePayeeChange}>
            <option value="" defaultChecked>Choose</option>
            <option value="Rahul" >Rahul</option>
            <option value="Ramesh">Ramesh</option>
            </select>
           
         </article>

         <article>
            <p> Product Purchased :</p>
          <input type="text" required
          value={product} onChange={handleProductChange}></input>
         </article>

         <article>
            <p> Price :</p>
          <input type="number" required
          value={price} onChange={handlePriceChange}></input>
         </article>

         <article>
           <p>Date:</p>
           <input type="date"
           value={setDate} onChange={handleDateChange}></input>
         </article>

         <button onClick={props.onClose}>Close</button>
         <button type="submit">Submit</button>
      </form>
   </section>
 )
}
export default AddExpense;