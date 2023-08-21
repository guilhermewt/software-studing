import React,{useState, useEffect} from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer} from "react-toastify";
import './App.css';
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Grid from "./components/Grid.js"
import axios from "axios";


const Container = styled.div`
widht:100%;
max-width: 800px;
margin-top:20px;
display: flex;
flex-direction:column;
align-items:center;
gap:10px;
`;

const Title = styled.h2``;

//hooks,ciclo de vida de component

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try{
      const res = await axios.get("http://localhost:3001/crud-react");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
      
    }catch(error){
      toast.error('ocorreu um problema')
    }
  };

  useEffect(() => {
    getUsers();
  },[setUsers]);
  return (
    <>
      <Container>
        <Title>Usuarios</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
