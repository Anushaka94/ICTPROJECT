// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";

// const AdminPage = () => {
//   const [dresses, setDresses] = useState([]);
//   const [formData, setFormData] = useState({ dressid: "", Dressname: "", price: "", size: "", photo: "" });

//   useEffect(() => {
//     fetchDresses();
//   }, []);

//   const fetchDresses = async () => {
//     try {
//       const response = await axios.get("https://localhost:7260/api/Values");
//       setDresses(response.data);
//     } catch (error) {
//       console.error("Error fetching dresses:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://localhost:7260/api/Values/admin", formData);
//       fetchDresses();
//     } catch (error) {
//       console.error("Error adding dress:", error);
//     }
//   };

// //   const handleEdit = async (id) => {
// //     try {
// //       await axios.put(`https://localhost:7260/api/Values/updatedressdetails/${id}`, formData);
// //       fetchDresses();
// //     } catch (error) {
// //       console.error("Error updating dress:", error);
// //     }
// //   };
// const handleEdit = async (dressid) => {
//   try {
//     await axios.put(`https://localhost:7260/api/Values/updatedressdetails/${dressid}`, formData, {
//       headers: { "Content-Type": "application/json" } // Ensuring correct request format
//     });
//     fetchDresses();
//   } catch (error) {
//     console.error("Error updating dress:", error.response?.data || error.message);
//   }
// };

// const handleDelete = async (dressid) => {
//   try {
//     await axios.delete(`https://localhost:7260/api/Values/deleteDress/${dressid}`);
//     fetchDresses();
//   } catch (error) {
//     console.error("Error deleting dress:", error.response?.data || error.message);
//   }
// };

//   return (
//     <Container>
//       <h2>Admin - Manage Dresses</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField label="Dress ID" type="number" name="dressid" value={formData.dressid} onChange={handleChange} required />
//         <TextField label="Dress Name" type="text" name="Dressname" value={formData.Dressname} onChange={handleChange} required />
//         <TextField label="Price" type="number" name="price" value={formData.price} onChange={handleChange} required />
//         <TextField label="Size" type="text" name="size" value={formData.size} onChange={handleChange} required />
//         {/* <TextField label="Photo URL" type="text" name="photo" value={formData.photo} onChange={handleChange} required />
//         <img src={formData.photo} alt="Uploaded Image" /> */}

//         {/* <TextField 
//   label="Photo URL" 
//   type="text" 
//   name="photo" 
//   value={formData.photo} 
//   onChange={handleChange} 
//   required 
// />

// {formData.photo && (
//   <img src={formData.photo} alt="Uploaded Image" />
// )} */}


//         <Button type="submit" variant="contained" color="primary">Add Dress</Button>
//       </form>

//       <TableContainer component={Paper} style={{ marginTop: "20px" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Size</TableCell>
//               <TableCell>Photo</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dresses.map((dress) => (
//               <TableRow key={dress.dressid}>
//                 <TableCell>{dress.dressid}</TableCell>
//                 <TableCell>{dress.Dressname}</TableCell>
//                 <TableCell>{dress.price}</TableCell>
//                 <TableCell>{dress.size}</TableCell>
//                 <TableCell><img src={dress.photo} alt={dress.Dressname} width="50" /></TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary" onClick={() => handleEdit(dress.dressid)}>Edit</Button>
//                   <Button variant="contained" color="error" onClick={() => handleDelete(dress.dressid)}>Delete</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default AdminPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";

const AdminPage = () => {
  const [dresses, setDresses] = useState([]);
  const [formData, setFormData] = useState({ dressid: "", dressname: "", price: "", size: "", photo: "" });

  useEffect(() => {
    fetchDresses();
  }, []);

  // Function to fetch dresses from API
  const fetchDresses = async () => {
    try {
      const response = await axios.get("https://localhost:7260/api/Values");
      setDresses(response.data);
    } catch (error) {
      console.error("Error fetching dresses:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission to add a dress
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7260/api/Values/admin", formData);
      fetchDresses();
    } catch (error) {
      console.error("Error adding dress:", error);
    }
  };

  // Function to edit an existing dress
  const handleEdit = async (dressid) => {
    try {
      await axios.put(`https://localhost:7260/api/Values/updatedressdetails/${dressid}`, formData, {
        headers: { "Content-Type": "application/json" }
      });
      fetchDresses();
    } catch (error) {
      console.error("Error updating dress:", error.response?.data || error.message);
    }
  };

  // Function to delete a dress
  const handleDelete = async (dressid) => {
    try {
      await axios.delete(`https://localhost:7260/api/Values/deleteDress/${dressid}`);
      fetchDresses();
    } catch (error) {
      console.error("Error deleting dress:", error.response?.data || error.message);
    }
  };

  return (
    <Container>
      <h2>Admin - Manage Dresses</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Dress ID" type="number" name="dressid" value={formData.dressid} onChange={handleChange} required />
        <TextField label="Dress Name" type="text" name="dressname" value={formData.dressname} onChange={handleChange} required />
        <TextField label="Price" type="number" name="price" value={formData.price} onChange={handleChange} required />
        <TextField label="Size" type="text" name="size" value={formData.size} onChange={handleChange} required />
        <TextField label="Photo URL" type="text" name="photo" value={formData.photo} onChange={handleChange} required />

        <Button type="submit" variant="contained" color="primary">Add Dress</Button>
      </form>

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Dress Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dresses.map((dress) => (
              <TableRow key={dress.dressid}>
                <TableCell>{dress.dressid}</TableCell>
                <TableCell>{dress.dressname}</TableCell>
                <TableCell>{dress.price}</TableCell>
                <TableCell>{dress.size}</TableCell>
                <TableCell><img src={dress.photo} alt={dress.dressname} width="50" /></TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleEdit(dress.dressid)}>Edit</Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(dress.dressid)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminPage;
