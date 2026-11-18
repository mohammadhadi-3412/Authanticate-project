import { ActionIcon, Center, LoadingOverlay, Pagination, Select, Table } from '@mantine/core'
import { useQuery } from '@tanstack/react-query';
import { api } from './API';
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import { IconLogout2, IconMoon, IconSun } from '@tabler/icons-react';
import { useAppStore } from './store';
import { useAuthStore } from './AuthStore';
export default function List() {

    const{logout, setLogout}= useAuthStore()
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("page"));
    const [limite, setLimite] = useState(10);
    const [page, setPage] = useState(1);
    const { theme, setTheme } = useAppStore()
    useEffect(() => {
        localStorage.setItem("token", "12345")
       console.log(localStorage.getItem("theme-store"));
    }, [])

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["user", searchParams.get("page") || 1, searchParams.get("limite") || 10],
        queryFn: () => api(searchParams.get("page") || 1, searchParams.get("limite") || 10)
    });

    console.log(data);

    if (isLoading) {
        return <LoadingOverlay visible />
    }
    if (isError) {
        return <h1>Some Thing is not right </h1>
    }
    return (
        <>


            <h1 style={{ textAlign: "center" }}>
                Todos Lists
            </h1>
            
            {theme === "light" ? (
                <IconMoon onClick={() => setTheme("dark")} />
            ) : (
                <IconSun onClick={() => setTheme("light")} />
            )}
            <ActionIcon ml={20} onClick={ logout}>
                <IconLogout2 />
            </ActionIcon>
        
            <Select
                data={["10", "20", "30", "40", "50"]}
                value={String(limite)}
                onChange={(value) => {
                    if (value) {
                        setSearchParams({
                            page: "1",
                            limite: value
                        });
                    }
                }}
            />
            <Table striped>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>ID</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>completed</Table.Th>
                        <Table.Th>Action</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {data?.map((user) => (
                        <Table.Tr key={user.id}>
                            <Table.Td>{user.id}</Table.Td>
                            <Table.Td>{user.title}</Table.Td>
                            <Table.Td>{user.completed ? "Completed" : "Not Completed"}</Table.Td>
                            <Table.Td><Link to={`/detial/${user.id}`}> More</Link></Table.Td>
                        </Table.Tr>
                    ))}</Table.Tbody>
            </Table>
            <Center>
                <Pagination
                    total={Math.ceil(200 / Number(searchParams.get("limite")) || 10)}
                    value={Number(searchParams.get("page")) || 1}
                    onChange={(value) => {
                        setSearchParams({
                            page: String(value),
                            limit: String(limite)
                        });
                    }}
                    color="red"
                />
            </Center>
        </>
    )
}
