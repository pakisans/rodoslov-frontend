import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
    sr: {
        header: {
            logout: 'Izlogujte se',
            login: 'Prijava',
            family: 'Familije',
            registratoin: 'Registracija',
            adminPanel: {
                ttitle: 'Tabla rukovodioca',
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
                passwordError: 'Ovo polje je obavezno.',
            },
            registartion: {
                registartionTitle: 'Registracija',
            },
            family: {
                familyTitle: 'Familije',
                familyName: 'Naziv familije',
                editFamily: 'Izmena podataka za familiju',
                addFamily: 'Dodajte novu familiju'
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
                    firstName: 'Ime',
                    lastName: 'Prezime',
                    repeatPassword: 'Ponovite Lozinku',
                    email: 'Email',
                    register: 'Registrujte se',
                    repeatPasswordError: 'Lozinke se ne poklapaju',
                    userExist: 'Korisnik vec postoji'
                },
                common: {
                    required: 'Ovo polje je obavezno.',
                    saveButton: 'Sacuvaj',
                    cancelButton: 'Odustani'
                },
                family: {
                    familyName: 'Naziv familije'
                }
            },
            dataGrid: {
                actions: 'Akcije',
                deleteItem: 'Izbrisi stavku',
                editItem: 'Izmeni stavku',
                add: 'Dodaj',
            },
            helpDialog: {
                deleteTitle: 'Brisanje stavke',
                deleteText: 'Da li ste sigurni da zelite da obrisete ovu stavku?',
                yesText: 'Potvrdite',
                noText: 'Odustanite'
            },
            adminPanel: {
                adminTitle: 'Administracija',
                entities: {
                    family: 'Familije',
                    sheets: 'Listovi',
                    biography: 'Biografije'
                }
            },
            actionCell: {
                delete: 'Brisanje',
                edit: 'Izmena'
            }
        }
    },
});

export default strings;