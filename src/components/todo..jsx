import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { onetodo } from './API'
import { Button, LoadingOverlay, Title } from '@mantine/core'

export default function Detial() {
    const navigate = useNavigate()
    const {id} = useParams()
    const { data , isLoading , isError, refetch} = useQuery({
        queryKey :["detial",id],
        queryFn:()=> onetodo(id)
    })

     if(isLoading){
         return <LoadingOverlay visible/>
     }
     console.log(data);
     

  return (
    <>
    <Button  variant='outline' onClick={()=>navigate("/table")}>Back</Button>
    <div>detial</div>
  
      <h2>{data?.title}</h2>
         <p>ID: {data?.id}</p>
    </>
  )
}
