export type textFieldPropTypes = {
    name: string;
    placeholder: string;
    value: string;
    label?: string;
    error?: string;
    info?: string;
    type: string;
    onChange: (e: any) => void;
}