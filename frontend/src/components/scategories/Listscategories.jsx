import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Listscategories = () => {
  const[scategories,setscategories]=useState([]);
  const fetchcategories = async () => {
    await axios.get("http://localhost:3001/api/scategories")
    .then(res=>{
      setscategories(res.data);
      console.log(res);

    })
    .catch(error => {
      console.log(error);
    });
   }
  useEffect(() => {
    fetchcategories();
  }, []);
  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:3001/api/scategories/${id}`)
    .then(res=>{
      setscategories(scategories.filter(c=>c._id!=id))
    })
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Liste des sous_categories</h1>
      <Link to="/scategories/add">
        <Button variant="success" style={{ backgroundColor: 'green' }}>
        <i class="fa-solid fa-square-plus"  style={{color: "#fcfcfd"}}></i>
        Nouveau
        </Button>
        </Link>
       <table className='table table-striped'>
        <thead>
          <tr>
            <th>Nom categorie</th>
            <th>Image catégorie</th>
            <th>Nom scategorie</th>
            <th>Image scategorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        
          {scategories.map((cat,index)=>(
        <tr key={index}>
          <td>{cat.categorieID?.nomcategorie}</td>
          <td><img src={cat.categorieID?.imagecategorie} width={100} height={100} /></td>
          <td>{cat.nomscategorie}</td>
          <td><img src={cat.imagescategorie} width={100} height={100} /></td>
          <td><Link to={`/scategories/edit/${cat._id}`}><button className='btn btn-warning btn-sm'><i class="fa-solid fa-pen"></i>Update</button></Link></td>
          <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-trash"></i>Delete</button></td>

        </tr>
          ))}

        </tbody>
      
      </table>
      
    
    </div>
  )
}


export default Listscategories
