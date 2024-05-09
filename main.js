function generateId(length = 10) {
    const symvols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * symvols.length);
        randomId += symvols[random];
    }
    
    return randomId;
}
const id = generateId();
console.log(id);