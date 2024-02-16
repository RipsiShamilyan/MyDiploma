import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../type";

export const getUsersAPI = createAsyncThunk(
    "get Users",
    async () => {
        const { data } = await axios.get("https://dummyjson.com/users");
        return data;
    });
export const getUsersByAPI = createAsyncThunk(
    "get Users by id",
    async (id: number) => {
        const { data } = await axios.get("https://dummyjson.com/users/" + id);
        return data;
    });
export const createUsersAPI = createAsyncThunk(
    "post Users",
    async (obj: User) => {
        const { data } = await axios.post("https://dummyjson.com/users/add", obj);
        return data;
    });
export const updateUsersAPI = createAsyncThunk(
    "update Users",
    async ({ id, obj }: { id: number, obj: { title: string, price: number } }) => {
        const { data } = await axios.put("https://dummyjson.com/users/" + id, obj);
        return data;
    });
export const deleteUsersAPI = createAsyncThunk(
    "delete Users",
    async (id: number) => {
        const { data } = await axios.delete("https://dummyjson.com/users/" + id);
        return data;
    });

export const searchUsersAPI = createAsyncThunk(
    'search Users',
    async (name: string) => {
        const { data } = await axios.get("https://dummyjson.com/users/search?q=" + name)
        return data.users;
    }
)
export const loginUserAPI = createAsyncThunk(
    'login Users',
    async (obj: {username:string, password:string}) => {
        const { data } = await axios.post("https://dummyjson.com/auth/login", obj)
        return data;
    }
)