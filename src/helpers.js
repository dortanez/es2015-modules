const choice = (items) => {
    const randomNum = Math.floor(Math.random() * items.length);
    return items[randomNum];
}

const remove = (items, item) => {
    if(items.indexOf(item) !== -1) {
        items.splice(items.indexOf(item),1);
        return item;
    } else {
        return undefined;
    }
}

export {choice, remove};