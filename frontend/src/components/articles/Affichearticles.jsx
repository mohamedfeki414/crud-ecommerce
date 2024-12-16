import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box } from '@mui/material'; 
import Button from 'react-bootstrap/Button'; 

const Affichearticles = ({ articles }) => {
  const columns = useMemo(
    () => [
        
      {
        accessorKey: 'reference', // access nested data with dot notation
        header: 'Reference',
        size: 150,
      },
      {
        accessorKey: 'designation',
        header: 'Désignation',
        size: 150,
      },
      {
        accessorKey: 'prix', // normal accessorKey
        header: 'Prix',
        size: 200,
      },
      { 
     
        accessorKey: 'marque', //normal accessorKey 
 
        header: 'Marque', 
 
        size: 200, 
 
      },
      { 
     
        accessorKey: 'qtestock', 
 
        header: 'State', 
 
        size: 150, 
 
      },
      { 
        accessorKey: 'imageart', //access nested data with dot notation 
        header: 'Image', 
        Cell: ({ cell}) => ( 
        <Box 


        sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem', 
        }} 
        > 
        <img 
        alt="" 
        height={100} 
        src={cell.getValue()} 
        loading="lazy" 
        style={{ borderRadius: '20%' }} 
        /> 
        </Box>), 
        }, 
        { 
            accessorKey: '_id', 
            header: 'actions', 
            size: 100, 
            Cell: ({ cell, row }) => ( 
            <div > 
            <Button 
            onClick={() => { 
            console.log("modification ...") 
            }} 
            variant="warning" 
            size="md" 
            className="text-warning btn-link edit" 
            > 
            <i class="fa-solid fa-pen-to-square"></i> 
            </Button> 
            <Button 
            onClick={(e) => { 
              deleteProduct(cell.row.original._id,cell.row.original.reference, 
e); 
            }} 
            variant="danger" 
            size="md" 
            className="text-danger btn-link delete" 
            >
                  <i className="fa fa-trash" /> 
            </Button> 
            </div> 
            ), 
            },

      
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: articles, // data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default Affichearticles;
