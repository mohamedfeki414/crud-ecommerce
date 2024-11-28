import React, { useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Insertcategorie = () => {
  const [categorie, setCategorie] = useState({})
 
  const navigate = useNavigate()
  const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/categories")
        setCategories(response.data); 
      } catch (error) {
        console.log(error)
      }
    };
    useEffect(()=>{
    fetchCategories();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:3001/api/categories", categorie)
      .then(response=>{
      navigate("/categories")
      }) 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <Form>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Nom de la Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de la catégorie"
              value={categorie.nomcategorie}
              onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image"
              value={categorie.imagecategorie}
              onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
            />
          </Form.Group>
        </Row>

        <button className="btn btn-success btn-sm" onClick={handleSave}>
          <i className="fa-solid fa-floppy-disk"></i> Save
        </button>
        &nbsp;
        <Link to="/categories">
          <button className="btn btn-danger btn-sm">
            <i className="fa-solid fa-person-walking-arrow-right"></i> Exit
          </button>
        </Link>
      </Form>
    </div>
  );
};

export default Insertcategorie;

