const WelcomeMessage = ()=> {
    return (
        <div data-testid="app-welcome-message" className="app__welcomeMessage">
          <p>
            Please enter an ID, outcode, or Street to find related properties
            <br></br>
            Try searching for an outcode like E1 or E11 or a Streetname like Primerose Road
            <br></br>
            Then select the property to see related transactions
          </p>
        </div>
    )
}

export default WelcomeMessage;