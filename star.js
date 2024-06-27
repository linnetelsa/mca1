for(row=1;row<=3;row++){
    str=''
    for(sp=3;sp>row;sp--){
        str=str+' '
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
        if (col === 1 || col === 2 * row - 1) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    console.log(str);
}
for(row=3;row>=1;row--){
    str=''
    for(sp=3;sp>row;sp--){
        str=str+' '
    }
    for (let col = 1; col <= 2 * row - 1; col++) {
        if (col === 1 || col === 2 * row - 1) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    console.log(str);
}

