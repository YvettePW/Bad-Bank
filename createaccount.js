function CreateAccount(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState(''); 
    const ctx=React.useContext(UserContext);
 
    const isSubmitDisabled = !name && !email && !password;

    var regix = new RegExp("^(?=.{8,})");

    function regix(field, label) { 
        if (!field) { 
            setStatus("Error: Enter a password of 8 digits or more ");
            setTimeout(() => setStatus(''),3000);
            return false; 
        }   
            return true; 
    }; 

    function validate(field, label){
        if (!field) {
            setStatus('Error: Enter ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    };
    
    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name,     'name'))        return;
        if (!validate(email,    'email'))       return;
        if (!validate(password, 'password'))    return; 
        if (!regix.test(password, 'password'))  return;
        ctx.users.push({name,email,password,balance:100});  
        setShow(false);     
    };

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    };

    return (
        <Card
            bgcolor="primary"
            header="CREATE ACCOUNT"
            status={status}
            body={show ? (
                <>
                Name<br/>
                
                <input 
                type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} /><br/>
                
                Email address<br/>
                
                <input type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}/><br/>
                
                <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter a password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/><br/>
                
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleCreate}
                disabled={isSubmitDisabled}>Create Account</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    );
}