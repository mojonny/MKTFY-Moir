import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
	reducerPath: 'searchApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://official-joke-api.appspot.com/jokes/',
	}),
	endpoints: (builder) => ({
		getSearchByType: builder.query({
			query: (type) => `${type}/random`,
		}),
	}),
});

export const { useGetSearchByTypeQuery } = searchApi;
