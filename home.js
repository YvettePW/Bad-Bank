function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the bank"
            text="For all your banking needs"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}