interface Iids {
    [key: string]: number
}

const ids: Iids = {};

function uniqueId(prefix: string = 'fuck'): string{
    if (!ids[prefix]){
        ids[prefix] = 0;
    }

    const id = ++ids[prefix];
    if(prefix === 'fuck'){
        return `${id}`;
    }
    return `${prefix}_${id}`;
}

export default uniqueId;
