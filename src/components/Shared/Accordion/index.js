import React, { useState } from 'react';
import { 
  AccordionContainer, 
  AccordionHeader, 
  AccordionIcon, 
  AccordionArrow,
  AccordionBody
} from './styles';
import BsChevronDown from '@meronex/icons/bs/BsChevronDown';
import BsChevronUp from '@meronex/icons/bs/BsChevronUp';

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(prev => !prev)}>
        <AccordionIcon>
          {props.iconUrl && (
            <img src={props.iconUrl} alt="accordion-icon" />
          )}
          <div className="text" style={!props.iconUrl ? {margin: 0} : {}}>{props.title}</div>
        </AccordionIcon>
        <AccordionArrow>
          {isOpen ? (
            <BsChevronDown />
          ) : (
            <BsChevronUp />
          )}
        </AccordionArrow>
      </AccordionHeader>
      <AccordionBody isOpen={isOpen}>
        <div>
          {props.children}
        </div>
      </AccordionBody>
    </AccordionContainer>
  )
}

export default Accordion;