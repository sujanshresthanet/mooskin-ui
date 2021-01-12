import { IBoxComponentProps } from '../Box/model';
import { IInputCallbackData } from '../index';

export interface ICheckboxComponentProps extends IBoxComponentProps {
    /** onClick event handler when a checkbox is clicked */
    onClickCheckbox?: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;

    /** wether the Checkbox is checked or not */
    checked: boolean;

    /** value for this Checkbox */
    value: string | number;
}

export interface ICheckboxButtonComponentProps extends IBoxComponentProps {
    /** onClick event handler when a checkbox is clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;
}
