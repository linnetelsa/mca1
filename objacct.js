class Bank{
    accountDetails={
        1000:{acno:1000, username:"userone", password:"userone", balance:50000},
        1001:{acno:1001, username:"usertwo", password:"usertwo", balance:5000},
        1002:{acno:1002, username:"userthree", password:"userthree", balance:10000},
        1003:{acno:1003, username:"userfour", password:"userfour", balance:6000},
    }

    //method for validate given account number
        validate(acno){
      if(acno in this.accountDetails){
        console.log('validate');
      }
      else{
        console.log('not validate');
      }
    }
     
    //method for authenticate a account}

       authenticate(accno,pswd){
        if(this.validate(accno)in this.accountDetails){
            if(this.validate(accno)==this.accountDetails.pswd){
                console.log('authenticate');
            }
            else{
                console.log('not authenticate');
            }
        }
       }
   
    //method for balance enquiry

    //method for fund transfer
}

const obj=new Bank()
obj.validate(100)

obj.authenticate(1000,'userone')