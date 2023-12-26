export type changeFunction = (type: string, label: string, value: any, tabIndex: number) => void;
export type formFields = Array<{ type: string; label: string; value: any; tabIndex: number }>;
export type submitFunction = (e: Event) => void;
export type validateFunction = (type: string, label: string, value: any) => boolean;
export type formErrors = Array<string>;