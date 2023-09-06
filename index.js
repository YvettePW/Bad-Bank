function Spa(){
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
                <Route path="/"                 exact component={Home} />
                <Route path="/CreateAccount/"   component={CreateAccount} />
                <Route path="/alldata/"         component={AllData} />
                <Route path="/deposit/"         component={Deposit} />
                <Route path="/withdraw/"        component={Withdraw} />
            </UserContext.Provider>   
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)