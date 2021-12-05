import { refreshAccess } from "./auth";
import { HISTORY_API, SONGS_API } from './constants';

export const streamingHistory = async () => {
    let accessToken = sessionStorage.getItem("access");
    let streamingHistoryAPI = await fetch(HISTORY_API, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });
    switch (streamingHistoryAPI.status) {
        case 401:
            await refreshAccess();
            return await streamingHistoryAPI();
        case 200:
            return await streamingHistoryAPI.json();
        default:
            break;
    }
}

export const getAllSongs = async () => {
    let accessToken = sessionStorage.getItem("access");
    let allSongsAPI = await fetch(SONGS_API, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }
    });
    switch (allSongsAPI.status) {
        case 200:
            return await allSongsAPI.json();
        case 401:
            await refreshAccess();
            return await getAllSongs();
        default:
            break;
    }
}