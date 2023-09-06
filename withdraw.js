function Withdraw(){

    const [status, setStatus]                   = React.useState('');
    const [withdraw, setWithdraw]               = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
                setTimeout(() => setStatus(''),3000);
                return false;
        }
        return true;
    };

    function handleCreate(){
        console.log(withdraw);
          if (!validate(withdraw,    'withdraw'))       return;
        ctx.users.push({withdraw,balance:100});  
        setShow(false);     
    };  
  
    return (
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="WITHDRAW"
        title="Balance"
        status={status}
        body={
            <>
            Withdraw Amount<br/>
            <input type="withdraw" className="form-control" id="withdraw" placeholder="Enter amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>WITHDRAW</button>
            </>
        }
        />
    )
}
