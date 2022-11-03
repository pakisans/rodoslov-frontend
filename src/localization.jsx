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
            },
            biography: {
                pageTitle: 'Biografije',
                addBiography: 'Dodaj biografiju',
                editBiography: 'Izmeni biografiju',
                dateFrom: 'Vazi od',
                dateTo: 'Vazi do',
                whereIs: 'Gde je bio',
                biographyDescription: 'Opis biografije',
                graveMarker: 'Grobna oznaka',
                spouseInformation: 'Supruznik',
                sheet: 'List'
            },
            sheets: {
                pageTitle: 'Listovi',
                addSheet: 'Dodavanje lista',
                editSheet: 'Izmena lista',
                firstName: 'Ime',
                isStructure: 'Ima strukturu',
                dateOfBirth: 'Datum rodjenja',
                dateOfDeath: 'Datum smrti',
                address: 'Adresa',
                photo: 'Slika',
                family: 'Familija',
                currentLevel: 'Koleno'
            },
            structure: {
                pageTitle: 'Strukture',
                addStructure: 'Dodajte strukturu',
                editStructure: 'Izmenite strukturu'     
            }
        },
        components: {
            common: {
                select:'Izaberi'
            },
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
                },
                strucutre: {
                    firstName: 'Ime',
                    isStructure: 'Ima strukturu',
                    dateOfBirth: 'Datum rodjenja',
                    dateOfDeath: 'Datum smrti',
                    address: 'Adresa',
                    photo: 'Slika',
                    family: 'Familija',
                    currentLevel: 'Koleno',
                    superior: 'Odredjeni',
                    subordinate: 'Podredjeni',
                    addPhoto: 'Ubacite sliku',
                    photo: 'Slika'
                },
                biography: {
                    list: 'List',
                    dateFrom:'Vazi od',
                    dateTo:'Vazi do',
                    whereIs:'Gde je bio',
                    biographyDescription: 'Opis biografije',
                    graveMarker:'Grobna oznaka',
                    spouseInformation: 'Supruznik',
                    sheet: 'List'
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
                    biography: 'Biografije',
                    structure: 'Struktura'
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