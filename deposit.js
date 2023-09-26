function Deposit(){
    const [show, setShow]                       = React.useState(true);
    const [status, setStatus]                   = React.useState('');
    const [balance, setBalance]                 = React.useState(0); // initialize balance to zero
    const [deposit, setDeposit]                 = React.useState('');
    const ctx = React.useContext(UserContext);
  
    const isSubmitDisabled = !deposit;

    function validate(field, label){
       if (parseFloat(field) <= 0) {
            setStatus("Error: Your " + label + " must be greater than zero");
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

//  function buttonDisabled(){
//        if ({handleSubmit} = false) {
 //           button.disabled = true;
 //       } else {
 //           button.disabled = false;
 //       }
 //   }

 
//    const disableButton = () => {
 //       setButtonDisabled(true);
 //   };
  
  //  const enableButton = () => {
  //      setButtonDisabled(false); 
 //   };

//   function handleSubmit(){
//        console.log(deposit);
//         if (!validate(deposit, 'deposit')) return;
//        ctx.users.push({deposit}); 
//        setShow(true);
//    }; 


//function m(x) {
 //   if (isNaN(x)) {
//      return 'hi';
//    }
//    return x;
//  }
//console.log(m('tryrtF'));
// Expected output: "Not a Number!"
//console.log(m('45'));
// Expected output: 3140