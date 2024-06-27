class Landingpage{
    dataBase = {
        "milan":{'username':'milan','password':'milan123'},
       "milu":{'username':'milu', 'password':'milu123'}
}

   saveData(){
     if(this.dataBase){
        localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
     }
   }

   getData(){
      this.dataBase=JSON.parse(localStorage.getItem('dataBase'))
      console.log(this.dataBase);
   }

   register(){
      this.getData
      let user=reg.value
      let pswd=pass.value
      console.log(user);
      console.log(pswd);
   
   if(user ==''|| pswd ==' '){
      alert('please login')

   }
   else{
      if(user in this.dataBase){
         alert('account already exist')
      }
   
   else{
      this.dataBase[user]={username:user,password:pswd}
      console.log(this.dataBase);
      this.saveData()
      
      window.location='landingpage.html'
   }
  
}  
   
   }



//login

login(){
   let user=loginusername.value
   let pswd=loginpswd.value
   console.log(user,pswd);


   if(user in this.dataBase){
       if(this.dataBase[user].password ==pswd){
           localStorage.setItem("username",user)
           alert('login successful')
           window.location ='home.html'
       }
       else{
           alert('incorrect username or password')
       }
   }
       else{ 
           alert('account doesnot exist')
       }
   }
}


const obj = new Landingpage()

obj.getData()


