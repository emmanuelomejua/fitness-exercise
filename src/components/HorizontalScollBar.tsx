import { Box } from '@mui/material'
import React, { FC } from 'react'
import BodyParts from './BodyParts'
import { hData } from './type'


const HorizontalScollBar: FC<hData> = ({data, bodyPart, setBodyPart}) => {
  return (
    <div>
        {data?.map(((item: any) => (
            <Box
                key={item.id || item}
                itemID={item.id || item}
                title={item.title}
                m='0 30px'
            >
                <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        )))
        }
    </div>
  )
}

export default HorizontalScollBar;
