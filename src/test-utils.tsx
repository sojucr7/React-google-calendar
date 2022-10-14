import theme from './App'
import React,{FC,ReactElement} from 'react'
import styled,{ThemeProvider} from 'styled-components'
import {render, RenderOptions } from '@testing-library/react'

const AllTheProvider:FC<{children:React.ReactNode}>=({children})=>{
    return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
    )
}

const customRender=(
    ui:ReactElement,
    options?:Omit<RenderOptions,'wrapper'>,
)=>render(ui,{wrapper:AllTheProvider,...options})


export * from '@testing-library/react'
export {customRender as render}