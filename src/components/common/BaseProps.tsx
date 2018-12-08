import * as React from 'react';

// tslint:disable-next-line:interface-over-type-literal
export type BaseProps =  {
    className?: string;
    children?: React.ReactNode;
    prefixCls?: string;
    style?: React.CSSProperties;
};

export interface Props extends BaseProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
