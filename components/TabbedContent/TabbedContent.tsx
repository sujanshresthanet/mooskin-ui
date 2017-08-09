import * as React from 'react';

import normal from './TabbedContent.css';
import radio from './TabbedRadio.css';

export interface ITabbedContentProps {

    /** type of the tabbed content normal/radio/advanced */
    type?: string;

    /** align headers left/center/right */
    align?: string;

    /** vertical styles of the tabbed content */
    vertical?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface ITabProps {

    /** if active */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface IHeaderProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** type of tabbed content should reflect on the header (inherited from parent) */
    type?: string;

    /** how headers should be aligned (inherited from parent) */
    align?: string;

    /** wether the headers should be aligned vertically (inherited from parent) */
    vertical?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;

    /** callback function when a header is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IContentProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface ITabbedContentState {
    activeTab?: number;
}

export default class TabbedContent extends React.Component<ITabbedContentProps, ITabbedContentState>{

    public static defaultProps = {
        activeTab: 0,
        className: '',
        style: {},
        type: 'normal'
    };

    public static Tab: React.StatelessComponent<ITabProps>;
    public static Header: React.StatelessComponent<IHeaderProps>;
    public static Content: React.StatelessComponent<IContentProps>;

    constructor(props: ITabbedContentProps){
        super(props);

        this.state = {
            activeTab: this.getActiveTab()
        };
    }

    public render() {

        const style = this.getClasses();

        const containerStyles = !this.props.vertical ? style.containerH : style.containerV;
        const headingStyles = !this.props.vertical ? style.headingH : style.headingV;
        const contentStyles = !this.props.vertical ? style.contentH : style.contentV;

        const verticalAlign = this.props.align ? style.headingVAlign : '';
        const align = this.getAlign(style);

        const {headers, contents} = this.riteOfRakshir();

        return(
            <div className={`tabbed-content-component ${style.container} ${containerStyles}`}>
                <div className={`${style.heading} ${headingStyles} ${align} ${verticalAlign}`}>
                    {headers}
                </div>
                <div className={`${style.content} ${contentStyles}`}>
                    {contents}
                </div>
            </div>
        );
    }

    private riteOfRakshir = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const contents: Array<React.ReactElement<ITabProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<ITabProps>(child)){
                const {header, content} = this.assignPropsToChildren(child.props.children, index);

                headers.push(header);

                contents.push(content);
            }

        });

        return {headers, contents};
    }

    private assignPropsToChildren = (children: any, index: number) => {

        const headerProps: Partial<IHeaderProps & {key: number}> = {
            active: this.state.activeTab === index,
            align: this.props.align,
            key: index,
            onClick: this.onClickHeader(index, children[0]),
            type: this.props.type,
            vertical: this.props.vertical
        };

        const contentProps: Partial<IContentProps & {key: number}> = {
            active: this.state.activeTab === index,
            key: index
        };

        const header: any = React.cloneElement(children[0], headerProps);
        const content: any = React.cloneElement(children[1], contentProps);

        return {header, content};
    }

    private onClickHeader = (tabIndex: number, header: React.ReactElement<IHeaderProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeTab: tabIndex});
            header.props.onClick && header.props.onClick(e);
        };
    }

    private getActiveTab(): number {
        let activeTab = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ITabProps>(value) && value.props.active){
                activeTab = index;
            }
        }

        return activeTab;
    }

    private getClasses = () => {
        switch (this.props.type) {
            case 'normal':

                return normal;

            case 'radio':

                return radio;

            default:

                return normal;
        }
    }

    private getAlign = (style: any) => {
        if (this.props.align === 'right' || this.props.align === 'bottom'){
            return !this.props.vertical ? style.headingHRight : style.headingVRight;
        } else if (this.props.align === 'left' || this.props.align === 'top'){
            return '';
        } else {
            return style.headingCenter;
        }
    }
}

export const Tab: React.StatelessComponent<ITabProps> = (props) => {
    return(
        <div className={`tab-component ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {

    const getClasses = () => {
        switch (props.type) {
            case 'normal':

                return normal;

            case 'radio':

                return radio;

            default:

                return normal;
        }
    };

    const style = getClasses();

    const activeTab = props.active ? style.activeHeader : style.inactiveHeader;

    const input = props.type === 'radio' ? (
        <input
            type="radio"
            checked={props.active}
            readOnly
        />
    ) : '';

    const align = props.align ? style.headerAlign : '';

    return(
        <div
            className={`tab-header ${style.header} ${activeTab} ${align}`}
            style={props.style}
            onClick={props.onClick}
        >
            {input}
            {props.children}
        </div>
    );
};

export const Content: React.StatelessComponent<IContentProps> = (props) => {

    const displayClass = !props.active ? normal.invisible : normal.visible;

    return(
        <div className={`content-component ${displayClass} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};
