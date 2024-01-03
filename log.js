
class Landing{
    //property
    dataBase={
        "Bella":{username:"Bella",password:"123"},
       " Max":{username:"Max",password:"9797"},
        "Alaska":{username:"Alaska",password:"1234"},
        "Tessa":{username:"Tessa",password:"12345"}
    }
    //method
    //storing local storage
    saveData(){
        if(this.dataBase){
            localStorage.setItem('database',JSON.stringify(this.dataBase))
        }
    }

    //get data from local storage
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))


    }

    //register
    register(){
        this.getData()
        let user = reguser.value
        let pswd = rgtrpass.value

        if(user=="" || pswd=="")
        {
            alert('please enter valid input')
        }
        else{
            if(user in this.dataBase){
                alert('user already exist')
            }
            else{
                this.dataBase[user]={username:user,password:pswd}
                console.log(this.dataBase);
                alert('succusfly registered')
                this.saveData()

                //navigate to login page
                window.location="login.html"
            }
        }

    }

    //login
    login(){
        let user1=loguser.value
        // console.log(user1);

        let pswd1=logpswd.value
        // console.log(pswd1);

        //call stored database
        this.getData()
        if(user1 in this.dataBase)
        {
            if(this.dataBase[user1].password==pswd1){

                //to store this user name in local storage
                localStorage.setItem("user",user1)
                alert('login successfully')
                //store username in the local storage
                localStorage.setItem("user",user1)
                
                //navigate home page
                window.location="home.html"
            }
            else{
                alert('incorrect password or username')
            }
        }
        else{
            alert('user does not exist')
        }

    }
}

//object
const obj = new Landing()
obj.getData()
