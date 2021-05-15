interface IPost {
    id: number;
    title: string;
    image?: string;
    content: JSON;
}

interface IBlock {
    id?: string,
    type: string,
    block: any
}
