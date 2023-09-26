function Withdraw(){
    const [show, setShow]                       = React.useState(true);
    const [status, setStatus]                   = React.useState('');
    const [balance, setBalance]                 = React.useState(100); // initialize balance to $100
    const [withdraw, setWithdraw]               = React.useState('');
    const ctx = React.useContext(UserContext);
    const isSubmitDisabled = !withdraw;

    function validate(field, label){
        if ((balance - parseFloat(field) > 0) ^ parseFloat(field) != /[^0-9]/g) { 
            setStatus("Error: Your withdrawal must be a number and your balance must not go below zero");
            setTimeout(() => setStatus(''),3000);
            return false;
    }            
            return true;
    };

    function handleCreate(){
        if (!validate(withdraw, 'withdraw'))       return;
        const updatedBalance = parseFloat(balance) - parseFloat(withdraw);
        setBalance(updatedBalance);
        ctx.users.push({ withdraw, balance: updatedBalance });  
        setShow(false);     
    };      
  
     function clearForm(){
         setWithdraw('');
         setShow(true);
     };

    return (
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="WITHDRAW"
        title="Balance "
        status={status}
        body={ show ?
            (
            <> 
                Balance: ${balance}<br/>

                Withdraw Amount<br/>
                <input 
                type="withdraw" 
                className="form-control" 
                id="withdraw" 
                placeholder="Enter amount" 
                value={withdraw} 
                onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleCreate}
                disabled={isSubmitDisabled}>WITHDRAW</button>
            </>
            ):(
                <>                                
                <h5>Success!</h5><br />            
                Balance: ${balance}<br/>

                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Make another withdraw</button>            
            </>  
            )
        }
        />
    );
}
