function Deposit(){

    const [status, setStatus]                   = React.useState('');  
    const [deposit, setDeposit]                 = React.useState('');
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
        header="DEPOSIT"
        title="Balance"
        status={status}
        body={
            <>
            Deposit Amount<br/>
            <input type="deposit" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setNumber(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>DEPOSIT</button>
            </> 
        }
        />
    )
}
