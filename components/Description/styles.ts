import styled from 'styled-components';

// Models
import { IDescriptionComponentProps } from './model';

// Components
import Box from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledDescription = styled(Box)<IDescriptionComponentProps>`
    margin-top: 10px;
    font-family: Hind;
    font-size: 12px;
    color: ${(props) => props.palette?.description.fontColor || variables.description.fontColor};
    width: fit-content;
    line-height: 1;
`;

StyledDescription.displayName = 'StyledDescription';
