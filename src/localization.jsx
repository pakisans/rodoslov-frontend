import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
    sr: {
        header: {
            logout: 'Izlogujte se',
            login: 'Prijava',
            family: 'Familije',
            registratoin: 'Registracija',
            adminPanel: {
                addFamily: 'Dodaj familiju',
            },
            navigation: 'Navigation',
            title: 'Rodoslov',
            panel: 'User panel'
        },
        pages: {
            welcomePage:{
                login: 'Ulogujte se',
                userLogin: 'Nastavite kao gost',
                welcome: 'Dobrodosli',
                rodoslov: 'Rodoslov'
            },
            login: {
                loginTitle: 'Prijava na sistem',
                fieldRequired: 'Ovo polje je obavezno.',
                emailError: 'Unesite ispravnu email adresu.',
                passwordError: 'Ovo polje je obavezno.'
            },
            registartion: {
                registartionTitle: 'Registracija'
            }
        },
        components: {
            forms: {
                loginForm: {
                    username: 'Email',
                    password: 'Lozinka',
                    registration: 'Registrujte se',
                    login: 'Prijava',
                    invalidCreds: 'Uneti podaci nisu tacni'
                },
                registerForm: {
                    username: 'Email',
                    password: 'Lozinka',
                    repeatPassword: 'Ponovite Lozinku',
                    email: 'Email',
                    register: 'Registrujte se',
                    repeatPasswordError: 'Lozinke se ne poklapaju',
                    userExist: 'Korisnik vec postoji'
                }
            },
        }
    },
});

export default strings;