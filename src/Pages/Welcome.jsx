import strings from "../localization";

const Welcome = () => {
    return <div className="welcome-page">
        <span className="text">{strings.pages.welcomePage.welcome}</span>
        <span className="text">{strings.pages.welcomePage.rodoslov}</span>
    </div>
}

export default Welcome;