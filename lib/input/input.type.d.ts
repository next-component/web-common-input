import * as React from 'react';
import { HTMLProps } from 'react';
import { ExtendValidatorStatic } from './validate';
export interface PropsDefine extends HTMLProps<HTMLInputElement> {
    label?: string;
    highlight?: boolean;
    highlightLine?: boolean;
    rightRender?: () => React.ReactElement<any>;
    innerRender?: () => React.ReactElement<any>;
    textAlign?: string;
    validateMiddleware?: (value?: string, validator?: ExtendValidatorStatic) => validateMiddlewareReturnInterface;
    disabled?: boolean;
    others?: any;
}
export declare class PropsGaea {
    gaeaName: string;
    gaeaIcon: string;
    gaeaUniqueKey: string;
}
export declare class Props extends PropsGaea implements PropsDefine {
    label: string;
    highlight: boolean;
    highlightLine: boolean;
    rightRender: () => any;
    innerRender: () => any;
    textAlign: string;
    validateMiddleware: () => {
        ok: boolean;
    };
    disabled: boolean;
    onChange: () => void;
}
export interface StateDefine {
    hasError?: boolean;
    errorMessage?: string;
    value?: string | string[];
}
export declare class State implements StateDefine {
    hasError: boolean;
    errorMessage: string;
}
export interface validateMiddlewareReturnInterface {
    ok: boolean;
    errorMessage?: string;
}