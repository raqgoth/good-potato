import axios from 'axios';
import environment from '../../notes/environment'

const NoteService = {
    get:async ()=>{
        const res = await  axios.get(environment.NOTES);
        return res;
    },
    getById:async (noteId)=>{
        const res = await  axios.get(`${environment.NOTES}/${noteId}`);
        return res;
    },
    delete:async (noteId)=>{
        const res = await  axios.delete(`${environment.NOTES}/${noteId}`);
        return res;
    },
    create: async (data)=>{
        const res = await  axios.post(environment.NOTES,data);
        return res;
    },
    update:async (noteId,data)=>{
        const res = await  axios.put(`${environment.NOTES}/${noteId}`,data);
        return res;
    },
};

export default NoteService;