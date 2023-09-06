function AllData(){
    const ctx = React.useContext(UserContext);
    return (
                <Card
                bgcolor="primary"
                txtcolor="white"
                header="ALL DATA"
                title="Name"
                body={JSON.stringify(ctx.users.map)}
                />
    );
}