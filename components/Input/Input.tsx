import * as React from 'react';

import styles from './Input.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface IProps {

    /** override input id */
    id?: string;

    /** provide to make the input field disabled */
    disabled?: boolean;

    /** provide to make the input field required */
    required?: boolean;

    /** override input type */
    type?: string;

    /** override input name */
    name?: string;

    /** override input value */
    value?: string;

    /** override input placeholder */
    placeholder?: string;

    /** override input minlength */
    minlength?: number;

    /** override input maxlength */
    maxlength?: number;

    /** input label */
    label?: string;

    /** input description (small italic bottom) */
    description?: string;

    /** spacing between label and input */
    labelWidth?: number;

    /** toggle autocomplete specified input */
    autocomplete?: boolean;

    /** autofocus specified input */
    autofocus?: boolean;

    /** override input styles */
    style?: React.CSSProperties;

    /** override input class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

}

class Input extends React.Component<IProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    id: string;

    constructor(props: IProps){
        super(props);

        this.id = this.props.id || this.generateId();

    }

    render(){

        const {
            disabled,
            required,
            type,
            name,
            placeholder,
            minlength,
            maxlength,
            style,
            className,
            label,
            autofocus,
            description,
        } = this.props;

        const disabledInput = disabled ? styles.disabledInput : '';
        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};
        const autocomplete = !this.props.autocomplete ? 'off' : 'on';

        return (
            <div className={`input-component ${className} ${styles.inputContainer}`}>
                {label && <label className={styles.inputLabel} style={spacing} htmlFor={this.id}>{label}</label>}
                <div className={styles.inputDiv}>
                    <input
                        onChange={this.onChange}
                        id={this.id}
                        type={type}
                        name={name}
                        value={this.props.value}
                        placeholder={placeholder}
                        minLength={minlength}
                        maxLength={maxlength}
                        required={required}
                        disabled={disabled}
                        className={`input ${styles.input} ${disabledInput}`}
                        style={style}
                        autoFocus={autofocus}
                        autoComplete={autocomplete}
                    />
                    <i className={styles.description}>{description}</i>
                </div>
            </div>
        );
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: e.target.value, dataLabel: this.props.dataLabel});
    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }
}

export default Input;
