import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null
}

const podcastDetailReducer = createSlice({
    name: 'podcastDetailReducer',
    initialState,
    reducers: {
        resultPodcastDetailRequest(state, action){
            return {
                ...state,
                data: action.payload
            };
        },
        deletePodcastDetailRequest(state, action){
            return {
                ...state,
                data: null
            }
        }
    }
});

export const { resultPodcastDetailRequest, deletePodcastDetailRequest } = podcastDetailReducer.actions;

export default podcastDetailReducer.reducer;