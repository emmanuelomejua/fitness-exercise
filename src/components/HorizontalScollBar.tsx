import { Box } from '@mui/material'
import React, { FC } from 'react'
import BodyParts from './BodyParts'

type tData = {
    data: any
}

const HorizontalScollBar: FC<tData> = ({data}) => {
  return (
    <div>
        {data?.map(((item: any) => (
            <Box
                key={item.id || item}
                itemID={item.id || item}
                title={item.title}
                m='0 30px'
            >
                <BodyParts item={item}/>
            </Box>
        )))
        }
    </div>
  )
}

export default HorizontalScollBar;
