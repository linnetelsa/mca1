
for(row=1;row<=4;row++){
    str=''
 for(col=1;col<=4;col++){
    str=str+'# '
 }
console.log(str);

}

console.log('--------');

for(row=1;row<=4;row++){
    str=" "
    for(col=1;col<=4;col++){
        str=str+row
    }
    console.log(str);
}
console.log('------');
for(row=1;row<=4;row++){
    str=" "
    for(col=1;col<=4;col++){
        str=str+col
    }
    console.log(str);
}

console.log('------');

for(row=1;row<=4;row++){
    str= '  '
    for(col=1;col<=row;col++){
        str=str+' * '
    }
    console.log(str);
}

console.log('------');

for(row=1;row<=4;row++){
    str= ' '
    for(col=1;col<=row;col++){
        str=str + row 
    }
    console.log(str);
}

console.log('------');

for(row=1;row<=4;row++){
    str= ' '
    for(col=1;col<=row;col++){
        str=str + col
    }
    console.log(str);
}

console.log('-----');
for(row=4;row>=1;row--){
    str=' '
    for(col=1;col<=row;col++){
        str=str+ ' * '
    }
    console.log(str);
}

console.log('-----');

for(row=1;row<=5;row++){
    str=' '
    for(col=1;col<=row;col++){
        str=str+' * '
    }
    console.log(str);
}


for(row=4;row>=1;row--){
    str=' '
    for(col=1;col<=row;col++){
        str=str+' * '
    }
    console.log(str);
}
   
console.log('-----');

for(row=1;row<=4;row++){
    str=' '
    for(sp=4;sp>row;sp--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}


for(row=1;row<=4;row++){
    str=' '
    for(col=1;col<=7;col++){
        if(col+row==5||col-row==3||row==4){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}

console.log('---------');

for(row=1;row<=8;row++){
    str='  '
    for(col=1;col<=5;col++){
        if(row==1 || row==8 ||col==1 ||col==5){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}

console.log('------');

for(row=1;row<=3;row++){
    str=''
    for(sp=3;sp>row;sp--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+ '* '
    }
    console.log(str);
}
for(row=3;row>=1;row--){
    str=''
    for(sp=3;sp>row;sp--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+ '* '
    }
    console.log(str);
}
