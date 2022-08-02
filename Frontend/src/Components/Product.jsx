import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


 export const Products = ({product}) => {
    const {_id,image,title,price,rating,views}=product

    const navigate=useNavigate();
  return (
    <div>
      <Box onClick={()=>navigate(`/collection/all/${_id}`)} >
       <Image src={image} alt={"error"} w="300px" h="300"/>
       <Text>{title}</Text>
       <Text>{"₹"+price }</Text>
       <Text>{"Rating-"+rating+"★"}</Text>
       <Text>{"Views:"+views}</Text>

      </Box>
    </div>
  )
}

