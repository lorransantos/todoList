import { useForm } from "../../hoock/UseForm"
import {Container,Form,Title} from "./style"
import React,{useState} from "react"

export const CreateTask = () => {
    const [list,setList] = useState([])
    const {form,onChange,clean} = useForm({
        id:Date.now(),
        title:"",
        description:"",
        status:false
    })
    const submit = (event) =>{
        event.preventDefault();
        const newlist = [...list,form]
        setList(newlist)
        console.log(list)
        clean()
    }

    return (
    <Container>
        <Title>NOVA TAREFA</Title>
        <Form onSubmit={submit}>
        <label htmlFor="Titulo">Titulo</label>
        <input 
        id="Titulo"
        type="text"
        name={"title"}
        value={form.title}
        onChange={onChange}
        required
         />
        
        <label htmlFor="description">Descrição</label>
        <textarea 
        id="description"
        name={"description"}
        value={form.description}
        onChange={onChange}
        required
        cols="30" rows="10"></textarea>

        <button type="submit">ADICIONAR TAREFA</button>
        </Form>
        
    </Container>
)}