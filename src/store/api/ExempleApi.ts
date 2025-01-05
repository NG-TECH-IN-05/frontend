// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACKEND_URL } from '@/constant/env'

// Define a service using a base URL and expected endpoints
type Data = {
  name: string
  quantity: number
  id: string
}

export const ExempleApi = createApi({
  reducerPath: 'ExempleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}`,
  }),

  endpoints: (builder) => ({
    getDatas: builder.query<Data[], void>({
      query: () => `data/`,
    }),
    getSingleData: builder.query<Data, string>({
      query: (id) => `data/${id}`,
    }),
    ceateData: builder.mutation<Data, Data>({
      query: (data) => {
        return {
          url: `data/`,
          method: 'POST',
          body: data,
        }
      },
    }),
    //
  }),
})

export const {
  useGetDatasQuery,
  useGetSingleDataQuery,
  useLazyGetDatasQuery,
  useLazyGetSingleDataQuery,
  useCeateDataMutation,
} = ExempleApi
