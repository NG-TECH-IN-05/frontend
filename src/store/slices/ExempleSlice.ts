import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

const ExempleSlice = createSlice({
  name: 'ExempleSlice',
  initialState: 'light',
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state = action.payload
      return state
    },
  },
})

export const { setValue } = ExempleSlice.actions

export default ExempleSlice.reducer
