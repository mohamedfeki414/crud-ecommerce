import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useShoppingCart } from 'use-shopping-cart';

const Listarticlecard = () => {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    GetListArticles();
  }, []);

  const GetListArticles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/articles");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const{addItem}=useShoppingCart()
  const handleAdd=(article)=>{
    
  }

  return (
    <div className="container">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        {articles.map((art, ind) => (
          <Card key={ind} sx={{ maxWidth: 'auto', margin: 1 }}>
            <CardMedia
              component="img"
              alt="image"
              height="160"
              image={art.imageart}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {art.reference}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prix : {art.prixVente} DT
              </Typography>
            </CardContent>
            <CardActions>
              <Button disabled={art.qtestock <= 1} variant="contained" color="secondary" size="large" onClick={()=>handleAdd(articles)}>
               <i class="fa-solid fa-cart-shopping"></i>&nbsp; {art.qtestock <= 1 ? "OUT OF STOCK" : "Add to cart"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Listarticlecard
