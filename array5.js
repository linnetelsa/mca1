//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
      products.forEach(item=>console.log(item[1]));
//2. display product whose price < Rs.50
       m=products.filter(item=>item[2]<50)
       console.log(m);
//3. print price of oreo
      m=products.filter(item=>item[2]=='oreo')
      console.log(m);
//4. print costly product name
       m=products.find(item=>item[1]=='oreo')
       console.log(m[2]);

//5. display out of stock product
        m=products.filter(item=>item[3]==0).flat()
        console.log(m);
//6. sort products based on stock in decsending order



//7. print product having maximum available stock
       m=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
       console.log(m);

//8. is there any product can be purchased by Rs. 10
          m=products.some(item=>item[2]<=40)
          console.log(m?'yes':"no");
    
//9. Is there any product in the range of 10 to 30
       

//10. print all products in the range of 10 to 30

