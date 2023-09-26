function Deposit(){
    const [show, setShow]                       = React.useState(true);
    const [status, setStatus]                   = React.useState('');
    const [balance, setBalance]                 = React.useState(0); // initialize balance to zero
    const [deposit, setDeposit]                 = React.useState('');
    const ctx = React.useContext(UserContext);
  
    const isSubmitDisabled = !deposit;

//  previously was: if (parseFloat(field) <= 0)
    function validate(field, label){
        if (parseFloat(field) > 0 ^ parseFloat(field) != /[^0-9]/g) {            
            setStatus("Error: Your " + label + " must be a number and it must be greater than zero");
            setTimeout(() => setStatus(''),3000);
            return false;            
        } 
            return true;
    };

    function handleCreate(){
        if (!validate(deposit, 'deposit')) return;
        const updatedBalance = parseFloat(balance) + parseFloat(deposit);
        setBalance(updatedBalance);
        ctx.users.push({ deposit, balance: updatedBalance });
        setShow(false);
    };
 
    function clearForm(){
        setDeposit('');
        setShow(true);
    };

    return ( 
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="DEPOSIT"
        title="Balance "
        status={status}
        body={show ? 
            (
            <>      
                Balance: ${balance}<br/>
                
                Deposit Amount<br/>
                <input 
                type="deposit" 
                className="form-control" 
                id="deposit" 
                placeholder="Enter amount" 
                value={deposit} 
                onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleCreate} 
                disabled={isSubmitDisabled}>DEPOSIT</button>
            </> 
            ):(
            <>                                
                <h5>Success!</h5><br />            
                Balance: ${balance}<br/>

                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Make another deposit</button>            
            </>            
            )
        }
        />
    );
}
