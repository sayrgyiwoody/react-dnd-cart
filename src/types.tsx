export type Task = {
    id: string,
    title: string,
    description: string,
    status: string,
};

export type Column = {
    id: string,
    title: string,
};

export type TCart = {
    items: TItem[];
}

export type TItem = {
    id: string;
    name: string;
    description: string;
    price: number;
}