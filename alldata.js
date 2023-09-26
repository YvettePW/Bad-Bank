function AllData(){
    const ctx = React.useContext(UserContext);
    console.log(ctx);

//    const allUsers = ctx.users.reduce((acc, user) => {
//        acc.push({ name: user.name, email: user.email, password: user.password });
//        return acc;
//      }, []);

    return (
    <div>
            ALL DATA<br/>

            {ctx.users.map((user, index) => (   
                <div key={index} className = "card-group">

                    <Card                      
                        bgcolor="primary"
                        txtcolor="white"
                        header="name"            
                        body={user.name}
                    />
    
                    <Card                    
                        bgcolor="primary"
                        txtcolor="white"
                        header="Email"         
                        body={user.email}
                    />
    
                    <Card                      
                        bgcolor="primary"
                        txtcolor="white"
                        header="Password"           
                        body={user.password}
                    />  

                </div> 
            ))}        

    </div> 

    );
}


/*
return (
    <>
      <h5>ALL DATA</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
*/