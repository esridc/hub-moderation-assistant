import axios from 'axios';

const HUB_API_BASE_URL = 'https://opendatadev.arcgis.com/api';
// Functions for getting information from the API

// Example of search for posts filtered by sentiment
// https://opendatadev.arcgis.com/api/search/v2/collections/discussion-post/items?filter=sentiment%20is%20not%20null%20

export interface PostFilters {
    sentiment?: [number, number];
    toxicity?: [number, number];
    authenticity?: [number, number];
    limit?: number;
    channelId?: string;
}

export async function fetchPosts(filters: PostFilters = {}, context: any = {}): Promise<any> {
    const baseUrl = `${HUB_API_BASE_URL}/search/v2/collections/discussion-post/items`;
    
    const contextQuery = Object.entries(context)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => {
        if (Array.isArray(value)) {
            const [min, max] = value;
            return `filter=${key}%3E=${min}+and+${key}%3C=${max}`;
        } else {
            return `${key}=${value}`;
        }
    })
    .join('&');


    const filterQuery = Object.entries(filters)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                const [min, max] = value;
                return `${key}%3E=${min}+and+${key}%3C=${max}`;
            } else {
                return `${key}=${value}`;
            }
        })
        .join('+and+');

    const url = contextQuery ? `${baseUrl}?${contextQuery}&filter=${filterQuery}` : baseUrl;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}