import * as React from 'react';

import styles from './TextArea.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITextAreaProps {

    /** override textarea id */
    id?: string;

    /** provide to make the textarea field disabled */
    disabled?: boolean;

    /** provide to make the textarea field required */
    required?: boolean;

    /** specify textarea columns */
    cols?: number;

    /** specify textarea rows */
    rows?: number;

    /** override textarea name */
    name?: string;

    /** override textarea value */
    value?: string;

    /** override textarea placeholder */
    placeholder?: string;

    /** override textarea minlength */
    minlength?: number;

    /** override textarea maxlength */
    maxlength?: number;

    /** textarea label */
    label?: string;

    /** textarea description (small italic bottom) */
    description?: string;

    /** spacing between label and textarea */
    labelWidth?: number;

    /** toggle readonly textarea */
    readonly?: boolean;

    /** override textarea styles */
    style?: React.CSSProperties;

    /** override textarea class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the textarea changes */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, data: IInputCallbackData) => void;

}

class TextArea extends React.Component<ITextAreaProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    id: string;

    constructor(props: ITextAreaProps){
        super(props);

        this.id = this.props.id || this.generateId();

    }

    render(){

        const {
            disabled,
            required,
            name,
            placeholder,
            minlength,
            maxlength,
            style,
            className,
            label,
            cols,
            rows,
            readonly,
            description,
        } = this.props;

        const disabledtextarea = disabled ? styles.disabledTextArea : '';
        const spacing = label ?
                        !this.props.labelWidth ?
                        {} :
                        {width: `${this.props.labelWidth}px`} :
                        {display: 'none'};

        return (
            <div className={`textarea-component ${className} ${styles.areaContainer}`}>
                <label className={styles.textareaLabel} style={spacing} htmlFor={this.id}>
                    {label}
                </label>
                <div className={styles.textAreaDiv}>
                    <textarea
                        id={this.id}
                        onChange={this.onChange}
                        name={name}
                        value={this.props.value}
                        placeholder={placeholder}
                        cols={cols}
                        rows={rows}
                        minLength={minlength}
                        maxLength={maxlength}
                        required={required}
                        disabled={disabled}
                        readOnly={readonly}
                        className={`textarea ${styles.textarea} ${disabledtextarea}`}
                        style={style}
                    />
                    <i className={styles.description}>{description}</i>
                </div>
            </div>
        );
    }

    onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: e.target.value, dataLabel: this.props.dataLabel});
    }

    generateId = () => {
        return Date.now().toString();
    }

}

export default TextArea;
