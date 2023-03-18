import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null
}

const podcastsReducer = createSlice({
    name: 'podcastsReducer',
    initialState,
    reducers: {
        resultPodcastsRequest(state, action){
            return {
                ...state,
                data: action.payload
            };
        },
        deletePodcastsRequest(state, action){
            return {
                ...state,
                data: null
            }
        }
    }
});

export const { resultPodcastsRequest, deletePodcastsRequest } = podcastsReducer.actions;

export default podcastsReducer.reducer;