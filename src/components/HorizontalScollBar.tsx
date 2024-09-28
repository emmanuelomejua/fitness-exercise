import { Box, Typography } from '@mui/material'
import React, { useContext, FC } from 'react'
import BodyParts from './BodyParts'
import { hData } from './type';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={()=> scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScollBar: FC<hData> = ({data, bodyPart, setBodyPart}) => {
  

  return (
    <ScrollMenu LeftArrow={LeftArrow}  RightArrow={RightArrow}>
        {data?.map(((item: any) => (
            <Box
                key={item}
                data-itemid={item} 
                title={item}
                m='0 40px'
            >
                <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        )))
        }
    </ScrollMenu>
  )
}

export default HorizontalScollBar;
