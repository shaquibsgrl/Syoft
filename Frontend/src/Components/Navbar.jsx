import React from "react";
import { Flex, Spacer ,Image,Text,Icon} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { BsSearch } from 'react-icons/bs';
import { RiUserSearchFill} from 'react-icons/ri';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { useSelector } from "react-redux";
  

const Navbar=()=>{
    const cart=useSelector((state)=>state.cart.cart)
    return (
        <div>
            
            <Flex bg="#42f548"
            borderBottom="0.25px  solid black"
            p={1}
            align="center">
                <Link to="/">
            <Image src='data:image/jpeg;base64,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'
             alt='Image err' 
             height="100px"
             m={5}

             />
             </Link>
             <Spacer/>
                <Link to={"/collection/all"}><Text px={4} py={2}>Shop</Text></Link> 
                <Link to={"/collection/all"}><Text px={4} py={2}>Men</Text></Link> 
                <Link to={"/collection/all"}><Text px={4} py={2}>Women</Text></Link> 
                <Link to={"/collection/all"}><Text px={4} py={2}>New Arrival</Text></Link> 
                <Link to={"/collection/all"}><Text px={4} py={2}>About</Text></Link> 
                <Link to={"/collection/all"}><Text px={4} py={2}>help</Text></Link> 
                <Link to={"/login"}><Text px={4} py={2}>login</Text></Link> 
                <Link to={"/register"}><Text px={4} py={2}>register</Text></Link>  
                <Spacer/>
                <Icon boxSize="20px" mx={6} as={BsSearch} />
                <Icon boxSize="20px" mx={6} as={RiUserSearchFill} />
                <Icon boxSize="20px" mx={6}  as={BsFillCartPlusFill} />
                <Text>{cart? cart.length:0}</Text>
                <Spacer/>
            </Flex>

        </div>
    )
}

export {Navbar}