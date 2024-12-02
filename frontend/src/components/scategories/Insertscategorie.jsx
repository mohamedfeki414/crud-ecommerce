import React, { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Insertscategorie = () => {
  const [categorie, setCategorie] = useState({
    nomcategorie: '',
    imagecategorie: '',
    nomscategorie: '',
    imagescategorie: ''
  });

  const [categories, setCategories] = useState([]); 
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/categories");
      setCategories(response.data); // Remplir la liste des catégories
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    
    // Vérification simple avant envoi
    if (!categorie.nomcategorie || !categorie.imagecategorie || !categorie.nomscategorie || !categorie.imagescategorie) {
      alert('Veuillez remplir tous les champs!');
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/scategories", categorie)
        .then((response) => {
          navigate("/scategories");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <Form>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Nom de la Catégorie</Form.Label>
            <Form.Control
              as="select"
              value={categorie.nomcategorie}
              onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((cat, index) => (
                <option key={cat._id} value={cat.nomcategorie}>
                  {cat.nomcategorie}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Image de la Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image de la catégorie"
              value={categorie.imagecategorie}
              onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Nom de la Sous-Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de la sous-catégorie"
              value={categorie.nomscategorie}
              onChange={(e) => setCategorie({ ...categorie, nomscategorie: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} mb="6">
            <Form.Label>Image de la Sous-Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image de la sous-catégorie"
              value={categorie.imagescategorie}
              onChange={(e) => setCategorie({ ...categorie, imagescategorie: e.target.value })}
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

export default Insertscategorie;

